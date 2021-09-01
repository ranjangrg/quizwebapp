import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const useStyles = makeStyles({
	btnGroup: {textAlign: "end"}
});

function QuizSubmissionBar(props) {
	const classes = useStyles();
	const qIds = props.qList.getQuestionIds();
	const selections = useSelector(state => Object.keys(state.selections));
	const [openSubmissionWarning , setOpenSubmissionWarning] = React.useState(false);
	const [alertMessage, setAlertMessage] = React.useState("No error");
	const [alertType, setAlertType] = React.useState("warning");
	const [alertTitle, setAlertTitle] = React.useState("Warning");
	const getUnansweredQuestions = () => {
		let missedQIds = [];
		qIds.forEach(qId => {
			if ( !(selections.includes(String(qId))) ) {
				missedQIds.push(qId);
			}
		});
		return missedQIds;
	};
	const checkSubmission = () => {
		let allAnswered = false;
		let missedQIds = getUnansweredQuestions();
		if (missedQIds.length === 0) {
			allAnswered = true;
		}
		return {allAnswered: allAnswered, missedQIds: missedQIds};
	};
	const submitQuiz = () => {
		const {allAnswered, missedQIds} = checkSubmission();
		let msg = "";
		if (allAnswered) {
			// continue submission process OR maybe final confirmation
			msg = (<>
				You answered all the questions.
				</>);
			setAlertType("success");
			setAlertTitle("Success");
			setAlertMessage(msg);
			setOpenSubmissionWarning(true);
		} else {
			// some questions are unanswered
			// dont let user submit (yet?) OR
			// confirm submission to user
			msg = (<>
				Following questions not answered: <br /> 
				<h2> {missedQIds.join(',')} </h2>
			</>);
			setAlertType("warning");
			setAlertTitle("Warning");
			setAlertMessage(msg);
			setOpenSubmissionWarning(true);
		}
	};
	return (<Box>
		<Card>
			<CardContent>
				<ButtonGroup className={classes.btnGroup} variant="contained" aria-label="submission bar">
					<Button 
						onClick={() => submitQuiz()}
						variant="contained" color="primary"> 
						Submit </Button>
				</ButtonGroup>
			</CardContent>
		</Card>
		<Snackbar open={openSubmissionWarning} onClose={() => setOpenSubmissionWarning(false)}>
			<Alert onClose={() => setOpenSubmissionWarning(false)} severity={alertType}> 
				<AlertTitle> { alertTitle }</AlertTitle> 
				{ alertMessage }
			</Alert>
		</Snackbar>
	</Box>);
}

export default QuizSubmissionBar;