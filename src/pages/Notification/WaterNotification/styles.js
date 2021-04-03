import { StyleSheet } from "react-native";

let width = '85%';
let wrapperWidth = '100%';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
	},
	wrapper: {
		display: "flex",
		alignItems: "center",
		width: wrapperWidth
	},
	body: {
		display: "flex",
		alignItems: "center",
		width: '90%'
	},
	container_header: {
		marginTop: 10,
		paddingBottom: 2,
		width: width
	},
	wrapper_menu: {
		marginTop: 36,
	},
	input: {
		width: '90%',
		marginTop: 10,
		height: 40,
		borderBottomWidth: 1,
	},
	btn_wrapper: {
		display: "flex",
		alignItems: "center",
		width: '90%'
	},
	error_wrapper: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
		flex: 1,
		marginTop: 4,
		width: '90%'
	},
	errorMessage: {
		color: 'red'
	},
});
