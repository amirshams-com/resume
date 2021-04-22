import React from "react"
import { Component } from "react"
import { Link, Element } from "react-scroll";
export default class DownBtn extends  Component{
    render(){
        return(
            <Link
            activeClass="active"
            to={this.props.page}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => {
              this.props.active();
            }}
          >
            <div className="movedown">
              <i className={"rsm-" + this.props.cursor + "-open"}></i>
            </div>
          </Link>
          )
    }
}