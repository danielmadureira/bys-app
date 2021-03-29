import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: props.height ? 500 : 100
  }
});