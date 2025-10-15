import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, createRef } from "react";

class UncontrolledComponent extends Component {

    constructor(props) {
        super(props)
        this.email = React.createRef()
        this.password = React.createRef()
    }
    handlesubmit=(event)=>{
        console.log("Email: "+this.email.current.value)
        console.log("Password: "+this.email.current.value)
        event.preventDefault()
    }
    render() {
        return (
            <div className='ms-5 mt-5'>
                <form onSubmit={this.handlesubmit}>
                <div>
                    <label className="form-label">Email: <input ref={this.email} className="form-control" type="email"/> </label>
                </div>
                <div>
                    <label className='form-label'>Password: <input ref={this.password} className="form-control" type="text"/> </label>
                </div>
                <input class="btn btn-primary mt-3" type="submit" value="Submit" />
                </form>
            </div>
            
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UncontrolledComponent />);