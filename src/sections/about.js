import React from "react";
import { Component } from "react";
import Pages from "../componnets/pages";
import mydata from "../data.json";
export default class About extends Component {
  render() {
    this.state=this.props.state;
    return (
      <Pages pid={2} color={this.state.background}>
        <h2>{mydata.myinfo.title}</h2>
        {Object.values(mydata.myinfo.Description).map((value) => {
          return <p>{value}</p>;
        })}
      </Pages>
    );
  }
}
