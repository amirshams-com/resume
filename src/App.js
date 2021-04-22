import logo from "./logo.svg";
import "./App.css";
import "./fonts/resume_font.css";
import React from "react";
import { Component } from "react";
import mydata from "./data.json";
import { Link, Element } from "react-scroll";
// import sections

import Snowfall from "react-snowfall";
import Home from "./sections/home";
import About from "./sections/about";
import Skill from "./sections/skill";
import Navbar from "./sections/navbar";
import DownBtn from "./sections/downbtn"
class App extends Component {
  state = {page: "info_section",cursor: "down",background: "white",color: "black",iconcolor: "blue",};
  magic_color = () => {
    let bgcolor_r = Math.round(Math.floor(Math.random() * 255));
    let bgcolor_g = Math.round(Math.floor(Math.random() * 255));
    let bgcolor_b = Math.round(Math.floor(Math.random() * 255));
    let color_r = Math.round(Math.floor(Math.random() * 205));
    let color_g = Math.round(Math.floor(Math.random() * 205));
    let color_b = Math.round(Math.floor(Math.random() * 205));
    this.setState({background: "rgb(" + bgcolor_r + "," + bgcolor_g + "," + bgcolor_b + ")",color: "rgb(" + (color_r) + "," + (color_g) + "," + (color_b) + ")",iconcolor: "rgb(" + (bgcolor_g*2) + "," + (bgcolor_r*2) + "," + (bgcolor_b *2)+ ")",});
};
  nextpage = () => {
    switch (this.state.page) {
      case "home":
        this.setState({
          page: "info_section",
          cursor: "down",
        });
        break;
      case "info_section":
        this.setState({
          page: "skill_section",
        });
        break;
      case "skill_section":
        this.setState({
          page: "home",
          cursor: "up",
        });
        break;
    }
  };
  render() {
   
    return (
      
      <div onLoad={()=>{ this.magic_color();}}>
       
        <Navbar magic_color={this.magic_color} nextpage={this.nextpage} />
        <Snowfall color={this.state.iconcolor} snowflakeCount={110}  style={{ position: 'fixed' }}/>
        <Element name="home"></Element>
        <Home state={this.state} />
        
        <Element name="info_section"></Element>
        <About  state={this.state}  />
        <Element name="skill_section"></Element>
        <Skill  state={this.state}  />
        <DownBtn page={this.state.page} cursor={this.state.cursor} active={this.nextpage}/>
      </div>
    );
  }
}

export default App;
