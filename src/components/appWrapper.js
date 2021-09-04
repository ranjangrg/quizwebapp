import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

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
				console.log("[ SUCCESS ] qList loaded");
				this.setState({
					dataLoaded: true
				});
			})
			.catch((err) => console.log("[ ERR ]", err))
		console.log("AppWrapper mounted now!");
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
						<CircularProgress size={40} variant="indeterminate" /> 
						<br />
						Loading questions ...
					</CardContent>
				</Card>
				</Box>
			</>);
		}
	}
}

// export default function AppWrapper() {
// 	let qList = new Questions();
// 	const [dataLoaded, updateLoadingStatus] = useState(true);

// 	useEffect( () => {
// 		qList.init('NO_SRC');
// 		updateLoadingStatus(qList.dataLoaded);
// 		console.log("AppWrapper mounted now!");
// 	}, [qList]);

// 	if (!dataLoaded) {
// 		return (<div> Loading data ... </div>);
// 	} else if (dataLoaded) {
// 		return (<>
// 			<AppQuestionCard qList={qList}/>
// 			<Box component="div" m={1}>
// 				<QuestionNav qList={qList} />
// 			</Box>
// 			<Box component="div" m={1}>
// 				<QuizSubmissionBar qList={qList} />
// 			</Box> 
// 		</>);
// 	}
// }


export default AppWrapper;