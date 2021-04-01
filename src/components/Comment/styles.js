import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
	wrapper: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	profile: {
		height: 60,
		width: 60,
		backgroundColor: '#fff',
		borderRadius: 100
	},
	wrapper_text: {
		width: '60%'
	},
	name: {
		fontSize: 18,
	},
	profession: {
		fontSize: 12,
	},
	text_reactions: {
		color: (props.liked) ? '#BD2222' : '#c0c0c0'
	}
});