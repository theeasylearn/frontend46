// task 1 - Toggle heart/favourite
// task 2 - Toggle Bookmark
// task 3 - accept & display comment

import React, { Component } from "react";

export default class Instagram extends Component {
  constructor(props){
    super(props)
    this.state={
      isliked:false,
      isbookmarked:false,
      comment:'',
      message:[]
    }
  }

  liked=()=>{
    this.setState({isliked:!this.state.isliked})
  }

  bookmarked=()=>{
    this.setState({isbookmarked:!this.state.isbookmarked})
  }

  updatecomment=(event)=>{
    this.setState({comment:event.target.value})
  }

  addmessage=()=>{
    this.setState({message:[...this.state.message,this.state.comment]})
    this.setState({comment:''})
  }

  render() {

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h6>User Name</h6>
              </div>
              <div className="card-body">
                <img
                  src="https://picsum.photos/400?random=1"
                  className="img-fluid text-center"
                />
                <div className="d-flex justify-content-between">
                  <span className="mt-4 mb-4">
                    <span className={this.state.isliked==true?'text-danger':'text-dark'}>
                      <i onClick={this.liked} className="fa-solid fa-heart" />
                    </span>
                    <i className="fa-solid fa-comment" />
                    <i className="fa-solid fa-share" />
                  </span>
                  <span className={this.state.isbookmarked==true?'text-success':'text-dark'}>
                    <i onClick={this.bookmarked} className="fa-solid fa-bookmark" />
                  </span>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
                  provident sint esse
                </p>
                <ul className="list-unstyled">
                  {this.state.message.map(
                    (item)=>{
                      return <li>{item}</li>
                    }
                  )}
                </ul>
                <table className="table">
                  <tbody>
                    <tr>
                      <td width="80%">
                        <textarea
                          name="comment"
                          id="comments"
                          className="form-control"
                          placeholder="comments"
                          defaultValue={""}
                          value={this.state.comment}
                          onChange={this.updatecomment}
                        />
                      </td>
                      <td width="20%">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm w-100"
                          onClick={this.addmessage}
                        >
                          Send
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}