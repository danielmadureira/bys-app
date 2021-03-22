import { StyleSheet } from "react-native";

export const colors = {
  warning: '#EB8F00'
}
const bgColors = {
  warning: '#FEF6E9'
}

export const styles = (props) => StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		alignItems: "center",
    backgroundColor: bgColors[props.type],
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors[props.type],
    height: 35,
    marginBottom: 20
	},
	wrapper_text: {
    color: colors[props.type],
    margin: 10
	},
	wrapper_icon: {
    marginLeft: 10
	}
});