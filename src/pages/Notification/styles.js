import { StyleSheet } from "react-native";

let width = '85%';
let wrapperWidth = '98%';

export const styles = (props) => StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
	},
	wrapper: {
		display: "flex",
		alignItems: 'center',
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
		marginTop: 27,
		marginBottom: 24,
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
		alignItems: 'flex-start'
	},
	days: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10,
	},
	day: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',

		height: 40,
		width: 40,
		marginLeft: 6,
		backgroundColor: props.color || '#fff',
		borderColor: '#000',
		borderWidth: 1,
		borderRadius: 50,

		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		elevation: 5,
	}
});