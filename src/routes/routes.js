import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
	Login,
	Register,
	RegisterPassword,
} from '../pages';

import { AuthServices } from '../services/AuthServices';
import PrivateRoutes from './privateRoutes';

const Stack = createStackNavigator();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator animationType="slide-horizontal">
				{/** !AuthServices.isAuthenticated() && ( */}
					<Stack.Screen
						name="Home"
						component={Login}
						options={{
							headerShown: false
						}}
					/>

					<Stack.Screen
						name="Register"
						component={Register}
						options={{
							headerShown: false
						}}
					/>

					<Stack.Screen
						name="RegisterPassword"
						component={RegisterPassword}
						options={{
							headerShown: false
						}}
					/>

				{AuthServices.isAuthenticated() && (
					<Stack.Screen
						name="Feed"
						component={PrivateRoutes}
						options={{
							headerShown: false
						}}
					/>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes;