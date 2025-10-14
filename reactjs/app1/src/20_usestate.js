import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function StateExample() {

    let [count,setCount]=useState(0);
    let changeCount=()=>{
        setCount(count+1);
    }
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-body text-center">
                            <p>You have invited {count} friends</p>
                            
                            <button disabled={count==5} onClick={changeCount} className='btn btn-primary'>
                                Invite Friend
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StateExample />);
