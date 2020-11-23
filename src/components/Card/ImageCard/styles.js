import { StyleSheet } from "react-native";

let width = '100%';

export const styles = (props) => StyleSheet.create({
	container: {
        width: (props.smallSize) ? (280) : (width),
        height: (props.smallSize) ? (185) : (430),
        marginTop: 38,
        marginLeft: (props.smallSize) ? (15) : (0),

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
        width: (props.smallSize) ? (240) : (300),
        height: (props.smallSize) ? (83) : (118),
        backgroundColor: '#EAEBCF',

        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 19,
        paddingTop: 10,
        marginBottom: 15,
        borderRadius: 15,
    },
    title: {
        fontSize: (props.smallSize) ? (16) : (20),
        fontWeight: "400"
    },
    subtitle: {
        fontSize: 14,
    }
});