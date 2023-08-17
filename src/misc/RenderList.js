import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CategoryButton from './CategoryButton'

export default function RenderList({
    title = "Thai",
    data,
    selectedCategory,
    setSelectedCategory
}) {
    return (<View>

        <Text style={styles.sectionHeaderText}>{title}</Text>

        <FlatList
            contentContainerStyle={{ paddingLeft: 16, paddingTop: 6 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({ item }) => (
                <CategoryButton
                    text={item}
                    selectedCat={selectedCategory}
                    onPress={() => setSelectedCategory(item)}
                />
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>)
}

const styles = StyleSheet.create({
    sectionHeaderText: {
        color: 'black',
        fontSize: 22,
        fontFamily: 'WorkSans-SemiBold',
        letterSpacing: 0.27,
        paddingTop: 8,
        paddingLeft: 18,
        paddingRight: 16,
        marginBottom: 16,
      },
})