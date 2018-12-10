import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

console.log("test")

const myWork = [
    {
        'title':"Work Example",
        'image' : {
            "desc" : "Example",
            'src' : 'images/example1.png',
            'comment': ''
        }
    },
    {
        'title':"Work Example",
        'image' : {
            "desc" : "Example",
            'src' : 'images/example2.png',
            'comment': ''
        }
    },
    {
        'title':"Work Example",
        'image' : {
            "desc" : "Example",
            'src' : 'images/example3.png',
            'comment': ''
        }
    }
]

ReactDOM.render(<ExampleWork work = {myWork} />, document.getElementById("example-work"))