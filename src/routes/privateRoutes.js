import 'react-native-gesture-handler';
import * as React from 'react';
import { 
  createBottomTabNavigator 
} from '@react-navigation/bottom-tabs';

import {
	Feed,
	DetailFeed,
	Diary,
	Forum,
	Calculator,
	IMCCalculator,
	WaterCalculator,
	Profile,
	WriteDiary,
	ForumGroup,
	AllMedicineNotification,
	MedicineNotification,
	WaterNotification,
	MainNotification
} from '../pages';

import { Main } from '../components';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const PrivateRoutes = () => {
  const user = useSelector(state => state.user)

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
					<Main {...props} user={user} />
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

export default PrivateRoutes;