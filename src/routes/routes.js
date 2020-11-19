import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { 
	Feed, 
	Login, 
	Diary, 
	Message, 
	Notification,
	Calculator
} from '../pages';

import { Main } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RoutesTabs = () => {
	return (
		<Tab.Navigator initialRouteName="Feed" tabBar={props => <Main {...props} />} animationType="slide-horizontal">
			<Tab.Screen
				name="Feed"
				component={Feed}
				options={{
					headerShown: false
				}}
			/>

			<Tab.Screen
				name="Diary"
				component={Diary}
				options={{
					headerShown: false
				}}
			/>

			<Tab.Screen
				name="Message"
				component={Message}
				options={{
					headerShown: false
				}}
			/>
			
			<Tab.Screen
				name="Calculator"
				component={Calculator}
				options={{
					headerShown: false
				}}
			/>
			
			<Tab.Screen
				name="Notification"
				component={Notification}
				options={{
					headerShown: false
				}}
			/>
		</Tab.Navigator>
	)
}

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator animationType="slide-horizontal">
				<Stack.Screen
					name="Home"
					component={Login}
					options={{
						headerShown: false
					}}
				/>

				<Stack.Screen
					name="Feed"
					component={RoutesTabs}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default Routes;