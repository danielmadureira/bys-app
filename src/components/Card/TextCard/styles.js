import { StyleSheet } from "react-native";

export const styles = (props) => StyleSheet.create({
	container: {
        width: (props.smallSize) ? (248) : (320),
        height: (props.smallSize) ? (140) : (430),
        marginTop: 38,
        marginLeft: (props.smallSize) ? (25) : (0),

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
        width: (props.smallSize) ? (248) : (300),
        height: (props.smallSize) ? (140) : (118),
        backgroundColor: '#EAEBCF',

        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 19,
        paddingTop: 10,
        marginBottom: 15,
        borderRadius: 15,
    },
    title: {
        fontSize: (props.smallSize) ? (18) : (20),
        fontWeight: "400"
    },
    subtitle: {
        fontSize: 14,
        marginTop: 8
    }
});