import { StyleSheet } from "react-native";

let width = '85%';
let wrapperWidth = '98%';

export const styles = (props) => StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 150
	},
	wrapper: {
		display: "flex",
		alignItems: 'center',
		paddingTop: 40
	},
	container_header: {
		marginTop: 10,
		paddingBottom: 2,
		width: width
	},
	wrapper_menu: {
		marginTop: 36,
	},
	wrapper_button: {
		marginTop: 10,
		width: wrapperWidth
	},
	input: {
		width: '100%',
		marginTop: 45,
		height: 40,
		borderBottomWidth: 1,
	},
	weekends: {
		marginTop: 20,
		alignItems: 'flex-start',
	},
	days: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 20,
	},
	day: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		height: 41,
		width: 41,
		marginLeft: 6,
		backgroundColor: props.color || '#fff',
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 50,

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		elevation: 5,
	},
	hour: {
		width: 170,
		marginTop: 45,
		height: 40,
		borderBottomWidth: 1,
		fontSize: 16,
		textAlign: 'center'
	},
	hours_list: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 10,
	},
	remove_hour: {
		width: '40%'
	}
});