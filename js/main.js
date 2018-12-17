import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'
import Title from './title'
import Project from './project'
import FF2EPub from './projects/ff2epub'

const myWork = [
    {
        'id':'tonys-adventure',
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
        'id' : 'ff2epub',
        'title': "FF2EPub",
        'href' : 'https://github.com/Rotios/FF2EPUB',
        'github': 'https://github.com/Rotios/FF2EPUB',
        'desc' : <div>
            <p>
                A quick Fanfiction.net to EPub converter for those who like to take their fanfiction on the go.
                Future uses will convert it to a PDF and to .mobi for Amazon Kindle.
            </p>
            <p>
                Written and tested for Python 3.7. 
            </p>
        </div>,
        'image' : {
            "desc" : "Example",
            'src' : 'images/example2.png',
            'comment': ''
        }
    }
]

ReactDOM.render(<Title />, document.getElementById("main-header"))

if (document.getElementById('example-work')){
    ReactDOM.render(<ExampleWork work = {myWork} />, document.getElementById("example-work"))
}

if (document.getElementsByClassName('project')) {
    console.log("got element")
    var elements = document.getElementsByClassName('project')
    var i;
    for (i = 0; i < elements.length; i++) {
        console.log(elements[i].id)
        var id = elements[i].id
        if (id == 'tonys-adventure') {
            ReactDOM.render(<Project id={id} work={myWork[0]} />, elements[i])
        } else if (id == 'ff2epub') {
            console.log("ff2epub")
            ReactDOM.render(<Project id={id} work={myWork[1]} component={<FF2EPub work={myWork[1]}/>} />, elements[i])
        }
    }
    // ReactDOM.render()
}