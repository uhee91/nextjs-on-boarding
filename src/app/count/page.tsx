'use client'

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div><button>이전 페이지 이동</button></div>
            <p>{count}</p>
            <div><button onClick={() => setCount(count + 1)}>Increment</button></div>
            <div><button onClick={() => setCount(count - 1)}>Decrement</button></div>
            <div><button onClick={() => setCount(0)}>Clear</button></div>
        </div>
    );
}