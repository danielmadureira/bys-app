import { StyleSheet } from "react-native";

let width = '100%';

export const styles = (props) => StyleSheet.create({
	touchable: {
		height: props.tiny ? 22 : 45,
		marginTop: 29,
		marginBottom: 4,

		backgroundColor: props.background || '#AFD47B',
		borderColor: props.background || '#AFD47B',
		borderWidth: 1,
		borderRadius: props.radius || 4,

		shadowColor: props.background || '#AFD47B',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.9,
		shadowRadius: 15,
		elevation: 5,

		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		color: props.color || '#414141',
	},
	size: {
		width: width,
	},
	textInput: {
		width: '92%',
		height: 50,
		borderBottomWidth: 1,
		borderColor: '#555'
	},
	errorText: {
		fontSize: 11,
		color: '#e22f2f',
	},
	errorInput: {
		borderColor: '#e22f2f',
	}
});