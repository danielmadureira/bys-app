import { StyleSheet } from "react-native";

const postImageHeight = 450;

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
		width: '85%'
	},
	webview_wrapper: {
		marginTop: 10,
		width: '85%',
		marginBottom: '30%',
	},
	webview: {
		borderWidth: 1,
		borderColor: 'black',
		height: 0,
		width: '100%',
		marginTop: 35
	},
	body: {
		flex: 1,
		fontSize: 18,
		textAlign: "justify",
		width: '100%',
		height: 200
	},
	image_container: {
		marginTop: 5,
		width: '95%',
		height: postImageHeight,
		flexDirection: 'row',
	},
	image_wrapper: {
		flex: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%',
		height: postImageHeight
	},
	image_shadow: {
		width: '98%',
		borderRadius: 5,
		shadowColor: "#F5F5F5",
		shadowOffset: {
			width: 1,
			height: 0
		},
		shadowOpacity: 0.2,
		shadowRadius: 30,
		elevation: 15
	},
	image_description_wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image_description: {
		transform: [{ rotate: '90deg'}],
		width: postImageHeight, // O texto é girado 90 graus, então a largura corresponde à altura.
		paddingLeft: 20,
	},
});
