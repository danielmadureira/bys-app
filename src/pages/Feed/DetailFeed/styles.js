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
		width: width
	},
	body: {
		fontSize: 18,
		textAlign: "justify",
	},
	wrapper_picture: {
		marginTop: 40,
		display: "flex",
		alignItems: "center",
		width: width
	},
	picture_title: {
		transform: [{ rotate: '90deg' }],
		right: 0,
		top: 0,
		width: titleWidth
	}
});