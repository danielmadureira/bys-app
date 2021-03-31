import { StyleSheet } from "react-native";

let width = '85%';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 45,
	},
	wrapper: {
		display: "flex",
		alignItems: "center",
	},
	container_header: {
		marginTop: 10,
		paddingBottom: 2,
		width: width
	},
	wrapper_button: {
		marginTop: 20,
		marginBottom: 24,
		width: width
	},
	messages: {
		marginBottom: 100,
		width: '90%'
	},
	wrapper_body: {
		marginTop: 35,
		width: width,
		marginBottom: '30%',
	},
	body: {
		fontSize: 18,
		textAlign: "justify",
	},
	button: {
		marginTop: 20,
	}
});