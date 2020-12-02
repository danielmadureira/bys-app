import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	wrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	profile: {
		height: 60,
		width: 60,
		backgroundColor: '#000',
		borderRadius: 100
	},
	wrapper_text: {
		marginRight: '16%',
	},	
	name: {
		fontSize: 18,
	},
	profession: {
		fontSize: 12,
	}
});