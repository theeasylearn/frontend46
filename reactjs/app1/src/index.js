// Develop Digital clock which will display Time & date.
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
//functional component
function Website()
{
    return ()
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(output); //calling function which must return JSX

setInterval(getDateTime,1000)