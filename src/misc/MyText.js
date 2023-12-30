import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MyText = ({ title, style }) => {
    return (
        <Text style={[styles.sectionHeaderText, style]}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    sectionHeaderText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'WorkSans-SemiBold',
        letterSpacing: 0.27,
        paddingTop: 8,
        paddingLeft: 18,
        paddingRight: 16,
        marginBottom: 16,
    },
})
export default MyText