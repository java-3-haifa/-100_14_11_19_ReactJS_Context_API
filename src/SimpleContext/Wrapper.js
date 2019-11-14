import React from 'react';
import Counter from './Counter';

function Wrapper(props) {
    return (
        <div>
            <h2>Wrapper</h2>
            <Counter />
        </div>
    );
}

export default Wrapper;
