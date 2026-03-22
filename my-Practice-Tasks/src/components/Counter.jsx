import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from '../redux/counterSlice'
const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    const [amount,setAmount]=useState(0);
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Counter: {count}</h1>

            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                {count>0 ? <button onClick={() => dispatch(decrement())}>Decrement</button> : <></>}
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>

            <div style={{ marginTop: '10px' }}>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={() => dispatch(incrementByAmount(amount))}>
                    Add Amount
                </button>
            </div>
        </div>
    )
}

export default Counter