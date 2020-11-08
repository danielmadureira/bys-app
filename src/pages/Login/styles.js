import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10
    },
    container_image: {
        width: 340,
        height: 171,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginTop: 68,
        marginBottom: 29,

        backgroundColor: '#EAEBCF',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 10,
    },
    image: {
        width: 330,
    },
    container_flex: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        marginLeft: 20,
        textAlign: "left",
        fontSize: 36,
    },
    input: {
        width: 300,
        marginTop: 41,
        borderBottomWidth: 1,
    },
    textHelper: {
        marginTop: 5,
        marginLeft: 21,
    }
});