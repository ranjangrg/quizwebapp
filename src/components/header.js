
import { makeStyles } from '@material-ui/core/styles';

import { 
	AppBar, Toolbar, Typography 
} from '@material-ui/core';

const useStyles = makeStyles( (theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	button: {
		backgroundColor: "inherit"
	}
}) );

function AppHeader() {
	const classes = useStyles();
	return (<div className={classes.root}>
		<AppBar position="static"> 
			<Toolbar>
				<Typography variant="h6" className={classes.title}>
					Quiz App Example
				</Typography>
			</Toolbar>
		</AppBar>
	</div>);
}

export default AppHeader;