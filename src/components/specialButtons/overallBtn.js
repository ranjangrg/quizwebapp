import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import ListIcon from '@material-ui/icons/List';
import QuestionsAnsweredGrid from '../summary';

const useStyles = makeStyles({
	fullList: { width: 'auto'}
});

function OverallButton(props) {
	const qList = props.qList;
	const classes = useStyles();
	const [state, setState] = React.useState({
		openDrawer: false
	});
	const toggleSummary = (open) => (event) => {
		if ( event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift') ) {
			return;
		}
		setState({ openDrawer: open });
	};
	const getSelectionsGrid = () => (<div
		className={classes.fullList} role="presentation"
		onClick={toggleSummary(false)} onKeyDown={toggleSummary(false)}>
			<QuestionsAnsweredGrid qList={qList} />
	</div>);
	return (
		<div>
			<React.Fragment key="bottom">
				<Tooltip title="Show overall" aria-label="show overall">
					<IconButton onClick={toggleSummary(true)} aria-label="next question">
						<ListIcon />
					</IconButton>
				</Tooltip>
				<Drawer anchor="bottom" open={state["openDrawer"]} onClose={toggleSummary(false)}>
					{getSelectionsGrid()}
				</Drawer>
			</React.Fragment>
		</div>
	);
}

export default OverallButton;
