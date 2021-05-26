import './App.css';
import  Cart from './Cart'
import Navbar from './Navbar'
import React from 'react';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
        products:[

            {
                price:99,
                title: 'Mobile phone',
                qty: 1,
                img: '',
                id: 1
                
            },
            {
                price:80,
                title: 'laptop',
                qty: 1,
                img: '',
                id: 2
            },
            {
                price:70,
                title: 'power bank',
                qty: 1,
                img: '',
                id: 3
            },
            {
                price:60,
                title: 'Watch',
                qty: 1,
                img: '',
                id: 4
            }
        ]
    }


}

qtyHandlerInc = (product) => {
    
    const { products } = this.state;
    const index = products.indexOf(product)
    products[index].qty+=1;
    this.setState({
        product
    })
}

qtyHandlerDec = (product) => {
    
    const {products} = this.state;
    const index = products.indexOf(product)
    products[index].qty === 0 ? products[index].qty-=0 : products[index].qty -= 1;
    this.setState({
        product
    })
}

deleteHandler = (id) =>{
    console.log('id',id)
    const {products} = this.state;
    const newProducts = products.filter((item)=> id!==item.id);
    console.log(newProducts)
    this.setState({
        products: newProducts
    })

}
 getTotal(){
     let total=0;
     
     this.state.products.forEach((item)=>{
         total+=item.price*item.qty;

     })
     return total;
 }


  render() {
      const {products} = this.state;

      return(
        <div>
        <Navbar products={products}/>
        <h1>Cart</h1>
        <Cart
        onQtyDec= {this.qtyHandlerDec}                   
        onQtyInc={this.qtyHandlerInc}
        onDelete = {this.deleteHandler}
        products={products}
        />

        <div>Total cart Price: {this.getTotal()}</div>
      
      </div>
      )
    
  }
}

export default App;
