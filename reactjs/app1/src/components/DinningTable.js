import React,{Component} from "react"

class DinningTable extends Component{

    constructor(props){
        super(props)
        this.name=props.name;
        this.tableno=props.tableno;

        this.thaliPrice=100;
        this.rotiPrice=20;
        this.chasPrice=10;
        this.sweetPrice=15;
        this.papadPrice=5;

        this.state={
            thali:0,
            roti:0,
            chas:0,
            sweet:0,
            papad:0,
            total:0
        }
        console.log("Constructor called")
    }

    componentWillMount() {
        console.log('componentWillMount method called...');
    }
    componentDidMount() {
        console.log('componentDidMount method called...');
    }

    shouldComponentUpdate(nextProp, nextState){
        
        console.log('shouldComponentUpdate method called...');
        console.log(nextState);

        if (nextState.thali<=5){
            return true;
        }
        else{
            this.setState({thali:5});
            return false;
        }
    }

    componentWillUpdate(nextProp, nextState) {
        console.log('componentWillUpdate method called...');
        console.log(nextState);
    }

    addthali=()=>{
        this.setState({thali:this.state.thali+1});
    }

    addroti=()=>{
        this.setState({roti:this.state.roti+1});
    }

    addchas=()=>{
        this.setState({chas:this.state.chas+1});
    }

    addsweet=()=>{
        this.setState({sweet:this.state.sweet+1});
    }

    addpapad=()=>{
        this.setState({papad:this.state.papad+1});
    }

    componentDidUpdate(prevProp, prevState) {
        if(prevState.thali!=this.state.thali||
            prevState.roti!=this.state.roti||
            prevState.chas!=this.state.chas||
            prevState.sweet!=this.state.sweet||
            prevState.papad!=this.state.papad
        ){
            this.setState({
        total:
            (this.state.thali*this.thaliPrice)+
            (this.state.roti*this.rotiPrice)+
            (this.state.chas*this.chasPrice)+
            (this.state.sweet*this.sweetPrice)+
            (this.state.papad*this.papadPrice)
    });
        }
    }

  render(){
    return(
                <div className="col-lg-3 mt-5">
                    <div className="card shadow">
                        <div className="card-header d-flex justify-content-between">
                            <span className="fw-bold">{this.name}</span>
                            <span className="badge bg-primary">{this.tableno}</span>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <button type="button" className="btn btn-primary w-100" onClick={this.addthali}>
                                        Thali <span className="badge text-bg-light">{this.state.thali}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <button type="button" className="btn btn-danger w-100" onClick={this.addroti}>
                                        Roti <span className="badge text-bg-light">{this.state.roti}</span>
                                    </button>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-info w-100" onClick={this.addchas}>
                                        Chas <span className="badge text-bg-light">{this.state.chas}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <button type="button" className="btn btn-warning w-100" onClick={this.addsweet}>
                                        Sweet <span className="badge text-bg-light">{this.state.sweet}</span>
                                    </button>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-dark w-100" onClick={this.addpapad}>
                                        papad <span className="badge text-bg-light">{this.state.papad}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <h6>Total: {this.state.total}</h6>
                        </div>
                    </div>
                </div>

    );
  }
}

export default DinningTable
