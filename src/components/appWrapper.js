import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Questions from '../model/questions';

import QuestionNav from './questionNav';
import AppQuestionCard from './questionCard';
import QuizSubmissionBar from './quizSubmissionBar';

// const useStyles = makeStyles({});

export default function AppWrapper() {
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
