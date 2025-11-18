import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import { useCookies, CookiesProvider } from "react-cookie";
function Login() {
    //create 2 state variable
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [message, setMessage] = useState('');
    let [attempt, setAttempt] = useState(1);
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);

    useEffect(() => {
        if (cookies['count'] === undefined) {
            setCookie('count', '1');
        }
        else {
            setAttempt(parseInt(cookies['count']));
        }
    });

    //create function using 2nd method 
    let doLogin = function (e) {
        e.preventDefault(); //prevent refreshing webpage
        console.log(email, password);
        if (email === 'admin@gmail.com' && password === '123123') {
            setMessage('login successful');
        }
        else {

            setMessage(`login attempt failed. you have  ${3 - attempt} left`);
            setCookie('count', attempt + 1); //2
            setAttempt(attempt + 1); //2
        }
    }
    return (<div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <div className="card">
                    <div className="card-body p-4">
                        <h1 className="h4 mb-4 text-center">Sign in</h1>
                        <form onSubmit={doLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                                <div className="invalid-feedback">Please enter a valid email.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
                                <div className="invalid-feedback">Password is required (min 6 characters).</div>
                            </div>
                            <div className="d-grid">
                                <button disabled={attempt == 4} type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                {message}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<CookiesProvider>
    <Login />
</CookiesProvider>);