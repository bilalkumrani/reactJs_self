import {Component, setState} from 'react'

class MyComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            address:'',
            cms:'',
            university:''
        }
    }

    changing = (e) => {
        const name = e.target.name
        this.setState({
            [name] : e.target.value
        })
    }
    

    render()
    {
        return <>
    <input type="text" name="name" onChange={this.changing}
    value={this.state.name} id=""/>

<input type="text" name="address" onChange={this.changing} 
    value={this.state.address} id=""/>


<input type="text" name="cms" onChange={this.changing} 
    value={this.state.cms} id=""/>


<input type="text" name="university" onChange={this.changing} 
    value={this.state.university} id=""/>








    <h1>name {this.state.name}</h1>
    <h1>address {this.state.address}</h1>
    <h1>cms {this.state.cms}</h1>
    <h1>universty {this.state.university}</h1>
    


    </>

    }

   }
   
   export default MyComponent;