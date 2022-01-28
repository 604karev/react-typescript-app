import { useReducer } from "react"


const initialState = {
    counter: 100
}
type ACTIONTYPES =
    | { type: 'INCREMENT'; payload: number }
    | { type: 'DECREMENT'; payload: number }


const counterReducer = (state: typeof initialState, action: ACTIONTYPES) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - action.payload
            };
        default:
            throw new Error('Bad action')
    }

}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
            <h2>useReducer</h2>
            <div>{state.counter}</div>
            <button onClick={() => dispatch({
                type: 'INCREMENT',
                payload: 10

            })}>Increment</button>
            <button onClick={() => dispatch({
                type: 'DECREMENT',
                payload: 5

            })}>Decrement</button>
        </div>
    )

}
export default UseReducerHook