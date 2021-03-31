import { StyleSheet } from "react-native";

let width = '85%';
let wrapperWidth = '100%';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 20,
	},
	alert_container: {
		flex: 1,
		paddingTop: 40,
	},
	wrapper: {
		paddingBottom: 150,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: '100%'
	},
	container_header: {
		marginTop: 10,
		paddingBottom: 2,
		width: width
	},
	wrapper_menu: {
		marginTop: 36,
	},
	notifications: {
		display: "flex",
		alignItems: "center",
		width: '90%',
		marginTop: 20,
	}
});