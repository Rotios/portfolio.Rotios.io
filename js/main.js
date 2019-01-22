import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './WorkExamples/example-work'
import Title from './title'
import Project from './WorkExamples/project'
import FF2EPub from './WorkExamples/projects/ff2epub'
import TonysAdventure from './WorkExamples/projects/tonys-adventure'
import projects from './WorkExamples/projects/projects'
import BlogPost from './blogs/blogpost'
import entries from './blogs/entries'
import BlogSection from './blogs/blog-section'
import posts from './blogs/posts'
import Footer from './footer'

ReactDOM.render(<Title />, document.getElementById("main-header"))
const myWork = projects

if (document.getElementById('example-work')){
    ReactDOM.render(<ExampleWork work = {myWork} />, document.getElementById("example-work"))
}

const elements = document.getElementsByClassName('project')

if (elements) {
    var i;
    for (i = 0; i < elements.length; i++) {
        var id = elements[i].id
        if (id == 'tonys-adventure') {
            ReactDOM.render(<Project id={id} work={myWork[0]} component={<TonysAdventure />} />, elements[i])
        } else if (id == 'ff2epub') {
            ReactDOM.render(<Project id={id} work={myWork[1]} component={<FF2EPub work={myWork[1]}/>} />, elements[i])
        }
    }
}

const blogBubbles = document.getElementById('blog')

if (blogBubbles) {
    ReactDOM.render(<BlogSection blog = {entries}/>, blogBubbles);
}

let blogPosts = document.getElementsByClassName('blog-post')

if (blogPosts && blogPosts.length > 0) {
    let post = blogPosts[0]
    if (post.id) {
        ReactDOM.render(<BlogPost blog={posts[post.id]}/>, post)
    }
}

let footer = document.getElementById("main-footer");

if (footer) {
    ReactDOM.render(<Footer />, footer)
}

let intro = document.getElementById("intro")

if (intro) {
    window.onresize = () => { 
        let intro = document.getElementById('intro')
        intro.setAttribute("style","height:" + window.innerHeight + "px");
        intro.style.height = window.innerHeight
    } 
    
    window.onload = () => { 
        let intro = document.getElementById('intro')
        intro.setAttribute("style","height:" + window.innerHeight + "px");
        intro.style.height = window.innerHeight
    } 

}