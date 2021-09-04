import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Questions from '../model/questions';

import QuestionNav from './questionNav';
import AppQuestionCard from './questionCard';
import QuizSubmissionBar from './quizSubmissionBar';

// const useStyles = makeStyles({});

class AppWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.qList = new Questions();
		this.state = {
			dataLoaded: false
		};
	}
	componentDidMount() {
		this.qList.init();
		this.qList.isLoaded()
			.then( (loaded) => {
				this.setState({
					dataLoaded: true
				});
			})
			.catch((err) => console.err("[ ERR ]", err))
	}

	render() {
		if (this.state.dataLoaded) {
			return (<> 
				<AppQuestionCard qList={this.qList}/>
				<Box component="div" m={1}>
					<QuestionNav qList={this.qList} />
				</Box>
				<Box component="div" m={1}>
					<QuizSubmissionBar qList={this.qList} />
				</Box> 
			</>);
		} else {
			return (<> 
				<Box component="div" m={1}>
					<Card>
						<CardContent>
							<Typography component="div" align="center"> 
								<CircularProgress size={40} variant="indeterminate" /> 
							</Typography> 
							<Typography component="div" align="center"> 
								Loading questions ...
							</Typography> 
						</CardContent>
					</Card>
				</Box>
			</>);
		}
	}
}

export default AppWrapper;