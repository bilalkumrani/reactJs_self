import CartItem from './CartItem';
import React from 'react';


class Cart extends React.Component{

    constructor(){
        super();

        this.state = {
            products:[

                {
                    price:99,
                    title: 'Mobile phone',
                    qty: 1,
                    img: ''
                },
                {
                    price:80,
                    title: 'laptop',
                    qty: 1,
                    img: ''
                },
                {
                    price:70,
                    title: 'power bank',
                    qty: 1,
                    img: ''
                },
                {
                    price:60,
                    title: 'Watch',
                    qty: 1,
                    img: ''
                }


            ]
        }


    }

    render(){

        const {products} = this.state;
        return(
            <div className="cart">
            {
                products.map((product,index)=>{
                    return  <CartItem product={product} key={index}/>;
                    
                })
            }
            </div>
        );
    }
}
export default Cart;