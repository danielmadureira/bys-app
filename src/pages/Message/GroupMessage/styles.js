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
		display: "flex",
		alignItems: "flex-start",
		marginTop: 10,
		paddingBottom: 2,
		width: width
	},
	wrapper_status: {
		width: '100%',
		marginTop: 29,
		marginBottom: 27,
	},
	status: {
		width: '90%',
		backgroundColor: '#EAEBCF',
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,

		paddingRight: 80,
		paddingBottom: 15,
	},
	status_title: {
		textAlign: "justify",
		fontSize: 24,
		marginTop: 20,
		marginLeft: 15,
	},
	status_subtitle: {
		marginLeft: 15,
		textAlign: "justify",
		fontSize: 14
	},
	wrapper_comment: {
		marginBottom: '25%',
		marginBottom: 150,
	}
});