import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
        width: 320,
        height: 430,
        marginTop: 38,

        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    image: {
        borderRadius: 15,
    },
    wrapper_text: {
        width: 300,
        height: 118,

        backgroundColor: '#EAEBCF',

        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 19,
        paddingTop: 10,
        marginBottom: 15,
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 14,
    }
});