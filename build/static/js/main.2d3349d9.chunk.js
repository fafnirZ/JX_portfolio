(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{21:function(t,e,i){},32:function(t,e,i){},33:function(t,e,i){},34:function(t,e,i){},35:function(t,e,i){},36:function(t,e,i){"use strict";i.r(e);var a=i(0),n=i(1),s=i.n(n),o=i(7),c=i.n(o),l=(i(21),i.p,i(2)),r=[{title:"About",url:"about",cName:"nav-links"},{title:"NUIBot",url:"NUIBot",cName:"nav-links"},{title:"third",url:"third",cName:"nav-links"}],u=[{title:"github",url:"",cName:"nav-icons",Icon:"fab fa-github"},{title:"linkedin",url:"",cName:"nav-icons",Icon:"fab fa-linkedin"}],d=i(3);i(32);var b=function(){var t=s.a.useState(!1),e=Object(l.a)(t,2),i=e[0],o=e[1],c=s.a.useState(!1),b=Object(l.a)(c,2),m=b[0],h=b[1],j=s.a.useState(window.scrollY),p=Object(l.a)(j,2),f=(p[0],p[1]),g=function(){var t=window.scrollY;f(t),h(t>100)};Object(n.useEffect)((function(){window.addEventListener("scroll",g)}));var v=["NavbarItems"];return m&&v.push("sticky"),Object(a.jsxs)("nav",{id:"navbar",className:v.join(" "),children:[Object(a.jsxs)("h1",{className:"navbar-logo",children:["Jacky Xie",Object(a.jsx)("i",{className:"fab fa-react"})]}),Object(a.jsx)("div",{className:"menu-icon",onClick:function(){o(!i)},children:Object(a.jsx)("i",{className:i?"fas fa-times":"fas fa-bars"})}),Object(a.jsxs)("ul",{className:i?"nav-menu active":"nav-menu",children:[u.map((function(t,e){return Object(a.jsx)("li",{className:t.cName,children:Object(a.jsx)("a",{className:t.Icon,href:t.url})})})),r.map((function(t,e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:t.cName,children:m?Object(a.jsx)(d.Link,{to:t.url,spy:!0,smooth:!0,offset:-90,duration:500,children:t.title}):Object(a.jsx)(d.Link,{to:t.url,spy:!0,smooth:!0,offset:-160,duration:500,children:t.title})})})}))]})]})},m=[{title:"About Me",body:"WHOAMI? I am a budding third year student undertaking a bachelors in Software Engineering at \n\t\tthe University of New South Wales. I strive to achieve a vastly diversified\n\t\tportfolio of projects in multiple fields as I believe in this rapidly changing era of technology; \n\t\tbeing a 'Jack of All Trades' would be a great addition to any team when trying to engineer a solution",title_style:"about_title",body_style:"about_style",image:"macsublime.jpg",id:"about"},{title:"NUIBot - A Discord music bot",body:"Built a simple bot for broadcasting music within a dicord voice channel\n\t\tThe bot is built using the discord.js library on top of a Nodejs webserver.\n\t\tNUIBot works on top of Ytdl(youtube download) and Yt-search(youtube search)\n\t\tpackages which handles the downloading and querying aspects utilising the prebuilt\n\t\twebsocket technologies provided within the discordjs api to broadcast the music to the \n\t\tserver via a physical bot client.\n\t\tThis bot is a simple bot that connects the pre-existing architectures that handles the \n\t\tencoding/decoding aspects of music streaming and serves as a physical interface for \n\t\tthe server to interact with these pre-existing technologies",title_style:"about_title",body_style:"about_style",image:"bot.gif",id:"NUIBot"},{title:"asdasdasdadssda",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \n\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud \n\t\texercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate \n\t\tvelit essecillum dolore eu fugiat nulla pariatur. \n\t\tExcepteur sint occaecat cupidatat noproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",title_style:"about_title",body_style:"about_style",image:"macsublime.jpg",id:"third"},{title:"asldjlka",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \n\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud \n\t\texercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate \n\t\tvelit essecillum dolore eu fugiat nulla pariatur. \n\t\tExcepteur sint occaecat cupidatat noproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",title_style:"about_title",body_style:"about_style",image:"macsublime.jpg"}];i(33);var h=function(){return[Object(a.jsx)("div",{children:m.map((function(t,e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:t.title_style,id:t.id,children:t.title}),Object(a.jsx)("p",{className:t.body_style,children:t.body.split("\n").reduce((function(t,e){return[t,Object(a.jsx)("br",{}),e]}))}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:t.image,className:"image_icon"})})]})}))})]};i(34);i(35);var j=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(b,{})}),Object(a.jsx)("body",{className:"App-body",children:Object(a.jsx)(h,{})}),Object(a.jsx)("footer",{})]})},p=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(e){var i=e.getCLS,a=e.getFID,n=e.getFCP,s=e.getLCP,o=e.getTTFB;i(t),a(t),n(t),s(t),o(t)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),p()}},[[36,1,2]]]);
//# sourceMappingURL=main.2d3349d9.chunk.js.map