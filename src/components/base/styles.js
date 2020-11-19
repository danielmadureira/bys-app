import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
    touchable: {
        width: 300,
        height: 45,
        marginTop: 29,

        backgroundColor: props.background || '#AFD47B',
        borderColor: props.background || '#AFD47B',
        borderWidth: 1,
        borderRadius: props.radius || 4,

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: props.color || '#414141',
    }
});