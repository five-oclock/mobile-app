import { Text, View, SectionList } from 'react-native'
import styles from "./Styles/appStyleSheet"

const CurrentInv = () => {
    return (
        <View style={styles.listContainer}>
            <Text style={{ color: "black", fontSize: 25, left: 10, paddingBottom: 10 }}>Find Base/Ingredient</Text>
            <SectionList
                sections={[
                    { title: 'A', data: ['Aperol'] },
                    { title: 'C', data: ['Cognac'] },
                    { title: 'G', data: ["Galliano", "Gin"] },
                    { title: 'K', data: ["Kaluha"] },
                    { title: 'P', data: ["Peach schnapps"] },
                    { title: 'T', data: ["Tequila", "Triple Sec"] },
                    { title: 'V', data: ["Vermouth", "Vodka"] },
                    { title: 'W', data: ['Whiskey', "White Rum"] },

                ]}
                renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );
}

export default CurrentInv;