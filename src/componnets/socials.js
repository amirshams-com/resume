import react from "react";
import { Component } from "react";
import Social from "./social";
import mydata from "../data.json";
import "../assest/css/socials.css";
export default class Socials extends Component {
  render() {
    return (
      <ul className="socials" >
        {Object.entries(mydata.socials).map(([key, value]) => {
          return (
            <li >
              <Social name={key} url={value} color={this.props.color} />
            </li>
          );
        })}
      </ul>
    );
  }
}
