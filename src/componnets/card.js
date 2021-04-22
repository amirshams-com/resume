import React from "react";
import { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color }}>
        <img src={"img/skills/" + this.props.icon} width="64" height="64" />
        <h5>{this.props.name}</h5>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
