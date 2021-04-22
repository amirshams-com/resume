import React from "react";
import { Component } from "react";
import mydata from "../data.json";
import Card from "../componnets/card";
import "../assest/css/card.css";
export default class Cards extends Component {
  render() {
    return (
      <ul class="cards">
        {mydata.skills.map((skills) => {
          return (
            skills.onSub != true && (
              <li>
                <Card
                  icon={skills.icon}
                  name={skills.title}
                  text={skills.description}
                  color={skills.color}
                />
              </li>
            )
          );
        })}
      </ul>
    );
  }
}
