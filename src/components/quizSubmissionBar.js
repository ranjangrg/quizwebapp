import { makeStyles } from '@material-ui/core';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
	btnGroup: {textAlign: "end"}
});

function QuizSubmissionBar() {
	const classes = useStyles();
	const submitQuiz = () => {
		alert("Submission to be implemented.");
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
	</Box>);
}

export default QuizSubmissionBar;