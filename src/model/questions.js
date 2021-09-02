const sample_questions = [
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
	}
];

const invalid_question = {
	id: -1,
	desc: "Invalid Question",
	options: ["None", "None", "None", "None"],
	note: "Invalid Question"
};

class Questions {
	constructor(data_src) {
		// ideally fectch this data from somewhere 
		// (DON'T use 'sample_questions')
		this.questionList = sample_questions;
		this.update();
	}
	update = () => {
		this.maxId = this._getQuestionsMaxId();
		this.minId = this._getQuestionsMinId();
	};
	getQuestionIds = () => {
		return this.questionList.map(q => q.id);
	};
	getQuestionList = () => this.questionList;
	getQuestion = (questionIdx) => {
		if (questionIdx < this.minId) {
			return this._getQuestionsMin();
		}
		if (questionIdx > this.maxId) {
			return this._getQuestionsMax();
		}
		const question = this.questionList.find( q => q.id === questionIdx );
		if (question) {
			return question;
		} else {
			return invalid_question;
		}
		// note: to catch invalid question idx, see below for ideas
		// if (questionIdx < this.minId || questionIdx > this.maxId) {
		// 	return invalid_question;
		// 	//throw new Error("Question does not exist!");
		// }
	}
	getMinId() { return this.minId; }
	getMaxId() { return this.maxId; }

	// internal methods/functions
	_getQuestionsMax = () => {
		return this.questionList.reduce( (q1, q2) => 
			q1.id > q2.id ? q1 : q2
		);
	};
	_getQuestionsMaxId = () => {
		return this._getQuestionsMax().id;
	};
	_getQuestionsMin = () => {
		return this.questionList.reduce( (q1, q2) => 
			q1.id < q2.id ? q1 : q2
		);
	};
	_getQuestionsMinId = () => {
		return this._getQuestionsMin().id;
	};
}

export default Questions;