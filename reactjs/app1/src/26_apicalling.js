/*
    create html page as per api data, 
    convert design into jsx 
    decide type of component (function/class) suppose function
    create functional component and put jsx into return statement
    create state array using useState
    use useEffect hook to call api 
    use fetch method to call api 
    handle callback to process data received from server.
    store data into state array post 
    then use map function inside return statement to display data 
*/
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
function ApiCallingExample() {
    //inner function
    let display = function (item) {
        return (<tr>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>
                {item.title}
            </td>
            <td className="pre-line">
                {item.body}
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => deletePost(item.id)}>Trash</button>
            </td>
        </tr>);
    }
    let deletePost = function(postID)
    {
        alert(postID);
        // setPosts([]); delete all post (that is not required)
        // delete particular post
        let filteredPosts = post.filter((item) =>{
            if(item.id !== postID)
                return item;
        });
        setPosts(filteredPosts);
    }
    let [post, setPosts] = useState([]); //create empty state array
    useEffect(() => {
        let apiAddress = "https://jsonplaceholder.typicode.com/posts";
        fetch(apiAddress)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                //store data into state array
                setPosts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);

    return (<div className="container">
        <div className="row mt-5">
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-header">
                        <h3>API calling using fetch Method</h3>
                    </div>
                    <div className="card-body">
                        <div className="table-container">
                            <div className="table-responsive">
                                <table className="table table-hover table-striped align-middle">
                                    <thead>
                                        <tr>
                                            <th scope="col">userId</th>
                                            <th scope="col">id</th>
                                            <th scope="col">title</th>
                                            <th scope="col">body</th>
                                            <th scope='col'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {post.map((item) => display(item))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApiCallingExample />);