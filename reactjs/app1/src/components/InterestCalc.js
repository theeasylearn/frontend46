import React,{Component} from 'react';

class InterestCalc extends Component{

    constructor(props){
        super(props)

        this.state={
            pa:0,
            ir:0,
            time:0,
            res:0
        }
    }
    
    updatePa=(event)=>{
        console.log(event)
        this.setState({pa:event.target.value})
    }

    updateIr=(event)=>{
        this.setState({ir:event.target.value})
    }

    UpdateTime=(event)=>{
        this.setState({time:event.target.value})
    }

    SimpleInterest=(event)=>{
        this.setState({res:(this.state.pa*this.state.ir*this.state.time)/100})
        event.preventDefault()
    }

    render(){
        return(
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-header text-bg-primary text-center">
                                <h4>Simple Interest Calculator ₹</h4>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title text-center mb-4" />
                                <form onSubmit={this.SimpleInterest}>
                                    <div className="mb-3">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="principal"
                                                placeholder="Principal Amount"
                                                required=""
                                                onBlur={this.updatePa}
                                            />
                                            <label htmlFor="principal">Principal Amount ( ₹ )</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="rate"
                                                placeholder="Interest Rate"
                                                required=""
                                                onBlur={this.updateIr}
                                            />
                                            <label htmlFor="rate">Interest Rate (%)</label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-floating">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="time"
                                                placeholder="Time Period"
                                                required=""
                                                onBlur={this.UpdateTime}
                                            />
                                            <label htmlFor="time">Time Period (Years)</label>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary">
                                            Calculate
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-4 text-center">
                                    <h5>Result</h5>
                                    <p id="result" className="fw-bold">
                                        Simple Interest: {this.state.res}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default InterestCalc