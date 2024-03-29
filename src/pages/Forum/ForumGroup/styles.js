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

		marginRight: 80,
		marginBottom: 15,

		borderTopEndRadius: 15,
		borderBottomEndRadius: 15,
		shadowColor: "#F5F5F5",
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5
	},
	status_title: {
		fontSize: 22,
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 15,
	},
	status_subtitle: {
		margin: 15,
		fontSize: 14
	},
	wrapper_comment: {
		marginBottom: 150,
		width: '90%'
	},
	btn_wrapper: {
		width: '80%',
		marginBottom: 15,
		alignItems: "flex-end",
	},
	btn_content: {
		backgroundColor: "#EAEBCF",
		height: 25,
		width: 150,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		borderTopEndRadius: 15,
		borderBottomEndRadius: 15,
		shadowColor: "#F5F5F5",
		shadowOffset: {
			width: 1,
			height: 1
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5
	},
	button: {
		width: '100%',
		marginTop: 50,
	}
});