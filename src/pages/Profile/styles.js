import { StyleSheet } from "react-native";

let width = '85%';
let wrapperWidth = '100%';
let messageWidth = '90%';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
	},
	wrapper: {
		display: "flex",
		alignItems: "center",
		width: wrapperWidth,
	},
	container_header: {
		marginTop: 10,
		paddingBottom: 2,
		width: width
	},
	wrapper_menu: {
		marginTop: 36,
	},
	profile: {
		width: wrapperWidth,
		height: 200,
	},
	profile_name: {
		marginTop: 100,
		fontSize: 36,
	},
	profile_profession: {
		fontSize: 14,
	},
	image: {
		marginTop: 45,
		backgroundColor: '#EAEBCF'
	},
	profile_image_wrapper: {
		width: 184,
		height: 184,

		position: 'absolute',
		marginTop: 150
	},
	profile_image: {
		width: 180,
		height: 180,
		borderWidth: 1,
		borderColor: '#EAEBCF',

		borderRadius: 100,
	},
	wrapper_status: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",

		width: wrapperWidth,
		marginTop: 29,
	},
	status: {
		width: '90%',
		height: 93,

		backgroundColor: '#EAEBCF',
		borderTopRightRadius: 5,
		borderBottomRightRadius: 5,

		display: "flex",
		alignItems: "flex-end",
		justifyContent: "center",
		paddingRight: 80,
	},
	status_title: {
		textAlign: "left",
		fontSize: 18
	},
	message_image: {
		width: messageWidth,
		flex: 1,
		resizeMode: "contain",
		justifyContent: "center",

		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center"
	},
	message_container: {
		height: 400,
		width: wrapperWidth,
		borderRadius: 10,

		paddingTop: 80,
		marginBottom: 200,

		display: "flex",
		alignItems: "center",
	},
	message_title: {
		width: width,
		marginBottom: 20
	},
	title: {
		fontSize: 24,
		color: '#fff',
		textAlign: "left"
	},
	message: {
		height: 234,
		width: messageWidth,

		backgroundColor: '#EAEBCF',
		borderRadius: 10,
		display: "flex",
		alignItems: "center",
	},
	input: {
		width: width,
		height: 50,
		borderBottomWidth: 1,
		borderColor: '#555',
	},
	input_area: {
		width: width,
		marginTop: 15,
		padding: 10,
		borderWidth: 1,
		borderColor: '#555',
		textAlignVertical: 'top'
	},
	wrapper_button: {
		width: '80%',
	},
	actions_icons: {
		width: '90%',
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		top: 60
	},
	icon_edit: {
		width: 60,
	}
});