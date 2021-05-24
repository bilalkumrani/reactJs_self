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
        // if we directly increse the value of qty the value of qty in object will be incresed but react will dont know about it and it will not re render it so for that we use setState() function that is in React.Component, there are two ways to use it. following are the ways:

        // this.setState({

        //     qty: this.state.qty+=1
        // }) // in this way we give it an object and write the changes in state


        // the other way is: by passing callback functiont to the setState() lets see
        this.setState((preState)=>{
                return {
                    qty: preState.qty+=1
                }
        })

        // calling the setState function basically caouse the re rendering of our component

    }


    decreseQty = () =>{

        this.setState((preState)=>{

            return {
                qty: preState.qty-=1
            }
        })
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
                    <button onClick={this.decreseQty}>-</button>
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