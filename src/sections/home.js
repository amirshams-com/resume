import React from "react";
import { Component } from "react";
import Pages from "../componnets/pages";
import mydata from "../data.json";
import Socials from "../componnets/socials";

export default class Home extends Component {
    
  render() {
    this.state=this.props.state;
    return (
      <Pages pid={1} color={this.state.background} className="center topcenter">
        <h1 style={{ color: this.state.color }}>{mydata.title}</h1>
        <ul className="subtitle">
          {mydata.skills.map((skills) => {
            return skills.onSub == true && <li>{skills.title}</li>;
          })}
        </ul>
        <Socials color={this.state.iconcolor} />
      </Pages>
    );
  }
}
