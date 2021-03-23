import { StyleSheet } from "react-native";

let width = '100%';
let wrapperWidth = '90%';

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		paddingLeft: 10,
		paddingRight: 10,
		width: width
	},
	container_image: {
		width: width,
		height: 171,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		marginTop: 68,
		marginBottom: 29,

		backgroundColor: '#EAEBCF',
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.8,
		shadowRadius: 5,
		elevation: 10,
	},
	wrapper_button: {
		width: wrapperWidth,
	},
	wrapper_alert: {
		width: wrapperWidth,
		top: 15
	},
	image: {
		width: 330,
	},
	container_flex: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		textAlign: "left",
		fontSize: 36,
	},
	input: {
		width: wrapperWidth,
		marginTop: 30,
		borderBottomWidth: 1,
	},
	textHelper: {
		marginTop: 5,
	},
	textLink: {
		color: '#2F49C0',
		marginTop: 5,
	},
	register: {
		color: '#2F49C0',
		marginLeft: 2,
	}
});