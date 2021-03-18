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
		marginTop: 40,
	},
	input: {
		width: '85%',
		marginTop: 45,
		height: 40,
		borderBottomWidth: 1,
	},
	centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
		width: '90%',
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
		marginTop: 20,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
		backgroundColor: '#EAEBCF',
		display: "flex",
		alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left"
  },
  modalTitle: {
		fontSize: 24,
    textAlign: "left",
		fontWeight: "400"
  },
	modalTable: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	modalTableTexts: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	modalTableTitle: {
		fontSize: 18,
		fontWeight: "400"
	},
	modalTableText: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 10
	},
	modalTableRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	},
	modalTableBorder: {
		width: '50%',
		borderWidth: 0.5,
		borderColor: '#C4C4C4'
	}
});