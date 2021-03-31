import { StyleSheet } from "react-native";

let width = '85%';
let wrapperWidth = '100%';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
	},
	wrapper: {
		paddingBottom: 150,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: '100%'
	},
	container_header: {
		marginTop: 40,
		paddingBottom: 2,
		width: width
	},
	wrapper_menu: {
		marginTop: 36,
	},
	notifications: {
		display: "flex",
		alignItems: "center",
		width: '85%',
		marginTop: 20,
	}
});