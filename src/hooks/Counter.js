import React, { useReducer } from 'react';

const initialState = { count: 0 }

function reducer(currentState, action) {
    switch (action.type) {
        case 'add':
            return {
                count: currentState.count + 1
            }
        case 'add10':
            return {
                count: currentState.count + action.value
            }
        case 'minus':
            return {
                count: currentState.count - 1
            }
        case 'reset':
            return {
                count: initialState.count
            }
        default:
            throw new Error();
    }
}

const Counter = () => {

    // const [state, dispatch] = useReducer(reducer, initialState)
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
            <button onClick={() => dispatch({ type: 'add10', value: 10 })}>+ 10</button>
            <button onClick={() => dispatch({ type: 'minus' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default Counter;