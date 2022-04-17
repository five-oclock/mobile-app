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
        flex: 1,
        backgroundColor: 'gray',
    },
    //HeadingStuff
    headerLayout: {
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,

    },
    titleFont: {
        fontSize: 25,
        color: "#746D65",
    },
    // For Displaying Drink Twice Per Row
    imagePairs: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap"
    },
    //Drink Summary Page
    detailImageHeader: {
        height: 130,
        width: "auto",
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: "center",
    },

    drinkImageBox: {
        backgroundColor: "white",
        width: "90%",
        height: "100%",
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: "center",
    },

    headerFont: {
        fontSize: 25,
        color: "white",
        left: "5%"
    },

    ingredientListText: {
        left: "100%",
        fontSize: 20,
        color: "white"

    },


    //For drinkCard
    drinkImage: {
        width: 130,
        height: 130,
        borderRadius: 40,

    },
    subTextFont: {
        fontSize: 20,
        color: "white",
        fontFamily: "Cochin"
    },
    drinkCardLayout: {
        alignItems: 'center',
    },




    image: {
        flex: 1,
        height: "100%",
        width: '100%'
    },
    input: {
        left: "5%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "80%"
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    listItem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    listContainer: {
        flex: 1,
        paddingTop: 5,
    },
});


