import { useDispatch, useSelector } from 'react-redux';

import { selectAnswer } from '../actions';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( (theme) => ({
	qcard: {},
}) );

function Option(props) {
	return (<FormControlLabel 
		value={String(props.idx)} 
		label={props.desc} control={<Radio />} 
	/>);
}

function QuestionCard(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const selections = useSelector(state => state.selections);
	let questionObj = props.currentQuestion;
	const finalQuestionId = props.finalQuestionId;
	// note below: using redux-state's 'selections' state to
	// further create a new local state 'selectedOption'
	const selectedOption = useSelector(state => state.selections[questionObj.id]);
	const selectOption = (e) => {
		selections[questionObj.id] = e.target.value;
		dispatch(selectAnswer(selections));
	};
	return (
		<Card className={classes.qcard}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					Question {questionObj.id} of {finalQuestionId}
				</Typography>
				<Typography variant="h5" component="h2">
					{ questionObj.desc }
				</Typography>
				<Typography color="textSecondary">
				{ questionObj.note }
				</Typography>
				<Typography variant="body2" component="div">
					<RadioGroup 
						onChange={ selectOption } onClick={ selectOption }
						value={ selectedOption ? selectedOption : "-1" }
						>
						{ questionObj.options.map( (desc, idx) => 
							<Option key={idx} idx={idx} desc={desc} />
						) }
					</RadioGroup>
				</Typography>
			</CardContent>
		</Card>
	);
}

function AppQuestionCard(props) {
	const qList = props.qList;
	const currentQuestionIdx = useSelector(state => state.currentQuestionIdx);
	return (<Box component="div" m={1}>
		<QuestionCard 
			currentQuestion={qList.getQuestion(currentQuestionIdx)} 
			finalQuestionId={qList.getMaxId()}
			/> 
	</Box>);
}



export default AppQuestionCard;