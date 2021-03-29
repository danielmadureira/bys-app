import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
  wrapper: {
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    width: '100%',

    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    borderRadius: 15
  },
  wrapper_text: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '95%',
  },
  wrapper_delete: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    paddingTop: 15,
    fontSize: 20,
    fontWeight: "400"
  },
  subtitle: {
    fontSize: 14,
    paddingTop: 5,
    marginLeft: 0,
  }
});