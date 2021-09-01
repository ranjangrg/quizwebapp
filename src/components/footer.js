import { useState, Fragment } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { Restore, Favorite, LocationOn } from '@material-ui/icons';

function AppFooter() {
	const [currentAction, _setAction] = useState("No action");
	const setAction = (e, newAction) => {
		_setAction(newAction);
	};
	return (<>
		<h1> Action: {currentAction}  </h1>
		<BottomNavigation value={currentAction} position="static" onChange={setAction}>
			<BottomNavigationAction value="Restore" label="Action 1" icon={<Restore />}></BottomNavigationAction>
			<BottomNavigationAction value="Favorite" label="Action 2" icon={<Favorite />}></BottomNavigationAction>
			<BottomNavigationAction value="Location" label="Action 3" icon={<LocationOn />}></BottomNavigationAction>
			<Fragment key="overall">
				<Button onClick={() => ''}> Overall </Button>
				<Drawer anchor="overall" open="anchor" >
					<div role="presentation"> Drawer </div>
				</Drawer>
			</Fragment>
		</BottomNavigation>
	</>);
}

export default AppFooter;