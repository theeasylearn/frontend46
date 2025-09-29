import React, { Component } from "react";

export default class Scoreboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            zero: 0,
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            six: 0,
            runs: 0,
            balls: 0,
            strike: 0
        }
    }

    updateScore = (value) => {

        this.setState(
            (prevState) => {

                let newruns = prevState.runs + value
                let newballs = prevState.balls + 1
                let newstrike = (newruns / newballs) * 100

                switch (value) {
                    case 0:
                        return{
                            zero: prevState.zero+1,
                            runs: newruns,
                            balls: newballs,
                            strike: newstrike
                        }

                    case 1:
                        return{
                            one:prevState.one+1,
                            runs: newruns,
                            balls: newballs,
                            strike: newstrike
                        }

                    case 2:
                        return{
                            two:prevState.two+1,
                            runs: newruns,
                            balls: newballs,
                            strike: newstrike
                        }

                    case 3:
                        return{
                            three:prevState.three+1,
                            runs: newruns,
                            balls: newballs,
                            strike: newstrike
                        }

                    case 4:
                        return{
                            four:prevState.four+1,
                            runs: newruns,
                            balls: newballs,
                            strike: newstrike
                        }

                    case 6:
                        return{
                            six:prevState.six+1,
                            runs: newruns,
                            balls: newballs,
                            strike: newstrike
                        }
                }
            }


        )
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card text-center">
                            <div className="card-header bg-primary text-white">
                                <h2>Virat Kohli</h2>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Match Statistics</h5>
                                <p className="card-text">
                                    <strong>Runs:</strong>{this.state.runs}
                                </p>
                                <p className="card-text">
                                    <strong>Balls:</strong>{this.state.balls}
                                </p>
                                <p className="card-text">
                                    <strong>Strike Rate:</strong>{this.state.strike}
                                </p>
                                <hr />
                                <h6 className="card-subtitle mb-2 text-muted">Runs per Over</h6>
                                <div className="row">
                                    <div className="col-2 border">
                                        <button type="button" className="btn w-100 btn-primary fs-5" onClick={() => { this.updateScore(0)}}>
                                            0 X <span className="badge bg-warning text-dark">{this.state.zero}</span>
                                        </button>
                                    </div>
                                    <div className="col-2 border">
                                        <button type="button" className="btn w-100 btn-primary fs-5" onClick={() => { this.updateScore(1)}}>
                                            1 X <span className="badge bg-warning text-dark">{this.state.one}</span>
                                        </button>
                                    </div>
                                    <div className="col-2 border">
                                        <button type="button" className="btn w-100 btn-primary fs-5" onClick={() => { this.updateScore(2)}}>
                                            2 X <span className="badge bg-warning text-dark">{this.state.two}</span>
                                        </button>
                                    </div>
                                    <div className="col-2 border">
                                        <button type="button" className="btn w-100 btn-primary fs-5" onClick={() => { this.updateScore(3)}}>
                                            3 X <span className="badge bg-warning text-dark">{this.state.three}</span>
                                        </button>
                                    </div>
                                    <div className="col-2 border">
                                        <button type="button" className="btn w-100 btn-primary fs-5" onClick={() => { this.updateScore(4)}}>
                                            4 X <span className="badge bg-warning text-dark">{this.state.four}</span>
                                        </button>
                                    </div>
                                    <div className="col-2 border">
                                        <button type="button" className="btn w-100 btn-primary fs-5" onClick={() => { this.updateScore(6)}}>
                                            6 X <span className="badge bg-warning text-dark">{this.state.six}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}