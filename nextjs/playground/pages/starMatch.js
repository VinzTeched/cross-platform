import styles from '@/styles/starMatch.module.css';
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

const StarMatch = () => {
    const [isClient, setIsClient] = useState(false);
 
    useEffect(() => {
        setIsClient(true)
      }, []);

    const [stars, setStars] = useState(isClient ? utils.random(1, 9): 6); //isClient ? utils.random(1, 9): 6;
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

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
        if(currentStatus == 'used') {
            return;
        }
        // create candidate numbers
        const newCandidateNums = currentStatus == 'available' ? candidateNums.concat(number) : candidateNums.filter(cn => cn !== number);
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

    return (
        <div className={styles.game}>
            <div className={styles.help}>
                Pick one or more numbers that sum to the number of stars
            </div>
            <div className={styles.body}>
                <div className={styles.left}>
                    <StarsDisplay stars={stars} />
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
            <div className={styles.timer}>Time Remaining: 10</div>
        </div>
    );
};

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
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),

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