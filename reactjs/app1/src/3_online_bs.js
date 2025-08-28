import React from 'react';
import ReactDOM from 'react-dom/client';
var output = ( <div className="container">
        <div className="row mt-5">
            <div className="col-md-6 col-lg-6 offset-md-3 offset-lg-3">
                <div className="card shadow">
                    <div className="card-body">
                        <h3 className="card-title text-center mb-4">Login</h3>
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
                                <button type="submit" className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output);
