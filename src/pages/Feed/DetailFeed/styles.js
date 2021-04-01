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
	image_container: {
		marginTop: 10,
		width: '95%',
		height: 350,
		flexDirection: 'row',
	},
	image_wrapper: {
		flex: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%',
		height: 350
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
		width: 350,
		paddingLeft: 20,
	},
});
