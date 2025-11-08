import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Product from './components/Products';
import Services from './components/Services';
import Contactus from './components/Contactus';
import PageNotFound from './components/PageNotFound';
import './site.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function MyRouter()
{
    return (<BrowserRouter>
        <Routes>
            {/* home page */}
            <Route path='/' index element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/product' element={<Product />} />
            <Route path='/Service' element={<Services />} />
            <Route path='/Contactus' element={<Contactus />} />
            
            { /* define 404 Route */ }
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MyRouter());