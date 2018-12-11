import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'
import ExampleWorkModal from './example-work-modal';


const myWork = [
    {
        'title':"Work Example",
        'href' : 'https://example.com',
        'desc' : 'lorem ipsum',
        'image' : {
            "desc" : "Example",
            'src' : 'images/example1.png',
            'comment': ''
        }
    },
    {
        'title':"Work Example",
        'href' : 'https://example.com',
        'desc' : 'lorem ipsum',
        'image' : {
            "desc" : "Example",
            'src' : 'images/example2.png',
            'comment': ''
        }
    },
    {
        'title':"Work Example",
        'href' : 'https://example.com',
        'desc' : 'lorem ipsum',
        'image' : {
            "desc" : "Example",
            'src' : 'images/example3.png',
            'comment': ''
        }
    }
]

ReactDOM.render(<ExampleWork work = {myWork} />, document.getElementById("example-work"))