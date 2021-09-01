import { useSelector, useDispatch } from 'react-redux';

import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import FlagIcon from '@material-ui/icons/Flag';

import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import { makeStyles } from '@material-ui/core/styles';

import { updateQuestion } from '../actions';

const useStyles = makeStyles( (theme) => ({
	paper: {
		height: 50, width: 86, padding: 10,
		cursor: "pointer",
		"&:hover": {
			backgroundColor: theme.palette.info.light,
			color: theme.palette.text.info
		}
	},
	paperSelected: {
		backgroundColor: theme.palette.info.light
	},
	redColor: {color: red[500]}
	// button: {margin: theme.spacing(1,1,0,0)}
}) );

function QuestionsAnsweredGrid(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const qList = props.qList.getQuestionList();
	const globalSelections = useSelector(state => state.selections);
	const flaggedQuestions = useSelector(state => state.flaggedQuestions);
	const currentQuestionIdx = useSelector(state => state.currentQuestionIdx);
	const changeCurrentQuestion = (_newQuestionIdx) => {
		let newQuestionIdx = parseInt(_newQuestionIdx);
		// if (newQuestionIdx < minId) { newQuestionIdx = minId; }
		// if (newQuestionIdx > maxId) { newQuestionIdx = maxId; }
		dispatch(updateQuestion(newQuestionIdx));
	};
	return (<>
	<Box component="div" m={1}>
		<Grid container>
			<Grid item xs={12}>
				<Grid container justifyContent="center" spacing={1}>
					{ qList.map( (question) => (
						<Grid key={question.id} item> 
							<Paper 
								className={ clsx({
									[classes.paper]: true,
									[classes.paperSelected]: (currentQuestionIdx === question.id)
									})
								} 
								onClick={() => changeCurrentQuestion(question.id)}
								>
								<Typography variant="overline"> Question {question.id} </Typography>
								<Divider />
								{
									globalSelections[question.id] ? 
									<Tooltip title="Question answered" aria-label="question answered">
										<CheckCircleIcon style={{color: green[500]}} />
									</Tooltip> :
									<Tooltip title="Question not answered" aria-label="question not answered">
										<ErrorIcon style={{color: amber[500]}} />
									</Tooltip>
								} 
								{
									flaggedQuestions[question.id] ?
									<Tooltip title="This question is flagged" aria-label="this question is flagged">
										<FlagIcon className={classes.redColor}/> 
									</Tooltip> : ""
								}
							</Paper>
						</Grid>	
					) ) }
				</Grid>
			</Grid>
		</Grid>
	</Box>
	<Box component="div" m={1} pt={3}>	
		<Typography variant="caption" align="right" component="div"> 
			Note: Click on the card to go to the mentioned question.
		</Typography>
	</Box>
	</>);
}

export default QuestionsAnsweredGrid;