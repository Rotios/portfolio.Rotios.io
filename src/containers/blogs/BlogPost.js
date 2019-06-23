import React from 'react';
import './BlogPost.css'
import '../../common/Colors.css'
import blogs from '../../constants/BlogPosts'

class BlogPost extends React.Component {
    render() {
        var blogName = this.props.match.params.blog
        const blog = blogs[blogName]
        return ( 
        <div className="Projects">
            <div className="lander">
            <section>
                <div>
                    <h2 className="color--navy">
                        {blog.title}
                    </h2>
                </div>

                <div>
                    {blog.content}
                </div>
                </section>
            </div>
        </div>
            
            
        )
    }
}

export default BlogPost
