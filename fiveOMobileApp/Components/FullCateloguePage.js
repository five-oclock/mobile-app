import { Component } from 'react';
import { Text, View, SectionList, TouchableOpacity } from 'react-native'
import styles from "./Styles/appStyleSheet"
import { useNavigation } from "@react-navigation/native"

export class FullCat extends Component {
    goBack(itemName) {
        const { navigation, route } = this.props;
        navigation.goBack();
        route.params.onSelect({ selected: true }, itemName);

    }


    render() {
        return (
            <View style={styles.listContainer} >
                <Text style={{ color: "black", fontSize: 25, left: 10, paddingBottom: 10 }}>Find Base/Ingredient</Text>
                <SectionList
                    sections={[
                        { title: 'A', data: ['Absinthe', 'Aperol', 'Apricot brandy'] },
                        { title: 'B', data: ['Blackberry liqueur'] },
                        { title: 'C', data: ['Cachaca', 'Calvados', 'Campari', 'Champagne', 'Cherry liqueur', 'Coconut milk', 'Coffee liqueur', 'Cognac', 'Cola', 'Cranberry Juice', 'Cream', "Cream liqueur", "Créme liqueur"] },
                        { title: 'D', data: ["DiSaronno", "DOM Bénédictine", "Drambuie", "Dry White Wine",] },
                        { title: 'E', data: ["Egg yolk"] },
                        { title: 'G', data: ["Galliano", "Gin", "Ginger Ale", "Ginger beer", "Grapefruit juice"] },
                        { title: 'H', data: ["Hot coffee"] },
                        { title: 'K', data: ["Kirsch"] },
                        { title: 'L', data: ["Lemon juice", "Lillet Blonde", "Lime juice"] },
                        { title: 'O', data: ["Olive juice", "Orange Bitters", "Orange juice"] },
                        { title: 'P', data: ["Peach puree", "Peach schnapps", "Pineapple juice", "Pisco", "Prosecco"] },
                        { title: 'R', data: ["Raspberry liqueur", "Red Port"] },
                        { title: 'S', data: ["Soda water", "Syrup"] },
                        { title: 'T', data: ["Tequila", "Tomato juice", "Triple Sec"] },
                        { title: 'V', data: ["Vermouth", "Vodka"] },
                        { title: 'W', data: ['Whiskey', "White Rum"] },

                    ]}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.goBack(item)}>
                            <Text style={styles.listItem}>{item}</Text>
                        </TouchableOpacity>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View >
        );
    }
}
