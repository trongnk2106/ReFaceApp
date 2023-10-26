import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RNFS from 'react-native-fs';

/**
 * Saves an image to the device's downloads directory.
 *
 * @param {string} dataImage - The base64 encoded image data.
 * @param {string} filename - The name of the file to save the image as.
 * @return {Promise<void>} A promise that resolves when the image is saved successfully.
 */
export default async function saveImage(dataImage, filename) {
    const downloadsPath = `${RNFS.ExternalDirectoryPath}/Download`;
    const isDownloadsDirExists = await RNFS.exists(downloadsPath);
    if (!isDownloadsDirExists) {
        await RNFS.mkdir(downloadsPath);
    }
    const path = downloadsPath + `/${filename}.jpg`;
    try {
        const data = dataImage.replace(/^data:image\/\w+;base64,/, '');
        await RNFS.writeFile(path, data, 'base64');
        console.log(`Hình ảnh đã được lưu tại: ${path}`);
    } catch (error) {
        console.error('Lỗi khi lưu hình ảnh:', error);
    }
}

const styles = StyleSheet.create({})