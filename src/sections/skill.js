import React from "react";
import { Component } from "react";
import Pages from "../componnets/pages";
import mydata from "../data.json";
import Cards from "../componnets/cards";

export default class Skill extends Component {
  
  render() {
    this.state=this.props.state;
    return (
      <Pages pid={3} color={this.state.background}>
        <h2>my Skills</h2>
        <Cards />
      </Pages>
    );
  }
}
