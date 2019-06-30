import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Works from './home/Works'
import About from './home/About'
import {myWork} from '../constants/Constants'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    this.setState({ isLoading: false });
  }

  renderLander() {
    return (
      <div className="lander">
        <section className="section body-elem background--office-stock">
          <h1>Jose Rivas</h1>
          <p>Software Engineer</p>
          <div>
            <Link to="#about" className="btn btn-info btn-lg">
              Resume
            </Link>
            <a rel="noopener noreferrer" target="_blank" href="https://www.github.com/rotios" className="btn btn-success btn-lg">
              Github
            </a>
          </div>
        </section>
        <About id="about"/>
        
        <Works id="projects" work = {myWork}/> 

      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.renderLander()}
      </div>
    );
  }
}
