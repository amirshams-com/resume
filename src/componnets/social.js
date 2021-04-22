import React from "react";
import { Component } from "react";

export default class Social extends Component {
  render() {
    return (
      <a href={this.props.url} title={this.props.name} style={{color:this.props.color}}>
        <i class={"rsm-" + this.props.name}></i>
      </a>
    );
  }
}
