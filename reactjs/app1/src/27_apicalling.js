import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
 import React from 'react';

class ApiCallingExample2 extends Component {
    constructor(props) {
        super(props);
        //create state 
        this.state = {
            post: []
        };
    }
    componentDidMount() {
        let apiAddress = "https://jsonplaceholder.typicode.com/posts";
        fetch(apiAddress)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                //store data into state array
                this.setState({
                    post: data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    display = (item) => {
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
                <button className='btn btn-danger' onClick={() => this.deletePost(item.id)}>Trash</button>
            </td>
        </tr>);
    }
    deletePost = (postID) => {
        let filteredPosts = this.state.post.filter((item) => {
            if (item.id !== postID)
                return item;
        });
        this.setState({
            post: filteredPosts
        });
    }
    render() {
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
                                            {this.state.post.map((item) => {this.display(item)})}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApiCallingExample2 />);