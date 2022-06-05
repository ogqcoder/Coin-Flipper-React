import React, { Component } from "react";
import Coin from "./Coin";

export default class FlipCoin extends Component {
  static defaultProps = {
    options: [
      {
        choice: "heads",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg",
      },
      {
        choice: "tails",
        img: "http://www.coinnews.net/wp-content/uploads/2015/03/2015-W-Proof-Roosevelt-Silver-Dime-Reverse.jpg",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      headCounter: 0,
      tailCounter: 0,
      result: "",
    };
  }

  flip = () => {
    const flip = Math.floor(Math.random() * 2);
    console.log(flip);
    // console.log(JSON.stringify(this.props.options[flip]));
    //************************ My way
    // this.setState(
    //   (st, p) => ({
    //     result: p.options[flip],
    //   }),
    //   () => {
    //     this.state.result === "heads"
    //       ? this.setState((st) => ({
    //           headCounter: st.headCounter + 1,
    //         }))
    //       : this.setState((st) => ({
    //           tailCounter: st.tailCounter + 1,
    //         }));
    //   }
    // ); // even with this the console.log is not updated

    //**************************************************Not recommended way */
    // this.setState({ result: this.props.options[flip] });
    // this.setState((st, p) => ({ result: p.options[flip] })); //even with this callback the console.log below is not updated, this takes time

    // (st) => {
    //     return {
    //       result: this.props.options[flip],
    //     };

    //********************************colts way */
    this.setState((st, p) => {
      let g = this.props.options[flip];

      let obj = {
        result: g,
        headCounter: st.headCounter + (g.choice === "heads" ? 1 : 0), // st.result === "heads"?1: 0 does not work since it
        //references the previous state, and on the first render it will not update visually because the previous state
        //is zero but on the next render it will show that
        tailCounter: st.tailCounter + (g.choice === "tails" ? 1 : 0),
      };
      console.log(this.state.result.choice, "in setState");
      return obj;
    });

    console.log(this.state.result.choice, "in method");
  };

  render() {
    return (
      <div>
        {this.state.result && <Coin result={this.state.result} />}
        <div> heads: {this.state.headCounter} </div>
        <div> tails: {this.state.tailCounter}</div>
        <div>result: {this.state.result.choice}</div>
        <button onClick={this.flip}>Flip </button>
      </div>
    );
  }
}
