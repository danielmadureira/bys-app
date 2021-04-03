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
	container_header: {
		marginTop: 10,
		paddingBottom: 2,
		width: width
	},
	wrapper_menu: {
		marginTop: 36,
	},
	wrapper_button: {
		width: '85%',
		marginTop: 20,
	},
  input: {
    width: '85%',
		marginTop: 10,
		height: 40,
    borderBottomWidth: 1,
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
