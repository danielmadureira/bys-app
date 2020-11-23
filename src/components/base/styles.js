import { StyleSheet } from "react-native";

let width = '100%';

export const styles = (props) => StyleSheet.create({
    touchable: {
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
    },
    size: {
        width: width,
    }
});