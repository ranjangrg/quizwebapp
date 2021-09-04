const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const testJSON = [
	{
		id: 1,
		desc: "What is the highest mountain in the world as of 2021?",
		options: ["K-2", "Mt. Fuji", "Annapurna", "Mt Everest"],
		note: "Select only one answer"
	}, {
		id: 2,
		desc: "What is the capital of China?",
		options: ["Beijing", "Kabul", "Bangkok", "Thimpu"],
		note: "Select one"
	}, {
		id: 3,
		desc: "Which one of the following is NOT a mammal?",
		options: ["Dog", "Whale", "Bat", "Ostrich"],
		note: "Select one"
	}, {
		id: 4,
		desc: "What is the biggest animal in the world (by weight)?",
		options: ["Elephant", "Panda", "Antarctic Blue Whale", "Bengal Tiger"],
		note: "Select only one answer"
	}, {
		id: 5,
		desc: "Who is the tallest man ever?",
		options: ["Yao Min", "Robert Wadlow", "Shaquille O'Neal", "Mike Tyson"],
		note: "Select one"
	}, {
		id: 6,
		desc: "Which one of the games listed was the most expensive to develop (including Marketing) (till 2020)?",
		options: ["GTA 5", "Cyberpunk 2077", "GTA 4", "Star Citizen"],
		note: "Select one"
	}, {
		id: 7,
		desc: "How far is the planet Mars from Earth (approx)?",
		options: ["12 million km", "39 million km", "394 million km", "12 billion km"],
		note: "Select only one answer"
	}, {
		id: 8,
		desc: "What is the world's strongest superacid/acid?",
		options: ["Sulphuric acid", "Fluoroantimonic acid", "Hydrochloric acid", "Carborane"],
		note: "Select one"
	}, {
		id: 9,
		desc: "Who holds the current Guiness World Record for 'most screen credits for a living actor' as of August 2020?",
		options: ["Brahmanandam Kanneganti", "Jackie Chan", "John Wayne", "Eric Roberts", "Shahrukh Khan"],
		note: "Select one"
	}, {
		id: 10,
		desc: "Which TV show is the longest-running scripted American primetime TV series (based on number of episodes)?",
		options: ["Family Guy", "Friends", "Frasier", "The Simpsons"],
		note: "Select one"
	}, 
];

app.use( (req, res, next) => {
	// NEVER in production
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	next();
} );

app.get('/data', (req, res) => {
	setTimeout(() => {
		res.json({data: testJSON});
	}, 2000);
});