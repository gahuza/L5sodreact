import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { Component } from 'react';


 // const [count, setCount] = useState(0)

 class App extends Component {
  constructor() {
    super();
    this.state = {
      count:0,
    }

    // this.state = {
    //   user: null,
    // };
  }
  incrementCount=()=>{
    this.setState((prevstate)=>({
    count:prevstate.count +1
    }))
  }

  decrementcount=()=>{
    this.setState((laststate)=>({
      count: laststate.count -1
    }))
  }

  updateCount=()=>{
    this.setState((upState)=({
      count:upState.count * 20
    }))
  }
    componentDidMount() {
    // Fetching data from an API when the component is mounted

    
    // fetch('https://jsonplaceholder.typicode.com/users/1')
    //   .then(response => response.json())
    //   .then(data => this.setState({ user: data }));
  }

  render(){
    return (
      <div className='App'>
     
      <Home/>
      <Header/>
      <h1>Count:{this.state.count}</h1>
      <button onClick={this.incrementCount} className='bg-{color}-gray'>Increment</button> <br/> <br/>
      <button onClick={this.decrementcount}>Decrement</button> <br/> <br/>
      <button onClick={this.updateCount}>Update State</button>

      
      </div>
    )

    // const { user } = this.state;
    // return (
    //   <div>
    //     {user ? (
    //       <div>
    //         <h1>{user.name}</h1>
    //         <p>{user.email}</p>
    //       </div>
    //     ) : (
    //       <p>Loading...</p>
    //     )}
    //   </div>
    // );
  

  }

}

export default App
