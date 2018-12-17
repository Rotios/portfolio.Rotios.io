import React from 'react';

class Project extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        var work = this.props.work
        var component = this.props.component
        return (
            <div>
                <section className="background--skyBlue section section--alignCentered">
                    <h2 className="color--cloud margin--none section__text--centered">
                        {work.title}
                    </h2>
                </section>

                {component}
            </div>
            
        )
    }
}

export default Project
