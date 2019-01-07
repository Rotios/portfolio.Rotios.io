import React from 'react';

class BlogSection extends React.Component {
    constructor(props) {
        super(props)    
    }

    render() {
        return (
        <section id="portfolio">
            <section className="background--skyBlue bubble__header--text">
                <h2 className="color--cloud margin--none section__text--centered">
                    Blog Posts
                </h2>
            </section>

            <section className="section section--alignCentered section--description">
                {this.props.blog.map( 
                    (example,idx) => {
                        return (
                            <BlogSectionBubble example={example} 
                                key={idx}
                            />
                        )
                    }
                )}
            </section>
        </section>
        )
    }
}

class BlogSectionBubble extends React.Component {
    render() {
        let example = this.props.example;
        var faTools = [];

        let tools = example.tools;
        var i = 0;
        for (i; i < tools.length ; i++) {
            if (tools[i] == 'python') {
                faTools.push('fa-python');
            } else if (tools[i] == 'npm') {
                faTools.push('fa-npm');
            } else if (tools[i] == 'github') {
                faTools.push('fa-github');
            } else if (tools[i] == 'react') {
                faTools.push('fa-react');
            } else if (tools[i] == 'javascript') {
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

                    {
                        faTools.map(
                            (t, i) => {
                                return <p key={i} className={"color--skyBlue section__exampleTool fab " + t}>
                                </p>
                            }
                        )
                    }
                    
                    <div className="display--inline float--center section__exampleButtonLayout">
                        <a className="color--skyBlue section__exampleButton"
                            href={ example.href }
                            target="_blank">
                                More
                        </a>
                    </div>
            </div>
        )
    }
}

export default BlogSection