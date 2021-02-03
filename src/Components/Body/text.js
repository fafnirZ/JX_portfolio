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
		title: 'Other Projects',
		title_style: "about_title",
		id: "Other"
	},

	{
		title: 'Hackathon COVID location tracker',
		body: 
		`As part of a team of three in a 24 hr UNSW CSESOC Annual Hackathon event
		we built a simple webapp on top of ExpressJS served on a Flask webserver.
		The webapp periodically scraped the official NSW Coronavirus data records and 
		displays the Cases grouped by suburbs.

		The main objective of this webapp is to extract and display the most important information
		from the chaos and panick that engulfs anything COVID related, i.e. the number of new Cases
		and where it is detected. 
		As the vast majority of members of society will not be bothered to check the headmaps for the official numbers
		and only really care if there has been any new cases near them.

		My role in this project was to connect the Front/Back-End as well as designing the 
		data collection architecture i.e. using BeautifulSoup and python Requests library
		to collect the official numbers. As well as using Pandas to process the information to be served by the
		Webapp.
		`,
		title_style: "about_title",
		body_style: "about_style"
	},

	{
		title: 'NLP twitter sentiment extraction',
		body: 
		`
		This project is still in WIP progress, as I am still in the process of learning
		how to apply the BERT architecture to the NLP problem.
		This kaggle competition gives you a tweet and a classified sentiment, and the objective is
		to extract the sub-paragraph within the text which best represents its sentiment.

		Previously I have experimented on using a combination of Machine Learning algorithms such as:
			- Naive Bayes
			- Linear regressions 
		to try to classify and then extract the subtext, HOWEVER. This technique gave a sub-optimal result
		averaging at a 55-60% jaccard similarity score on the test-data.

		Therefore I am in the process of learning how to fine tune a neural network such as BERT (Bidirectional Encoder Representations from Transformers)
		to achieve higher scores in completing this Natural language processing problem.

		`,
		title_style: "about_title",
		body_style: "about_style"
	},

	{
		title: 'This website',
		body: `This website, built off the ReactJs framework and deployed on Github pages
		contains no backend integration i.e. no routes are actually implemented along with a
		webserver as there is no requirement to do so as this website only serves the purpose
		of displaying my projects.`,
		title_style: "about_title",
		body_style: "about_style",
	},

	{
		title: 'Pygame Blackjack GUI game',
		body:
		`
		This was my very first personal project, and was created with Pygame and was the project
		that had taught me Python and the basics of Object oriented and Event oriented programming.
		`

	}

]

