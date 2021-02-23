import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
	Feed,
	DetailFeed,
	Login,
	Diary,
	Forum,
	Calculator,
	IMCCalculator,
	WaterCalculator,
	Profile,
	WriteDiary,
	ForumGroup,
	Register,
	RegisterPassword,
	AllMedicineNotification,
	MedicineNotification,
	WaterNotification,
	MainNotification
} from '../pages';

import { Main } from '../components';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RoutesTabs = () => {
	return (
		<Tab.Navigator
			initialRouteName="Feed"
			tabBar={props =>
				<View style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 0
				}}>
					<Main {...props} />
				</View>
			}
			tabBarOptions={{
				style: {
					borderTopWidth: 0,
					backgroundColor: '#FFFFFF',
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					height: 55,
					paddingBottom: 5,
				}
			}}
			animationType="slide-horizontal"
		>
			<Tab.Screen
				name="Feed"
				component={Feed}
				options={{
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="DetailFeed"
				component={DetailFeed}
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
				name="WriteDiary"
				component={WriteDiary}
				options={{
					headerShown: false
				}}
			/>

			<Tab.Screen
				name="Forum"
				component={Forum}
				options={{
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="ForumGroup"
				component={ForumGroup}
				options={{
					headerShown: false
				}}
			/>

			<Tab.Screen
				name="Profile"
				component={Profile}
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
				name="IMCCalculator"
				component={IMCCalculator}
				options={{
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="WaterCalculator"
				component={WaterCalculator}
				options={{
					headerShown: false
				}}
			/>

			<Tab.Screen
				name="Notification"
				component={MainNotification}
				options={{
					headerShown: false
				}}
			/>

			<Tab.Screen
				name="WaterNotification"
				component={WaterNotification}
				options={{
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="AllMedicineNotification"
				component={AllMedicineNotification}
				options={{
					headerShown: false
				}}
			/>
			<Tab.Screen
				name="MedicineNotification"
				component={MedicineNotification}
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