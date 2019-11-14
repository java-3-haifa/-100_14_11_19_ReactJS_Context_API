import React,{Component} from 'react';
import Wrapper from './Wrapper.js'

export const StoreContext = React.createContext();
class Store extends Component{
    state = {
        count:0
    };

    updateCount = (cnt) =>{
        this.setState({
            count:cnt
        });
    };
    render() {
        return (
            <div>
                <StoreContext.Provider
                    value={{
                        count:this.state.count,
                        update:this.updateCount
                    }}
                >
                <Wrapper/>
                </StoreContext.Provider>
            </div>
        );
    }
}

export default Store;
