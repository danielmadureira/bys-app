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
		marginBottom: 200,
	}
});