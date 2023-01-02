import { useReducer } from 'react';

const reducer =(state, action) => {
    if(action.type === 'buy_ingredients') return {money: state.money - 10};
    if(action.type === 'sell_a_meal') return {money: state.money + 10};
    if(action.type === 'celebrity_visit') return {money: state.money + 5000};
    return state;
}
function Tracker() {
    const initialState = {money: 100};
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({type: 'buy_ingredients'})}>Shopping for veggies!</button> &nbsp;
                <button onClick={() => dispatch({type: 'sell_a_meal'})}>Serve a meal to a customer</button> &nbsp;
                <button onClick={() => dispatch({type: 'celebrity_visit'})}>Celebrity Visit</button>
            </div>
        </div>
    )
}

export default Tracker;