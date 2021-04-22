import React from "react";
import { Component } from "react";
import "../assest/css/pages.css";
export default class Pages extends Component {
  render() {
    let bcolor = this.props.color;
    return (
      <div
        className={"pages" + " " + this.props.className}
        style={{
          backgroundColor: bcolor,
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
