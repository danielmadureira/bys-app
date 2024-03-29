import { StyleSheet } from "react-native";

let width = '80%';

export const styles = (props) => StyleSheet.create({
    container: {
        width: (props.smallSize) ? (248) : (width),
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
        width: (props.smallSize) ? (248) : (width),
        height: (props.smallSize) ? (140) : (118),
        backgroundColor: '#EAEBCF',
        textAlign: "justify",

        display: "flex",
        justifyContent: "flex-start",
        paddingLeft: 19,
        paddingTop: 10,
        marginBottom: 15,
        borderRadius: 15,

        borderColor: '#EAEBCF',
        borderWidth: 1,

        shadowColor: '#EAEBCF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 15,
        elevation: 5,
    },
    title: {
        width: '87%',
        fontSize: (props.smallSize) ? (18) : (20),
        fontWeight: "400"
    },
    subtitle: {
        fontSize: 14,
        marginTop: 8
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
    }
});