import React from 'react';
import {useNavigate} from 'react-router-dom';

function MyComponent(){
    const navigate=useNavigate();

    const RedirectToAnotherPage=()=>{
        navigate('/another-page');
    }
    return(
        <div>
            <button onClick={RedirectToAnotherPage}>Go To Another Page</button>
        </div>
    );
}
