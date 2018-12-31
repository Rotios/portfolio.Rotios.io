import React from 'react';

class ExampleWork extends React.Component {
    constructor(props) {
        super(props)    
    }

    render() {
        return (
        <section id="portfolio">
            <section className="background--skyBlue section">
                <h2 className="color--cloud margin--none section__text--centered">
                    Projects
                </h2>
            </section>

            <section className="section section--alignCentered section--description">
                {this.props.work.map( 
                    (example,idx) => {
                        return (
                            <ExampleWorkBubble example={example} 
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

class ExampleWorkBubble extends React.Component {
    render() {
        let example = this.props.example;
        console.log(example)

        return (
            <div
                className="section__example color--cloud">
                    <div className="section__exampleTitle">
                        {example.title}
                    </div>
                    <div className="section__exampleText">
                        {example.shortDesc}
                    </div>

                    <div  className="display--inline section__exampleButtonLayout">
                        <a className="color--skyBlue section__exampleButton"
                            href={ example.href }
                            target="_blank">
                                Read More!
                            </a>
                        <a className="color--skyBlue section__exampleButton"
                            href={ example.github }
                            target="_blank">
                                See the Code!
                            </a>
                    </div>
            </div>
        )
    }
}

export default ExampleWork