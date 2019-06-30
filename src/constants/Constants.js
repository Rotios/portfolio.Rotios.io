import React from 'react';

export const myWork = {
    "blogs": [
        {
            'id':'customized-logging-in-springboot',
            'title': "Custom SpringBoot Logging",
            'href' : '/blogs/customized-logging-in-springboot',
            'shortDesc' :
                <p>
                    Learn how to customize your SpringBoot logs so they can provide the most
                    valuable information in the easiest way possible.
                </p>,
            'tools' : ["fa-aws", "fa-java"]
        }
    ],
    "projects": [
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
}