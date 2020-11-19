import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
    wrapper_text: {
        width: 330,
        height: 150,

        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 19,
        paddingTop: 10,
        marginBottom: 15,

        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "400"
    },
    subtitle: {
        fontSize: 14,
        paddingTop: 8
    },
    wrapper_date: {
        position: "absolute",
        bottom: 0,
        right: 10,
    },
    date: {
        fontSize: 10,
    }
});