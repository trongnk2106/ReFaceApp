import { StyleSheet, Text, View, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors } from '../assets'
import MyPressable from '../components/MyPressable'



export default function Popup(
    {
        isVisible,
        onPress
    }
) {
    return (
        <Modal isVisible={isVisible} animationType='slide'
            contentContainerStyle={{ backgroundColor: 'red' }}
            >
            <View style={{ backgroundColor: colors.backround, width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Create results for you...
                </Text>
                <ActivityIndicator size="large" color="#F2BCEA" style={{ marginTop: 10 }} />
                <MyPressable style={{
                    backgroundColor: '#3B3945', padding: 10, paddingLeft: 20, paddingRight: 20,
                    marginTop: 10, borderRadius: 15
                }}
                    touchOpacity={0.6}
                    onPress={onPress}>
                    <Text style={{ color: 'white' }}>Cancel</Text>
                </MyPressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({})