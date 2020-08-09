useReducer는 action 객체를 상태를 기반으로 업데이트
상태 업데이트 로직을 컴포넌트밖으로 분리 가능
reducer는 상태를 업데이트하는 함수
const [number, dispatch] = useReducer(reducer, 0)

Counter.js

import React, {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default:
            throw new Error('Unhandeld action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT'
        })
    };
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;


index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Counter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
