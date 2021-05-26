import React from 'react';

export default function Navbar(props){

    const styles = {


        icon:{
            height:50,
            float: 'right',
            margin: 10  
        },
        nav:{
            height: 70,
            backgroundColor: 'green',
            display: 'block'
        },
        itemCount:{
            display: 'flex',
            float: 'right',
            marginRight: 30,
            backgroundColor: 'yellow',
            borderRadius: 50,
            padding: 10
        }
    }
    const countProducts = (products) => {
        
        let count = 0;
        products.forEach((item)=>{
            count += item.qty;
        })

        return count;
    }

return(

    <div className="nav" style={styles.nav} >
    <div className="icon-container">
        <p className="item-cout" style={styles.itemCount}>{countProducts(props.products)}</p>
        <img style={styles.icon} src="https://image.flaticon.com/icons/png/512/1170/1170678.png" alt=""/>
    </div>

    </div>

)

}