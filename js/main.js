import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './WorkExamples/example-work'
import Title from './title'
import Project from './WorkExamples/project'
import FF2EPub from './WorkExamples/projects/ff2epub'
import TonysAdventure from './WorkExamples/projects/tonys-adventure'
import projects from './WorkExamples/projects/projects'

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
    // ReactDOM.render()
}

const blogPosts = document.getElementsByClassName('blog-post')

if (blogPosts) {
    var i;
    for (i = 0; i < blogPosts.length; i++) {
        var id = blogPosts[i].id
        
    }
}