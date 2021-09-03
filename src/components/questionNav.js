// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FlagIcon from '@material-ui/icons/Flag';

import red from '@material-ui/core/colors/red';

import { makeStyles } from '@material-ui/core/styles';

import { updateQuestion, flagQuestion } from '../actions';

import OverallButton from './specialButtons/overallBtn';

const useStyles = makeStyles( (theme) => ({
	buttonNav: {justifyContent: "center"},
	flagged: {color: red[500]},
	fixedBottom: {
		position: "sticky",
		bottom: "0",
	}
}) );

function QuestionNav(props) {
	const classes = useStyles();
	const qList = props.qList;
	// const [minId, maxId] = [props.minId, props.maxId];
	const [minId, maxId] = [qList.getMinId(), qList.getMaxId()];
	const currentQuestionIdx = useSelector(state => state.currentQuestionIdx);
	const flaggedQuestions = useSelector(state => state.flaggedQuestions);
	const dispatch = useDispatch();
	const changeQuestion = (_newQuestionIdx) => {
		let newQuestionIdx = parseInt(_newQuestionIdx);
		if (newQuestionIdx < minId) { newQuestionIdx = minId; }
		if (newQuestionIdx > maxId) { newQuestionIdx = maxId; }
		dispatch(updateQuestion(newQuestionIdx));
	};
	const flagCurrentQuestion = () => {
		flaggedQuestions[currentQuestionIdx] = !flaggedQuestions[currentQuestionIdx];
		dispatch(flagQuestion({...flaggedQuestions}));
	};
	return (<>
		<Card className={classes.fixedBottom}>
			<CardActions className={classes.buttonNav}>
				<Tooltip title="Go to Previous Question" aria-label="go to previous question">
					<IconButton onClick={() => changeQuestion(currentQuestionIdx - 1)} aria-label="previous question">
						<ArrowBackIcon />
					</IconButton>
				</Tooltip>
				{ 
					flaggedQuestions[currentQuestionIdx] ? 
					<Tooltip title="Unflag current Question" aria-label="flag current question">
						<IconButton onClick={() => flagCurrentQuestion()} aria-label="flag question">
							<FlagIcon className={classes.flagged}/>
						</IconButton>
					</Tooltip> : 
					<Tooltip title="Flag current Question" aria-label="flag current question">
						<IconButton onClick={() => flagCurrentQuestion()} aria-label="flag question">
							<FlagIcon/>
						</IconButton>
					</Tooltip>
				}
				<Tooltip title="Go to Next Question" aria-label="go to next question">
					<IconButton onClick={() => changeQuestion(currentQuestionIdx + 1)} aria-label="next question">
						<ArrowForwardIcon />
					</IconButton>
				</Tooltip>
				<Divider orientation="vertical" flexItem />
				<OverallButton qList={qList} />
			</CardActions>
		</Card>		
	</>);
}

export default QuestionNav;