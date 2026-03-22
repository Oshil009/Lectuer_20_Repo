import React from 'react'
import { useSelector } from 'react-redux';
const Stats = () => {
    const totalIncrements = useSelector(state => state?.counter?.totalIncrements)
    const totalDecrements = useSelector(state => state?.counter?.totalDecrements)
    return (
        <div style={{
            marginTop: '30px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
            <h3>Live Statistics</h3>
            <p>Total Times Incremented: <strong>{totalIncrements}</strong></p>
            <p>Total Times Decremented: <strong>{totalDecrements}</strong></p></div>
    )
}

export default Stats