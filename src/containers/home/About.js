import '../../common/Colors.css'
import '../../common/Section.css'
import './About.css'
import React from 'react';

export default class About extends React.Component {
    render() {
        return (
                <section id="About" className="background--gray section section--alignCentered section--description ">
                    <div className="color--cloud about--section">
                        <h2 className="color--cloud margin--none section__text--centered">
                            About
                        </h2>
                        <div className="section__description about--text about--text-wrapper">
                            <p>
                            Jose Rivas is (mainly) a Java/Python developer with extensive background in DevOps and Amazon Web
                            Services (AWS).
                            Having graduated from Williams College in 2017, his current work focuses on ensuring all applications in
                            his organization
                            adhere to CICD principles and best practices while remaining observable and monitorable throughout their
                            lifetime.
                            </p>

                            <p>
                            This website was developed using plain old JavaScript, React, CSS, and HTML. It is hosted on AWS
                            and built through AWS's CodePipeline. As one might expect, the code is hosted on GitHub.
                            </p>
                        </div>
                    </div>
                </section>
        )
    }
}
