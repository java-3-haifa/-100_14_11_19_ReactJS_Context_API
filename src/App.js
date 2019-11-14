import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from './hoc/layout/Layout'
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import ListPage from "./pages/ListPage/ListPage";
import ProductViewPage from "./pages/ProductViewPage/ProductViewPage";
import ProductProvider from "./hoc/ProductProvider/ProductProvider";

function App() {
    return (
        <ProductProvider>
            <Layout>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/cart" component={CartPage}/>
                    <Route path="/list" component={ListPage}/>
                    <Route exact path="/product/:id" component={ProductViewPage}/>
                </Switch>
            </Layout>
        </ProductProvider>
    );
}

export default App;
