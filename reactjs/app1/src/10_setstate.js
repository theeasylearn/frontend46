import react, { Component } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './website.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class CartItem extends Component{

    constructor(props){
        super(props);

        this.image=props.image
        this.name=props.name
        this.description=props.description
        this.price=props.price

        this.state={
            quantity:props.quantity
        }
    }

    updateQuantity=(val)=>{

        if (val === "+") {
        this.setState({ quantity: parseInt(this.state.quantity) + 1 });
        } 
        else if (val === "-" && this.state.quantity > 1) {
        this.setState({ quantity: parseInt(this.state.quantity) - 1 });
        }
    }

    render(){
        return(
        <>
            <div className="row mt-4">
            <div className="col-12">
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-2">
                                <img
                                    src={this.image}
                                    alt="Pizza Oven"
                                    className="item-img"
                                />
                            </div>
                            <div className="col-2">
                                <h5 className="card-title">{this.name}</h5>
                                <p className="text-muted">
                                    {this.description}
                                    <br/>
                                    <a href="#" className="text-decoration-none">
                                        Change
                                    </a>
                                </p>
                            </div>
                            <div className="col-2 text-center">
                                <p className="card-text">{this.price}</p>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <button className="btn btn-outline-secondary" type="button" onClick={()=>{}}>
                                        -
                                    </button>
                                    <input
                                        type="text"
                                        className="form-control text-center"
                                        value={this.state.quantity}
                                        readOnly=""
                                    />
                                    <button className="btn btn-outline-secondary" type="button" onClick={()=>{}}>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="col-2 text-end">
                                <p className="card-text">
                                    $469.99 <span className="text-muted">x</span>
                                </p>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
        );
    }
}

function Cart() {
    return(
        <div className="container mt-4">
        <div className="cart-header text-center">
            <h2>Your Cart</h2>
        </div>
        <div className='card'>
            <CartItem name='IPhone' 
                      image='http://picsum.photos/100?random=1' 
                      description='apple smartphone' 
                      price='100000'
                      quantity='1' 
            />
            <CartItem name='Macbook air' 
                     image='http://picsum.photos/100?random=2' 
                     description='apple laptop' 
                     price='125000'
                     quantity='1' 
                     
            />
            <CartItem name='Airpods' 
                      photo='http://picsum.photos/100?random=3'
                      description='apple earbuds' price='25001' 
                      quantity='1' 
            />
        </div>
    </div>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cart />);
