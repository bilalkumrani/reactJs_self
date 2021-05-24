import React from 'react'


class CartItem extends React.Component {

    render()
    {
        return(

            <div className="CartItem" >
                <div className="left-block">
                    <img src="" alt="" style={styles.image}/>
                </div>

                <div className="right-block">
                    <div>laptop</div>
                    <div>99</div>
                    <div>1</div>
                    <div className='cart-item-action'>
                    <button>+</button>
                    <button>-</button>
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
        borderRadius: 4,
        display: 'inline'

    }
}

export default CartItem;