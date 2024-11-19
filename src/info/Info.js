
import pp from "../img/pp.png"
import logo from "../img/logo.png"
import mock1 from "../img/foodPoster.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(65, 234, 83)", "rgb(235, 185, 37)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Aayush",
    lastName: "Gupta",
    initials: "ag", // the example uses first and last, but feel free to use three or more if you like.
    logo: logo, // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: pp, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(90deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the Nepal'
        },
        {
            emoji: "💼",
            text: "Freelancer"
        },
        {
            emoji: "📧",
            text: "guptaaayush537@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com/itsmeaayush.01",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com/aayushgupta.me",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/aayush8356",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/aayushgupta23",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Aayush. I'm an aspiring fullstack developer. I like to fix bugs for server end specially. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'typescript',],
            exposedTo: ['nodejs']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Foodie',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            count:"Project 1",
            title: "WebFood",
            live: "https://webfood.meetaayush.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/aayush8356/WebFood", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            count:"Project 1",
            title: "WebFood",
            live: "https://webfood.meetaayush.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/aayush8356/WebFood", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            count:"Project 1",
            title: "WebFood",
            live: "https://webfood.meetaayush.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/aayush8356/WebFood", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            count:"Project 1",
            title: "WebFood",
            live: "https://webfood.meetaayush.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/aayush8356/WebFood", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            count:"Project 1",
            title: "WebFood",
            live: "https://webfood.meetaayush.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/aayush8356/WebFood", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        }
    ]
}