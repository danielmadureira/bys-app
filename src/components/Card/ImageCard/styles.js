import { StyleSheet } from "react-native";

let width = '100%';

export const styles = (props) => StyleSheet.create({
	container: {
		width: (props.smallSize) ? (280) : (width),
		height: (props.smallSize) ? (185) : (430),
		flex: 1,
		resizeMode: "contain",
		justifyContent: "center",

		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		borderRadius: 15,
		shadowColor: "#F5F5F5",
		shadowOffset: {
			width: 2,
			height: 1
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5
	},
	container_shadow: {
		width: (props.smallSize) ? (280) : ('95%'),
		height: (props.smallSize) ? (185) : (430),
		marginTop: 38,
		marginLeft: (props.smallSize) ? (15) : (0),
	},
	image: {
		borderRadius: 15,
	},
	wrapper_text: {
		width: '90%',
		height: (props.smallSize) ? (83) : (118),
		backgroundColor: '#EAEBCF',

		display: "flex",
		justifyContent: "center",
		margin: 15,
		padding: 20,
		borderRadius: 15,
	},
	title: {
		fontSize: (props.smallSize) ? (16) : (20),
		fontWeight: "400"
	},
	subtitle: {
		fontSize: 14,
		paddingTop: 5
	}
});