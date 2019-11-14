import React,{Component} from 'react';

export const ProductContext = React.createContext();

class ProductProvider extends Component{
    state = {
        products:getData()
    };
    render() {
        return (
            <ProductContext.Provider
                value={{
                    products: this.state.products
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export default ProductProvider;

function getData(){
    return [
        {
            id:120,
            title: "Nokia 6310i",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717361/phones/nokia-6310i-1000x1000.jpg",
            price:1000
        },
        {
            id:121,
            title: "Siemens E50",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717361/phones/siemens-a50-1000x1000.jpg",
            price:1000
        },
        {
            id:122,
            title: "Sony-Ericsson W710i",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717360/phones/sony-ericsson-w710i-1000x1000.jpg",
            price:1000
        },
        {
            id:123,
            title: "Nokia 5210",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717360/phones/nokia-5210-1000x1000.jpg",
            price:1000
        },
        {
            id:124,
            title: "Blackberry 9650",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717358/phones/blackberry-bold-9650-1000x1000.jpg",
            price:1000
        },
        {
            id:125,
            title: "Nokia E5",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717357/phones/nokia-e5-1000x1000.jpg",
            price:1000
        },
        {
            id:126,
            title: "Nokia E63",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717357/phones/nokia-e63-1000x1000.jpg",
            price:1000
        },
        {
            id:127,
            title: "Motorola E398",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717357/phones/motorola-e398-1000x1000.jpg",
            price:1000
        },
        {
            id:128,
            title: "Ericsson T65",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717355/phones/ericsson-t65-1000x1000.jpg",
            price:1000
        },
        {
            id:129,
            title: "Nokia 6300",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717355/phones/nokia-6300-1000x1000.jpg",
            price:1000
        },
        {
            id:130,
            title: "Ericsson T20S",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717354/phones/ericsson-t20s-1000x1000.jpg",
            price:1000
        },
        {
            id:131,
            title: "Motorola v3i",
            shortDesc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis commodi cumque, distinctio est eveniet expedita fugit illo impedit in magnam magni, minima natus pariatur placeat porro quaerat reiciendis repudiandae?",
            img:"https://res.cloudinary.com/sheygam/image/upload/v1573717354/phones/motorola-razr-v3i-1000x1000.jpg",
            price:1000
        }
    ];
}
