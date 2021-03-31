import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

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
		paddingBottom: 15,
		width: '85%'
	},
	wrapper_card: {
		marginTop: 5,
		margin: 20
	},
	load_more: {
		top: 50,
		backgroundColor: '#C5DBA6',
		width: 60,
		height: 60,

		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginRight: 10,
		borderWidth: 1,
		borderColor: '#476044'
	},
	button: {
		margin: '10%'
	}
});