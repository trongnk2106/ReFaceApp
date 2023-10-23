import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyPressable from '../components/MyPressable'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Checkbox({
    isChecked,
    setChecked,
    label,
}) {
    return (
        <View
            style={{ borderRadius: 4, overflow: 'hidden' }}
        >
            <MyPressable
                style={styles.checkBoxBtn}
                touchOpacity={0.6}
                onPress={() => {
                    setChecked(!isChecked)
                }}
            >
                <Icon
                    name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                    size={25}
                    color={isChecked ? '#54D3C2' : 'lightgrey'}
                />
                <Text style={styles.checkTitle}>{label}</Text>
            </MyPressable>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBoxBtn: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8,
    },
    checkTitle: {
        color: 'black',
        marginStart: 4,
        fontFamily: 'WorkSans-Regular',
    },
})