import React, { Component } from "react";
import styled from 'styled-components';
import './InstaCard.css';

let StyleButton=styled.button`
background-color:lightgreen;
color:white;
border:none;
border-radius:6px;
padding:8px;

&:hover{
background-color:blue;
};
`

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  toggleLike = () => {
    this.setState((prev) => ({ liked: !prev.liked }));
  };
  
    render() {
    const { title, text, img } = this.props;
    let fontstyle={
      color:'red',
      fontFamily:'Monospace',
      fontstyle:'bold',
      fontWeight:'700'
    }
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card">
            <div>
              <img className="card-img" src={img} alt={title} />

              <div className="content">
                <h3 className="card-title" style={fontstyle}>{title}</h3>
                <p className="card-text">{text}</p>

                <div className="button">
                  <button className="btn btn-primary" onClick={this.toggleLike}>
                  {this.state.liked ? "Liked ♥" : "Like"}
                </button>

                <button className="btn btn-primary me-2">Learn More</button>
                <StyleButton>Click Me</StyleButton>
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

