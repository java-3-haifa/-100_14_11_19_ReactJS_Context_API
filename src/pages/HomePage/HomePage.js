import React from 'react';
import './HomePage.css';
import ProductCard from '../../components/ProductCard/ProductCard'
import {ProductContext} from '../../hoc/ProductProvider/ProductProvider'

function HomePage(props) {
    return (
        <div className="Container">
            <ProductContext.Consumer>
                {context =>{
                   return context.products.map(p => <ProductCard key={p.id}
                                                           title={p.title}
                                                           id={p.id}
                                                           desc={p.shortDesc}
                                                           img={p.img}
                                                           price={p.price}
                                                           count={0}
                    />)
                }}
            </ProductContext.Consumer>


        </div>
    );
}

export default HomePage;
