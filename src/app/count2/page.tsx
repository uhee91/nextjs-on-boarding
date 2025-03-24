'use client'

import React from 'react';
// import useCreateCounterStore from '@/shareds/stores/count2';
import { useCreateCounterStore } from '@/shareds/stores/count2';

const Counter = () => {
    // 상태와 메서드를 훅으로 가져오기
    const count = useCreateCounterStore((state) => state.count);
    const increment = useCreateCounterStore((state) => state.increment);
    const decrement = useCreateCounterStore((state) => state.decrement);
    const clear = useCreateCounterStore((state) => state.clear);
    const isNumberMaxMin = useCreateCounterStore((state) => state.isNumberMaxMin);
    const logStore = useCreateCounterStore((state) => state.logStore);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={clear}>Clear</button>
            <button onClick={isNumberMaxMin}>isNumberMaxMin</button>
            <button onClick={logStore}>상태 콘솔 출력</button>
        </div>
    );
};

export default Counter;