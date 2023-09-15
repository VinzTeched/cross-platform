import styles from '@/styles/StarMatch.module.css';
import { useState, useEffect } from 'react';


const StarsDisplay = props => (
    <>
        {utils.range(1, props.stars).map(starId => (
            <div key={starId} className={styles.star} ></div>
        ))}
    </>
)

const PlayNumber = props => (
    <button 
        className={styles.number} 
        style={{ backgroundColor: colors[props.status] }}
        onClick={() => props.onClick(props.number, props.status)}
    >
        {props.number}
    </button>
);

const PlayAgain = props => (
    <div className={styles.gamedone}>
        <div 
            className={styles.message}
            style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
            >
            {props.gameStatus === 'lost' ? 'Game Over' : 'Nice Game'}
        </div>
        <button onClick={props.onClick}>Play Again</button>
    </div>
);

const useGameState = () => {
    const [isClient, setIsClient] = useState(false);
 
    useEffect(() => {
        setIsClient(true)
      }, []);

    const [stars, setStars] = useState(isClient ? utils.random(1, 9) : 6); //isClient ? utils.random(1, 9): 6;
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if(secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        }
    });

    const setGameState = (newCandidateNums) => {
        if(utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    }

    return { stars, availableNums, candidateNums, secondsLeft, setGameState }
}

const Game = (props) => {
    const { stars, availableNums, candidateNums, secondsLeft, setGameState } = useGameState();

    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    // const gameIsWon = availableNums.length === 0;
    // const gameIsLost = secondsLeft === 0;
    const gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

    const resetGame = () => {
        setStars(isClient ? utils.random(1, 9): 6);
        setAvailableNums(utils.range(1, 9));
        setCandidateNums([])
    };

    const numberStatus = (number) => {
        if(!availableNums.includes(number)) {
            return 'used';
        }
        if(candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong': 'candidate';
        }

        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {
        if(gameStatus !== 'active' || currentStatus == 'used') {
            return;
        }
        // create candidate numbers
        const newCandidateNums = currentStatus == 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);
        
        setGameState(newCandidateNums);
    }

    return (
        <div className={styles.game}>
            <div className={styles.help}>
                Pick one or more numbers that sum to the number of stars
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    {gameStatus != 'active' ? (
                        <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
                    ) : (
                        <StarsDisplay stars={stars} />
                    )}
                </div>
                <div className={styles.right}>
                    {utils.range(1, 9).map(number => 
                        <PlayNumber 
                            key={number} 
                            status={numberStatus(number)}
                            number={number} 
                            onClick={onNumberClick}
                        />
                    )}
                </div>
            </div>
            <div className={styles.timer}>Time Remaining: {secondsLeft}</div>
        </div>
    );
};

const StarMatch = () => {
    const [gameId, setGameId] = useState(1);
    return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}

// Color Themes
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

// Math science
const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),

    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i),

    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

    // given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available num in arr
    randomSumIn: (arr, max) => {
        const sets = [[]];
        const sums = [];
        for (let i = 0; i < arr.length; i++) {
          for (let j = 0, len = sets.length; j < len; j++) {
            const candidateSet = sets[j].concat(arr[i]);
            const candidateSum = utils.sum(candidateSet);
            if (candidateSum <= max) {
              sets.push(candidateSet);
              sums.push(candidateSum);
            }
          }
        }
        return sums[utils.random(0, sums.length - 1)];
      },
    };
export default StarMatch;