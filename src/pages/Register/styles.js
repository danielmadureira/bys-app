import { StyleSheet } from "react-native";

let width = '85%';
let wrapperWidth = '100%';
let messageWidth = '92%';

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
		height: 332,
		width: '90%',
		borderRadius: 10,

		marginTop: 24,
		marginBottom: 150,

		display: "flex",
		alignItems: "center",
	},
	message: {
		width: '96%',

		display: "flex",
		alignItems: "flex-start",
	},
	input: {
		width: messageWidth,
		height: 50,
		borderBottomWidth: 1,
		borderColor: '#555',
	},
	input_area: {
		width: messageWidth,
		marginTop: 15,
		padding: 10,
		borderWidth: 1,
		borderColor: '#555',
		textAlignVertical: 'top'
	},
	wrapper_button: {
		width: '92%',
	}
});