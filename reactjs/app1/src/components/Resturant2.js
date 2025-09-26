import React from "react";
import DinningTable from "./DinningTable";
class Resturant extends React.Component {
    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <DinningTable name='Diya Patel' tableno='1' />
                    <DinningTable name='Kartik bhatt' tableno='2' />
                    <DinningTable name='Asit Mali' tableno='3' />
                    <DinningTable name='Rahul Mehta' tableno='4' />
                </div>
            </div>
        );
    }
}
export default Resturant
