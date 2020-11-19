import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
    title: {
        fontSize: 24,
    },
    subtitle: {
        marginTop: props.top || 20,
    }
});