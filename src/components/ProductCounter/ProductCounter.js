import React from 'react';
import "./ProductCounter.css"

function ProductCounter(props) {
    return (
        <>
            <i className="material-icons md-red">remove_circle_outline</i>
            <input type="number" className="form-control" />
            <i className="material-icons md-green">add_circle_outline</i>
        </>
    );
}

export default ProductCounter;
