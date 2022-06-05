import React, { Component } from "react";
import "./Coin.css";

export default class Coin extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.result);
  }
  render() {
    return (
      <div>
        <img className="coin" src={this.props.result.img} alt="" />
      </div>
    );
  }
}
