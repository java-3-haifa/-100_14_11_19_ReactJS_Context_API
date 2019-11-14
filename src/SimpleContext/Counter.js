import React from 'react';
import {StoreContext} from './Store'

function Counter(props) {
    return (
        <StoreContext.Consumer>
            {(context) => {
                return (
                    <div>
                        <h2>Counter</h2>
                        <button onClick={() => context.update(context.count - 1)}
                        >-
                        </button>
                        <input value={context.count}
                               type="text"
                               onChange={(e) => context.update(parseInt(e.target.value))}
                        />
                        <button>+</button>
                    </div>
                );
            }
            }
        </StoreContext.Consumer>


    );
}

export default Counter;
