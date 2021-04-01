import { StyleSheet } from "react-native";

let width = '95%';

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginBottom: 15,
    },
    main: {
        width: width,
        height: 50,

        borderRadius: 15,
        backgroundColor: '#476044',
        zIndex: 1,
        paddingLeft: 30,
        paddingRight: 30,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    wrapper: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    profile: {
        width: 65,
        height: 65,
    },
    image: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#EAEBCF',
        backgroundColor: '#476044',
        marginTop: 6
    }
});