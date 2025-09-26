//code for styling
// .counter-container {
//   text-align: center;
//   margin-top: 50px;
//   font-family: Arial, sans-serif;
// }

// .title {
//   font-size: 28px;
//   color: #333;
// }

// .count {
//   font-size: 22px;
//   margin: 20px 0;
//   color: #555;
// }

// .btn-group {
//   display: flex;
//   justify-content: center;
//   gap: 15px;
// }

// .btn {
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: 0.3s ease;
// }

// .increase {
//   background-color: #4caf50;
//   color: white;
// }

// .increase:hover {
//   background-color: #45a049;
// }

// .decrease {
//   background-color: #f44336;
//   color: white;
// }

// .decrease:hover {
//   background-color: #d32f2f;
// }


import React, {Component} from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";

class Counter extends Component {

    constructor(props){
      super(props)
      this.state={
        count:0
      }
      console.log("constructor")
    }
    
    componentWillMount(){
      console.log("componentWillMount method called")
    }

    componentDidMount(){
      console.log("componentDidMount method called")
    }

    shouldComponentUpdate(nextProp,nextState){
      console.log("shouldComponentUpdate method called")
      return true
    }

    componentWillUpdate(nextProp,nextState){
      console.log("componentWillUpdate method called")
    }

    componentDidUpdate(prevProp,prevState){
      console.log("componentDidUpdate method called")
    }

    componentWillUnmount(){
      console.log("componentWillUnmount method called")
    }

    increase=()=>{
      this.setState({count:this.state.count+1})
    }
    decrease=()=>{
      this.setState({count:this.state.count-1})
    }

    render() {
      console.log("render")
    return (
      <div className="counter-container">
        <h1 className="title">React Lifecycle Counter</h1>
        <h2 className="count">Count:{this.state.count}</h2>
        <div className="btn-group">
          <button className="btn increase" onClick={this.increase}>
            Increase
          </button>
          <button className="btn decrease" onClick={this.decrease}>
            Decrease
          </button>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter/>);


