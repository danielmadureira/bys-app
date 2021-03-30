import { StyleSheet } from "react-native";

let width = '95%';
let itemWidth = '4%';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		padding: itemWidth
	},
	safearea: {
		flex: 1,
		marginBottom: 150,
		alignItems: "center",
		justifyContent: "center"
	},
	button: {
		width: '100%',
		marginTop: 50,
	},
	wrapper: {
		display: "flex",
		alignItems: "center",
		paddingBottom: 10
	},
	space: {
		display: "flex",
		justifyContent: "space-between"
	},
	container_header: {
		marginTop: 25,
		paddingBottom: 2,
		width: width
	},
	sectionHeader: {
		fontWeight: '800',
		fontSize: 18,
		marginTop: 20,
	},
	itemText: {
		marginTop: 5,
	}
});