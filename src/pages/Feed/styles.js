import { StyleSheet } from "react-native";

let width = '95%';
let itemWidth = '5%';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22,
		margin: itemWidth
	},
	wrapper: {
		display: "flex",
		alignItems: "center",
	},
	space: {
		display: "flex",
		justifyContent: "space-between"
	},
	container_header: {
		marginTop: 10,
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