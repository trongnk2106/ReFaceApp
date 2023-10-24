import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function MyImage({ imagePath }) {
    return (
        <Image
            style={{ height: '100%', borderColor: '#5AA8F8', aspectRatio: 0.9, flexGrow: 1, borderWidth: 4, borderRadius: 20, borderColor: '#5AA8F8', }}
            source={imagePath}
        />
    )
}