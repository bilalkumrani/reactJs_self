import React from 'react'


class CartItem extends React.Component {
    constructor(){
        super()
        this.state={
            price:99,
            title: 'Mobile phone',
            qty: 1,
            img: ''
        }
        
    }

  increaseQty = () =>{
        console.log(this.state)
    }
    
    render()
    {

        const { price, title, qty, img }  = this.state;
        return(

            <div className="CartItem" >
                <div className="left-block">
                    <img src="" alt="" style={styles.image}/>
                </div>

                <div className="right-block">
                    <div>{title}</div>
                    <div>{price}</div>
                    <div>{qty}</div>
                    <div className='cart-item-action'>
                    <button onClick={this.increaseQty}>+</button>
                    <button>-</button>
                    <button>delete</button>
                    </div>
                </div>
            </div>

        )
    }
}

const styles = {

    image:{
        height: 110,
        width : 110,
        borderRadius: 10,
        display: 'inline',
        backgroundColor : '#ccc',

    }
}

export default CartItem;