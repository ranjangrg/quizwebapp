import { combineReducers } from 'redux';

const selections_reducer = (initial_state={}, action) => {
	switch (action.type) {
		case "SELECT_ANSWER":
			return action.payload;
		default:
			return initial_state;
	}
};

const update_question_idx = (initial_state=1, action) => {
	switch (action.type) {
		case "UPDATE_QUESTION":
			return action.payload;
		default:
			return initial_state;
	}
};

const flagged_reducer = (initial_state={}, action) => {
	switch (action.type) {
		case "FLAG_QUESTION":
			return action.payload;
		default:
			return initial_state;
	}
};

const allReducers = combineReducers({
	selections: selections_reducer,
	currentQuestionIdx: update_question_idx,
	flaggedQuestions: flagged_reducer
});

export default allReducers;