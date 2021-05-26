import CartItem from './CartItem';
import React from 'react';


function Cart(props){

    
    

        const {products} = props;
        return(
            <div className="cart">
            {
                products.map((product,index)=>{
                    return  <CartItem 
                    product={product} 
                    key={index}
                    onQtyInc = {props.onQtyInc}
                    onQtyDec = {props.onQtyDec}
                    onDelete = {props.onDelete}

                    />;
                    
                })
            }
            </div>
        );
    
}
export default Cart;