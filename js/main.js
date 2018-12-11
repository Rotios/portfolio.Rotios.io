import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'
import ExampleWorkModal from './example-work-modal';


const myWork = [
    {
        'title':"Tony's Adventure",
        'href' : 'http://rotios.github.io/The-Adventures-of-Fat-Tone/',
        'desc' : <div>
            <p>
            The story begins with Anthoney, a lonely Williams College student,
            who after hours of coding decides to go out into the world and explore. 
            However, as he makes it to town, his friend, Evan Williams, sends him a 
            frantic text asking for help. Panicking, Tony sets out to find his friend, 
            but there is one big problem: He doesn't know where Evan is! He now must 
            make a choice: 
            </p>
            <ol>
                <li> Go to the forest, and hope Evan went out looking for the 
            Magical Herb; or </li>
            <li> Go to the Dungeon, the mysterious place called Sawyer and hope that Evan is there, 
                lost among its many corridors and rooms. </li>
            </ol>
            <p>
                Which will he go to first? It's up to you to decide...
                </p>
            <p>
            Written in Rot.JS with John Freeman (<a style= {{color: 'white'}} href="https://www.github.com/jcf1">https://www.github.com/jcf1</a>).
            </p>
        </div> ,
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