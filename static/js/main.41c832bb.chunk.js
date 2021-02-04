(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{34:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),s=n.n(i),o=n(13),r=n.n(o),c=n(27),l=n(2),h=(n(34),n.p,n(9)),d=[{title:"About",url:"about",cName:"nav-links"},{title:"NUIBot",url:"NUIBot",cName:"nav-links"},{title:"Other",url:"Other",cName:"nav-links"}],u=[{title:"github",url:"",cName:"nav-icons",Icon:"fab fa-github"},{title:"linkedin",url:"",cName:"nav-icons",Icon:"fab fa-linkedin"}],b=n(10);n(44);var m=function(){var t=s.a.useState(!1),e=Object(h.a)(t,2),n=e[0],o=e[1],r=s.a.useState(!1),c=Object(h.a)(r,2),l=c[0],m=c[1],p=s.a.useState(window.scrollY),f=Object(h.a)(p,2),g=(f[0],f[1]),j=function(){var t=window.scrollY;g(t),m(t>100)};Object(i.useEffect)((function(){window.addEventListener("scroll",j)}));var y=["NavbarItems"];return l&&y.push("sticky"),Object(a.jsxs)("nav",{id:"navbar",className:y.join(" "),children:[Object(a.jsxs)("h1",{className:"navbar-logo",children:["Jacky Xie",Object(a.jsx)("i",{className:"fab fa-react"})]}),Object(a.jsx)("div",{className:"menu-icon",onClick:function(){o(!n)},children:Object(a.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(a.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[u.map((function(t,e){return Object(a.jsx)("li",{className:t.cName,children:Object(a.jsx)("a",{className:t.Icon,href:t.url})})})),d.map((function(t,e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:t.cName,children:l?Object(a.jsx)(b.Link,{to:t.url,spy:!0,smooth:!0,offset:-90,duration:500,children:t.title}):Object(a.jsx)(b.Link,{to:t.url,spy:!0,smooth:!0,offset:-160,duration:500,children:t.title})})})}))]})]})},p=[{title:"About Me",body:"WHOAMI? I am a budding third year student undertaking a bachelors in Software Engineering at \n\t\tthe University of New South Wales. I strive to achieve a vastly diversified\n\t\tportfolio of projects in multiple fields as I believe in this rapidly changing era of technology; \n\t\tbeing a 'Jack of All Trades' would be a great addition to any team when trying to engineer a solution\n\t\t\n\t\tTechnologies I have interracted with include:\n\t\tFlask, NodeJs, ReactJs, Heroku/Github Pages, Pandas/Numpy,\n\t\tBeautifulSoup, Pygame, Celery, SKlearn.",title_style:"about_title",body_style:"about_style",image:"macsublime.jpg",image_style:"about_image",container:"about_container",id:"about"},{title:"NUIBot - A Discord music bot",body:"Built a simple bot for broadcasting music within a dicord voice channel\n\t\tThe bot is built using the discord.js library on top of a Nodejs webserver.\n\t\tNUIBot works on top of Ytdl(youtube download) and Yt-search(youtube search)\n\t\tpackages which handles the downloading and querying aspects utilising the prebuilt\n\t\twebsocket technologies provided within the discordjs api to broadcast the music to the \n\t\tserver via a bot client instance.\n\n\t\tThis bot is a simple bot that connects the pre-existing architectures that handles the \n\t\tencoding/decoding aspects of music streaming and serves as a physical interface for \n\t\tthe server to interact with these pre-existing technologies.",title_style:"nui_title",body_style:"nui_style",image:"bot.gif",image_style:"nui_image",container:"nui_container",id:"NUIBot"},{title:"Other Projects",container:"other_container",id:"Other",children:[{title:"Hackathon COVID location tracker",body:"As part of a team of three in a 24 hr UNSW CSESOC Annual Hackathon event\n\t\t\t\twe built a simple webapp on top of ExpressJS served on a Flask webserver.\n\t\t\t\tThe webapp periodically scraped the official NSW Coronavirus data records and \n\t\t\t\tdisplays the Cases grouped by suburbs.\n\n\t\t\t\tThe main objective of this webapp is to extract and display the most important information\n\t\t\t\tfrom the chaos and panick that engulfs anything COVID related, i.e. the number of new Cases\n\t\t\t\tand where it is detected. \n\t\t\t\tAs the vast majority of members of society will not be bothered to check the headmaps for the official numbers\n\t\t\t\tand only really care if there has been any new cases near them.\n\n\t\t\t\tMy role in this project was to connect the Front/Back-End as well as designing the \n\t\t\t\tdata collection architecture i.e. using BeautifulSoup and python Requests library\n\t\t\t\tto collect the official numbers. As well as using Pandas to process the information to be served by the\n\t\t\t\tWebapp.",title_style:"other_title",container:"p1"},{title:"NLP twitter sentiment extraction",body:"This project is still in WIP progress, as I am still in the process of learning\n\t\t\t\thow to apply the BERT architecture to the NLP problem.\n\t\t\t\tThis kaggle competition gives you a tweet and a classified sentiment, and the objective is\n\t\t\t\tto extract the sub-paragraph within the text which best represents its sentiment.\n\n\t\t\t\tPreviously I have experimented on using a combination of Machine Learning algorithms such as:\n\t\t\t\t\t- Naive Bayes\n\t\t\t\t\t- Linear regressions \n\t\t\t\tto try to classify and then extract the subtext, HOWEVER. This technique gave a sub-optimal result\n\t\t\t\taveraging at a 55-60% jaccard similarity score on the test-data.\n\n\t\t\t\tTherefore I am in the process of learning how to fine tune a neural network such as BERT \n\t\t\t\t(Bidirectional Encoder Representations from Transformers) to achieve higher scores in completing\n\t\t\t\tthis Natural language processing problem.",title_style:"other_title",container:"p1"},{title:"This website",body:"This website, built off the ReactJs framework and deployed on Github pages\n\t\t\t\tcontains no backend integration i.e. no routes are actually implemented along with a\n\t\t\t\twebserver as there is no requirement to do so as this website only serves the purpose\n\t\t\t\tof displaying my projects.",title_style:"other_title",container:"p1"},{title:"Pygame Blackjack GUI game",body:"\n\t\t\t\tThis was my very first personal project, and was created with Pygame and was the project\n\t\t\t\tthat had taught me Python and the basics of Object oriented and Event oriented programming.\n\t\t\t\t",title_style:"other_title",container:"p1"}]}];n(45);var f=function(){var t=function(t){if(t.title)return Object(a.jsx)("h2",{className:t.title_style,id:t.id,children:t.title})},e=function(t){if(t.body)return Object(a.jsx)("p",{className:t.body_style,children:t.body.split("\n").reduce((function(t,e){return[t,Object(a.jsx)("br",{}),e]}))})},n=function(t){if(t.image)return Object(a.jsx)("div",{className:t.image_style,children:Object(a.jsx)("img",{src:t.image})})},i=function(i){if(i.children)return i.children.map((function(i,s){return Object(a.jsxs)("div",{className:i.container,children:[t(i),e(i),n(i)]})}))};return[Object(a.jsx)("div",{className:"main-body",children:p.map((function(s,o){return Object(a.jsxs)("div",{className:s.container,children:[t(s),e(s),n(s),i(s)]})}))})]};n(46);n(47);var g=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(m,{})}),Object(a.jsx)("body",{className:"App-body",children:Object(a.jsx)(f,{})}),Object(a.jsx)("footer",{className:"App-footer"})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),s(t),o(t)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(c.a,{basename:window.location.pathname||"",children:Object(a.jsx)(l.a,{exact:!0,path:"/",component:g})})}),document.getElementById("root")),j()}},[[50,1,2]]]);
//# sourceMappingURL=main.41c832bb.chunk.js.map