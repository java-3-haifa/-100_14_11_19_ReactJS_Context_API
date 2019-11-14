import React from 'react';
import {withRouter} from "react-router-dom";

function ProductViewPage(props) {
    return (
        <h2>{props.match.params.id}</h2>
    );
}

export default withRouter(ProductViewPage);
