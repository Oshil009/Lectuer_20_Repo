import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../redux/counterSlice';

const History = () => {
    const history = useSelector((state) => state.counter.history);
    const dispatch = useDispatch();

    return (
        <div style={{ marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
            <h3>Action History</h3>

            {history.length === 0 ? (
                <p>No actions performed yet.</p>
            ) : (
                <>
                    <button onClick={() => dispatch(clearHistory())} style={{ marginBottom: '10px', color: 'red' }}>
                        Clear History
                    </button>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {history.map((item, index) => (
                            <li key={index} style={{ padding: '5px 0', borderBottom: '1px shadow #f0f0f0' }}>
                                <strong>{item.action} </strong>
                                | Change: <span style={{ color: item.change.startsWith('+') ? 'green' : 'red' }}>
                                    {item.change}
                                </span>
                                - <small>{item.timestamp}</small>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default History;