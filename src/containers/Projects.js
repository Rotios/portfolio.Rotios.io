import React, { Component } from "react"
import './Projects.css'
import '../common/Colors.css'
import ProjectSection from './projects/ProjectSection'

export default class Projects extends Component {
  create_projects = () => {
    const items = []
    for (var i = 0; i < this.props.works.length; i++)  {
      items.push(<ProjectSection project={this.props.works[i]} key={i}/>)
    }
    return items;
  }

  render() {
    return (
      <div className="Projects">
        <div className="lander">
            <div className="color--navy project-header">
                <h2>Projects</h2>
                <p>A list of all projects Jose has worked on with descriptions and relevant links.</p>
            </div>
            <div>
              {this.create_projects()}
            </div>
        </div>
      </div>
    );
  }
}
