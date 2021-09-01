
const selectAnswer = (selection) => {
	return {
		type: "SELECT_ANSWER",
		payload: selection
	};
};

const updateQuestion = (newQuestionIdx) => {
	return {
		type: "UPDATE_QUESTION",
		payload: newQuestionIdx
	};
};

const flagQuestion = (flaggedQuestions) => {
	return {
		type: "FLAG_QUESTION",
		payload: flaggedQuestions
	};
};

export { selectAnswer, updateQuestion, flagQuestion };