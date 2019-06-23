
import React, { Component } from "react"
import './ProjectSection.css'
import '../../common/Colors.css'

export default class ProjectSection extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isHidden: true,
          text: "Read More +"
        };
    }

    show_more_info() {
        this.setState({isHidden: !this.state.isHidden, text: "Read " + (this.state.isHidden ? " Less -" : " More +")})       
    }

    get_more_info = () => (
      <div className="color--cloud more-info">
          <h4>
                Background
          </h4>
            {this.props.project.longDesc}
      </div>
    )

    render() {
      return (
        <section className="project background--gray">
            <div  className="color--cloud info">
                <div className="color--cloud">
                    <h3>{this.props.project.title}</h3>
                </div>
                <h4>
                    Description
                </h4>

                {this.props.project.desc}
      

                {!this.state.isHidden && this.get_more_info()}

            </div>

            <div className="more-btn-container color--cloud">
                <button className="more-info-btn" onClick={this.show_more_info.bind(this)}>{this.state.text}</button>
            </div>
        </section>
      );
    }
  }
  