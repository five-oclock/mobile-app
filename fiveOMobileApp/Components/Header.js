
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from "./Styles/appStyleSheet"

// create a component
export class HeaderTitle extends Component {
    render() {
        return (
            <View style={styles.headerLayout}>
                <Text style={styles.titleFont}>{this.props.title}</Text>
            </View>
        );
    }
}

//make this component available to the app
export default HeaderTitle;