import { StyleSheet } from "react-native"
// Orange: BD8334
// Blue: 1D8EB6
// Light Gray: B1AEA9
// Dark Gray: 746D65
// Gold: DCBD7C



export default StyleSheet.create({

    baseBackground: {
        flex: 1,
        backgroundColor: "#DCBD7C",
    },

    // Basic Layouts
    safeView: {
        flex: 1,
    },
    tempBottomBar: {
        flex: .05,
        backgroundColor: '#DCBD7C',
    },
    bodyFile: {
        flex: .95,
        backgroundColor: 'gray',
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    //HeadingStuff
    headerLayout: {
        paddingLeft: 5,
        paddingTop: 15,
        backgroundColor: "#B1AEA9"

    },
    titleFont: {
        fontSize: 25,
        color: "#746D65",
    },
    // For Displaying Drink Twice Per Row
    imagePairs: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    //For drinkCard
    drinkImage: {
        width: 130,
        height: 130,
        borderRadius: 40,

    },
    subTextFont: {
        fontSize: 20,
        color: "red",
    },
    drinkCardLayout: {
        alignItems: 'center',
    },
});


