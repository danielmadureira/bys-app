import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
	wrapper: {
		paddingBottom: 10,
		display: "flex",
		alignItems: "center",
	},
	wrapper_text: {
		width: '92%',
	},
	title: {
		paddingTop: 15,
		fontSize: 20,
		fontWeight: "400"
	},
	subtitle: {
		fontSize: 14,
		paddingTop: 5,
	},
	wrapper_date: {
		display: "flex",
		alignItems: "flex-end",
		
		borderBottomWidth: 1,
		borderBottomColor: '#CCCCCC',
		borderRadius: 15,
		paddingTop: 5
	},
	date: {
		fontSize: 10,
	}
});