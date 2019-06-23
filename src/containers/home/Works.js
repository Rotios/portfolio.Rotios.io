import React from 'react';
import '../../common/Colors.css'
import '../../common/Section.css'
import './Works.css'

class ExampleWork extends React.Component {

    render() {
        return (
            <section id='works' className="section section--alignCentered section--description">
            <div className="work-group">
                <div className="color--navy margin--none section__text--centered">
                            <h2>Blogs</h2>
                        </div>

                    {this.props.work.blogs.map( 
                        (example,idx) => {
                            return (
                                <ExampleWorkBubble example={example} 
                                    key={idx}
                                />
                            )
                        }
                    )}
            </div>
            <div className="work-group">
                <div className="color--navy margin--none section__text--centered">
                            <h2>Projects</h2>
                        </div>

                    {this.props.work.projects.map( 
                        (example,idx) => {
                            return (
                                <ExampleWorkBubble example={example} 
                                    key={idx}
                                />
                            )
                        }
                    )}
                </div>
            </section>
        )
    }
}

class ExampleWorkBubble extends React.Component {
    render() {
        let example = this.props.example;
        var faTools = [];

        let tools = example.tools;
        var i = 0;
        for (i; i < tools.length ; i++) {
            if (tools[i] === 'python') {
                faTools.push('fa-python');
            } else if (tools[i] === 'npm') {
                faTools.push('fa-npm');
            } else if (tools[i] === 'github') {
                faTools.push('fa-github');
            } else if (tools[i] === 'react') {
                faTools.push('fa-react');
            } else if (tools[i] === 'javascript') {
                faTools.push('fa-js');
            } else if (tools[i].startsWith('fa')) {
                faTools.push(tools[i])
            }
        }

        return (
            <div
                className="section__example color--cloud">
                  
                    <div className="section__exampleTitle">
                        {example.title}
                    </div>
                    <div className="section__exampleText">
                        {example.shortDesc}
                    </div>

                    <div id="buttonLayout">
                    {
                        faTools.map(
                            (t, i) => {
                                return <p key={i} className={"color--skyBlue section__exampleTool fab " + t}>
                                </p>
                            }
                        )
                    }
                    </div>
                    <div className="display--inline float--center section__exampleButtonLayout">
                        <a className="color--skyBlue section__exampleButton"
                            href={ example.href }
                            rel="noopener noreferrer"
                            target="_blank">
                                More
                        </a>
                        
                        <a className="color--skyBlue section__exampleButton fa__text fab fa-github"
                            href={ example.github }
                            rel="noopener noreferrer"
                            target="_blank">
                        </a>

                        
                        <a className="color--skyBlue section__exampleButton"
                            href={ example.demo }
                            rel="noopener noreferrer"
                            target="_blank">
                                Demo
                        </a>
                    </div>
            </div>
        )
    }
}

export default ExampleWork