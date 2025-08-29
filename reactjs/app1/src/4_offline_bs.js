import ReactDOM from 'react-dom/client';

//import fontAwasome and bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
// how to give comment in jsx
var message = "Admin Login";
var output = ( 
        <div className="container">
        {/* this is comment inside jsx */}
        <div className="row mt-5">
            { /*  this is the way we give comment inside jsx */}
            <div className="col-md-6 col-lg-6 offset-md-3 offset-lg-3">
                <div className="card shadow">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">
                            <FontAwesomeIcon icon={faUser} /> {message}
                        </h3>
                        <form>
                            <div className="mb-3">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required />
                                    <label for="emailInput">Email address</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="passwordInput" placeholder="Password" required />
                                    <label for="passwordInput">Password</label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Sign In
                                    <FontAwesomeIcon icon={faLock} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output);
