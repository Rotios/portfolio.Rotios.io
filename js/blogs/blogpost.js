import React from 'react';

class BlogPost extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        var blog = this.props.blog
        return (
            <section>
                <section className="background--skyBlue section section--alignCentered">
                        <h2 className="color--cloud margin--none section__text--centered">
                            {blog.title}
                        </h2>
                </section>

                <section className="project--info">
                    
                    <div className="project--description">
                        {blog.content}
                    </div>
                </section>
            </section>
            
        )
    }
}

export default BlogPost
