import 'react-native-gesture-handler';
import * as React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import Stack from 'react-router-native-stack';

import { Feed, Login } from '../pages';
import { Main } from '../components';

const Routes = () => {
	return (
		<NativeRouter>
			<Stack animationType="slide-horizontal">
				<Route
					exact
					path="/"
					component={Login}
				/>

				<Route
					exact
					path="/feed"
					component={Feed}
					footerComponent={Main}
				/>
			</Stack>
		</NativeRouter>
	)
}

export default Routes;