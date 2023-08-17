import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CategoryButton from './CategoryButton'
import { useNavigation } from '@react-navigation/native';

export default function RenderList({
    title = "Thai",
    data,
    selectedCategory,
    setSelectedCategory
}) {
    const navigation = useNavigation() 

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
                    onPress={() => {
                        setSelectedCategory(item)
                        if (item === 'Face Swap') navigation.navigate('FaceSwap')
                        else if (item === 'Face Generator') navigation.navigate('Generate')
                        else navigation.navigate('FaceEnhance')

                    }}
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