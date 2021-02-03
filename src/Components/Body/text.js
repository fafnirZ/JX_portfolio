export const texts =  
[

	{
		title: 'About Me',
		body: `WHOAMI? I am a budding third year student undertaking a bachelors in Software Engineering at 
		the University of New South Wales. I strive to achieve a vastly diversified
		portfolio of projects in multiple fields as I believe in this rapidly changing era of technology; 
		being a 'Jack of All Trades' would be a great addition to any team when trying to engineer a solution
		
		Technologies I have interracted with include:
		Flask, NodeJs, ReactJs, Heroku/Github Pages, Pandas/Numpy,
		BeautifulSoup, Pygame, Celery, SKlearn.

		`,
		title_style: "about_title",
		body_style: "about_style",
		image:"macsublime.jpg",
		image_style: "image_icon",
		id: "about"
	},

	{
		title: 'NUIBot - A Discord music bot',
		body: `Built a simple bot for broadcasting music within a dicord voice channel
		The bot is built using the discord.js library on top of a Nodejs webserver.
		NUIBot works on top of Ytdl(youtube download) and Yt-search(youtube search)
		packages which handles the downloading and querying aspects utilising the prebuilt
		websocket technologies provided within the discordjs api to broadcast the music to the 
		server via a bot client instance.

		This bot is a simple bot that connects the pre-existing architectures that handles the 
		encoding/decoding aspects of music streaming and serves as a physical interface for 
		the server to interact with these pre-existing technologies.`,
		title_style: "nui_title",
		body_style: "nui_style",
		image: "bot.gif",
		image_style: "nui_image",
		id: "NUIBot"
	},

	{
		title: 'This website',
		body: `This website, built off the ReactJs framework and deployed on Github pages
		contains no backend integration i.e. no routes are actually implemented along with a
		webserver as there is no requirement to do so as this website only serves the purpose
		of displaying my projects.`,
		title_style: "about_title",
		body_style: "about_style",
		id: "Website"
	},

	{
		title: 'Other Projects',
		body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud 
		exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate 
		velit essecillum dolore eu fugiat nulla pariatur. 
		Excepteur sint occaecat cupidatat noproident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		title_style: "about_title",
		body_style: "about_style",
		id: "Other"
	}

]

