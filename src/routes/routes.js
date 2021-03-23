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
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const Routes = () => {
  const user = useSelector(state => state.user)
	return (
		<NavigationContainer>
			<Stack.Navigator 
				animationType="slide-horizontal"
				screenOptions={{
					cardStyle: { backgroundColor: '#FFFFFF' }
				}}
			>
				{user.name === '' || 
				user.name === undefined ? 
				(<>
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
				</>) : 
				(
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