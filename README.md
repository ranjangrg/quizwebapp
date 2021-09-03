# Quiz Web-app
## Description
Basic quiz app. <br />
Main dependencies includes `React`, `react-redux`, `redux`, `@material-ui`.

## Files and directory
``` 
.
├── actions
├── reducers
├── components
│   ├── specialButtons
│   │   └── overallBtn.js
│   ├── questionCard.js
│   ├── questionNav.js
│   └── quizSubmissionBar.js
├── src
│   └── model
│       └── questions.js
...
```

## Usage

### Imports
Components to be imported `AppQuestionCard`, `QuestionNav` and `QuizSubmissionBar`. <br />
Questions data-model to be imported `<path>/model/questions.js`.
```jsx
import Questions from '<path>/model/questions';

import AppQuestionCard from '<path>/components/questionCard';
import QuestionNav from '<path>/components/questionNav';
import QuizSubmissionBar from '<path>/components/quizSubmissionBar';
```

### Usage
A typical usage.
```jsx
// uses MaterialUI Box component
function YourComponent() {
	const qList = new Questions('NO_SRC');
	return (<>
		<AppQuestionCard qList={qList}/>
		<Box component="div" m={1}>
			<QuestionNav qList={qList} />
		</Box>
		<Box component="div" m={1}>
			<QuizSubmissionBar qList={qList} />
		</Box>
	</>);
}
```

## Quiz Data format
A sample quiz data format is a JSON-based i.e. a list of dictionary objects.
```json
[
	{
		id: 1,
		desc: "Which is the correct answer?",
		options: ["Option A", "Option B", "Option  C", "Option  D", ...],
		note: "Special note on the question (if any)"
	}, {
		...
	},
]
```

## Questions 0bject

### Location/path
Definition and implementation is within `questions.js`.
``` 
.
├── actions
├── reducers
├── components
├── src
│   └── model
│       └── questions.js
...
```

### Class Interface
```jsx
class Questions {
	constructor(data_src) {}
	function update() {}
	function getQuestionIds() {}
	function getQuestionList() {}
	function getQuestion(questionIdx) {}
	function getMinId() {}
	function getMaxId() {}

	// internal methods/functions
}
```
### Class Methods

#### `Questions()`
Creates a `Questions` object. 
> note: Try best not to re-instantiate the `Questions` object multiple times. Use class methods to update in order to avoid creating `Questions` object multiple times.
```jsx
const qList = new Questions(<source>);
// source can be URL + additional options (not implemented yet)
```

#### `update(newSrc)`
Updates the object based on the new source passed via `newSrc`.

#### `getQuestionIds()`
returns an array of all the question ids.

#### `getQuestionList()`
returns the whole questions JSON-data (i.e. array of Question dictionaries)

#### `getQuestion(questionIdx)`
returns matching question using the `questionIdx` argument. If not found, it returns `invalid_question`. An `invalid_question` is defined as:
```jsx
const invalid_question = {
	id: -1,
	desc: "Invalid Question",
	options: ["None", "None", "None", "None"],
	note: "Invalid Question"
};
```

#### `getMinId()`
returns the minimum `id` within the questions dataset.

#### `getMaxId()`
returns the maximum `id` within the questions dataset.