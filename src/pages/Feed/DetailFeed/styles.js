import { StyleSheet } from "react-native";

let width = '85%';
let titleWidth = '5%';

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
	wrapper_body: {
		marginTop: 35,
		width: width,
		marginBottom: '30%',
	},
	body: {
		flex: 1,
		fontSize: 18,
		textAlign: "justify",
		width: '100%',
		height: 200
	},
	picture: {
		width: '100%',
		height: 350
	},
	shadow_picture: {
		width: '100%',

		borderRadius: 5,
		shadowColor: "#F5F5F5",
		shadowOffset: {
			width: 1,
			height: 0
		},
		shadowOpacity: 0.3,
		shadowRadius: 30,
		elevation: 15
	},
	wrapper_picture: {
		marginTop: 40,
		display: "flex",
		alignItems: "flex-end",

		width: '90%'
	},
	wrapper_row: {
		flex: 1,
		flexDirection: "row",
		width: '90%',
	},
	picture_title: {
		fontSize: 11,
		// transform: [{ rotate: '90deg' }],
		right: 0,
		top: 0,
	}
});