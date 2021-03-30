import { StyleSheet } from "react-native";

export const colors = {
  warning: '#EB8F00',
  danger: '#BD2222',
  success: '#476044'
}
const bgColors = {
  warning: '#FEF6E9',
  danger: '#FFE8E7',
  success: '#C5DBA6'
}

export const styles = (props) => StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColors[props.type],
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors[props.type],
    height: props.large ? 35 : 25,
    width: '100%',
    marginBottom: 20
  },
  wrapper_text: {
    color: colors[props.type],
  }
});