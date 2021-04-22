import React from "react"
import { Component } from "react"
import { Link, Element } from "react-scroll";

export default class Navbar extends Component{
    
    render(){
        return(
            <div className="navbar">
            <ul className="leftbar">
            <li
              onClick={() => {
                this.props.magic_color();
              }}
            >
              <i className="rsm-magic"></i> magic
            </li>
          </ul>
          <ul className="rightbar">
            <li>
              {" "}
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
               
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="info_section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skill_section"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
               
              >
                Skills
              </Link>
            </li>
          </ul>
          </div>
        )
    }
}