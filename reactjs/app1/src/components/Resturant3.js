import React, { Component } from "react";
import DinningTable from "./DinningTable";

export default class BookingTable extends Component{

    constructor(props){
        super(props)
        this.state={

            name:'',
            tableno:0,
            tables:[]

        }
    }

    updateState=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    
    createTable=(event)=>{
        event.preventDefault()
        let newinfo={name:this.state.name,tableno:this.state.tableno}
        this.setState({tables:[...this.state.tables,newinfo],
                        name:'',
                        tableno:0
        })
        
    }

    render(){
        return(
            <>
                <div className="container-fluid d-flex justify-content-between p-3 bg-light shadow">
                <h1>Shreeji Resturant</h1>
                <form className="row g-3" onSubmit={this.createTable}>
                    <div className="col-auto">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Guest Name"
                                required=""
                                name="name"
                                value={this.state.name}
                                onChange={this.updateState}
                            />
                            <label htmlFor="name">Guest Name</label>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="form-floating">
                            <input
                                type="number"
                                className="form-control"
                                id="tableno"
                                placeholder="Table No"
                                required=""
                                name="tableno"
                                value={this.state.tableno}
                                onChange={this.updateState}
                            />
                            <label htmlFor="tableno">Table No</label>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">
                            Add Table
                        </button>
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row">
                    {
                        this.state.tables.map(
                            (item)=>{
                                return <DinningTable name={item.name} tableno={item.tableno} />
                            }
                        )
                    }
                </div>
            </div>
            </>
        );
    }
}

