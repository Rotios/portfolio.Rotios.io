import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        var work = this.props.work
        var component = this.props.component
        console.log(work.longDesc)
        return (
            <section>
                <section className="background--skyBlue section section--alignCentered">
                    <h2 className="color--cloud margin--none section__text--centered">
                        {work.title}
                    </h2>
                </section>
                <div className="project--short-description">
                    <em>{work.desc}</em>
                
                </div>
                
                <div className="project--description">
                
                    <hr/>
                    <h1>Description</h1>
                    {work.longDesc}
                </div>

                <hr/>

                <div className="project--demo-header">
                    <h1 align="center">Demo - COMING SOON</h1>
                </div>
                
                {/* {component} */}
            </section>
            
        )
    }
}

export default Project
