import React,{Component} from "react"
import DinningTable from "./DinningTable"

class Tables extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <DinningTable name='Drashti Mehta' tableno='1' />
                    <DinningTable name='Kiran Bhatt' tableno='2'/>
                </div>
            </div>
        );
    }
}

export default Tables