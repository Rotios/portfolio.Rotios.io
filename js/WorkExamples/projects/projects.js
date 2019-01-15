import React from 'react'
export default [
    {
        'id':'tonys-adventure',
        'title':"Tony's Adventure",
        'href' : 'https://rotios.github.io/The-Adventures-of-Fat-Tone/',
        'github' : 'https://github.com/Rotios/The-Adventures-of-Fat-Tone',
        'demo' : 'https://rotios.github.io/The-Adventures-of-Fat-Tone/',
        'shortDesc' :
            <p>
                A short Roguelike game written with the Rot.JS library. In conjunction with John Freeman (<a style= {{color: 'white'}} href="https://www.github.com/jcf1">https://www.github.com/jcf1</a>).
            </p>,
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
        'tools' : ['npm', 'javascript'],
        'longDesc' :  <div>
            <p>
                A long time ago in a college far, far away I built this game with my friend John Freeman as a part of a month long course on game 
                development. We made it as a tribute to our deer friend Anthoney, who had been studying abroad at Cambridge for the year. The game itself 
                was developed incrementally over the course of a month, and used the <a href="http://ondras.github.io/rot.js/hp/">Rot.js library</a>. 
                While not the best JS developer, I can recommend Rot.js for those looking to create a similar game in the future. 
            </p>
            <h1>The Story</h1>
            <p>
                The story takes place at Williams College, my alma matter. Located in a small remote valley in Northwestern Massachussetts, Williams is 
                surrounded by a spectacular amount of beautiful mountains, gorgeous forests and insanely difficult trails. A tiny college town,
                the students and staff/faculty of Williams College make up a large percentage of the population of Williamstown (not a very creative name, I know).
                With only 2000 students, you can imagine how small the place is. Nevertheless, it is an absolutely beautiful location, and as an added plus, 
                it's located right at the base of the Ilvermorny School of Witchcraft and Wizardry.
            </p>
            <p>
                Anyway, the story starts with Anthoney looking for his friend Evan Williams after a long, gruelling day in the
                computer lab. He isn't sure where Evan has gone, but he believes Evan is either in the forest looking for the <em>Magical Herb</em> or
                lost in the Sawyer <em><s>Dungeon</s></em> Library. At first, Anthoney is able to remember the map as he discovers it, making
                it easier to determine where you have already been. But, after finding Evan, you will lose this ability,
                making the game a lot harder. The mobs also become increasingly more challenging, and power ups become a necessity.
            </p>
            <h1>Development</h1>
            <p>
                As mentioned previously, we used the Rot.js library to develop the game. Each unique entity is coded with their own attributes,
                and each dungeon location is procedurally generated, making locating the objectives extremely difficult. As mobs are killed
                money is earned, giving the player the ability to buy more food and, more importantly, power ups.
            </p>
            <p>
                One of the best features of the game, in my opinion, is the Hall of Mirrors. For 10
                gold, you enter a procedurally generated maze with only 1 possible route to the objective, 
                delicious instant ramen. The catch? The walls are invisible and you have only 400 inputs to get
                to it. It's a challenging mode, and I hope you try it out.
            </p>
            <h1>Links</h1>
            <p>
                To try out the game, <a href="http://rotios.github.io/The-Adventures-of-Fat-Tone/">click here</a>.
            </p>
            <p>
                To check out the code base, <a href='https://github.com/Rotios/The-Adventures-of-Fat-Tone'>click here</a>.
            </p>

        </div> 
    },
    {
        'id' : 'ff2epub',
        'title': "FF2EPub",
        'href' : '/projects/ff2epub.html',
        'github': 'https://github.com/Rotios/FF2EPUB',
        'tools' : ['python', 'fa-chrome'],
        'demo' : 'https://github.com/Rotios/FF2EPUB',
        'shortDesc' : <div>
            <p>
                A quick Fanfiction.net to EPub converter for those who like to take their fanfiction on the go.
            </p>
        </div>,
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
                Another glaring issue with reading fanfiction is its realiance on internet connectivity, as each chapter
                must be fetched from the site one at a time, and while internet connectivity 
                isn't the issue it used to be (<em>#21stCenturyLiving</em>), there are still times when an internet connection may not be easily found 
                (i.e. stuck on an airplane from an airline that refuses to provide free internet service -- you know who you are!). 
                FF.net's <em>official</em> app addresses this issue by allowing you to download and store whichever story you are currently reading on your phone.
                Unfortunately, this means using the rather clunky app and it's odd formatting. Plus, it doesn't really solve the eye strain issue.
            </p>
            <p>
                So, how can we fix both of these problems? Why, with an EBook Reader of course! The only question is, how do we get the fanfiction story there?
            </p>
            <p>
                That's where this lovely project comes into the picture. With this <a href='https://github.com/Rotios/FF2EPUB'>python script</a>, you can convert any Fanfiction.net story into a full fledged EBook in EPub format. 
                Once converted, getting it onto your Kindle from there is a simple matter of emailing it to your Amazon Kindle account email, or using their Kindlegen CLI tool. 
                If you don't have a Kindle, but have another EBook Reader that reads .EPUB files, then you are all set to go!
            </p>
            <p>
                Of course, there are plenty of other sites that have a fanfiction to EPub (or at least text/html to EPub) converter already. However, as a software engineer, a lover of code, and a skeptic, 
                I cannot bring myself to trust a utility which downloads unverified files onto my computer without being able to see the code myself. So without further ado, here's an in depth description into my
                FF2EPub Utility.
            </p>
        </div>
    }, 
    {
        'id':'rotios.io',
        'title':"Rotios.IO",
        'href' : 'https://portfolio.rotios.io/',
        'github' : 'https://github.com/Rotios/portfolioexample.Rotios.io',
        'demo' : 'https://portfolio.rotios.io',
        'shortDesc' :
            <p>
                Jose Rivas's personal development website. Uses Amazon Web Services (AWS) to host and automatically (re)deploy the site.
            </p>,
        'desc' : <div>
            <p>
                Jose Rivas's personal development website. Written in React + Javascript, uses Amazon Web Services (AWS) to host the site. The site automatically
                redeploys each time the repo is changed.
            </p>
        </div> ,
        'tools' : ['npm', 'react', 'javascript', "fa-aws"],
        'longDesc' :  <div>
            <p>
                Jose Rivas's personal development website. Written in React + Javascript, uses Amazon Web Services (AWS) to host the site. The site automatically
                redeploys each time the repo is changed.
            </p>
        </div> 
    }
]