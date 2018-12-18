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
        'longDesc' :  <div>
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
        'longDesc' : <div>
            <hr/>
            <h1>Description</h1>

            <p>
                I've got a confession to make... I like reading fanfiction... And not those sloppy, poorly written <em>lemons</em> (as the FF community calls them)
                or simple <em>one-shots</em>, but actual stories which take the time to flesh out their characters, contain real plots, and don't promote any <em>fanservice</em>.
                I want to see my favorite character challenged in an entirely new way from their canon arcs. I want to see alternate universes or believable crossovers
                from an author who is as passionate about their characters' universes as I am.
            </p>
            <p>
                That being said, the amount of time I've spent recently reading different Harry Potter and Star-Wars fanfiction
                stories is astronamically high. My poor eyes, horrible as they already were, have taken huge beatings due to the amount of time 
                I have spent in front of my tiny phone screen reading, or rereading, my latest fanfic. As much as I would love to read
                ff stories like I read my regular hardcover/paperback books, it's just impossible without feeling some eye strain.
            </p>
            <p>    
                On top of that reading fanfiction can be heavily reliant on internet connectivity, as each chapter
                must be fetched from the site one at a time after you are through with the current one, and while internet connectivity 
                isn't the issue it used to be (<em>#21stCenturyLiving</em>), there are still times when an internet connection may not be easily found 
                (i.e. stuck on an airplane from an airline that refuses to provide free internet service -- you know who you are!). 
                Thankfully, their <em>official?</em> app has me covered on this, as it provides a handy feature to store whichever story you are currently reading on your phone.
                Unfortunately, this means using the rather clunky app and it's odd formatting. Plus, it doesn't really solve the eye strain issue.
            </p>
            <p>
                So, how can we fix both of these problems? Why, with an EBook Reader of course! The only question is, how do we get the fanfiction story onto my Kindle/EBook Reader?
            </p>
            <p>
                That's where this lovely project comes into the picture. With this <a href='https://github.com/Rotios/FF2EPUB'>python script</a>, you can convert any Fanfiction.net story into a full fledged EBook in EPub format. 
                Once converted, getting it onto your Kindle from there is a simple matter of emailing it to your Amazon Kindle account email, or using their Kindlegen CLI tool. 
                If you don't have a Kindle, but have another EBook Reader that reads .EPUB files, then you are all set to go!
            </p>
            <p>
                Of course, there are plenty of other sites that have a fanfiction to EPub (or at least text/html to EPub) converter already. However, as a software engineer, a lover of code, and a skeptic, 
                I cannot fully trust a utility which downloads unverifiable files onto my computer without being able to at least see the code first. So without further ado, here's my FF2EPub utility.
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