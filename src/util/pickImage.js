import { pick, types, isCancel } from 'react-native-document-picker'
import { AppImages } from '../assets'
import { Alert } from 'react-native'

export default async function pickImage() {
    try {
        const res = await pick({
            type: [types.images]
        })

        if (res[0].size < 1024 * 1024) {
            return {
                name: res[0].name,
                uri: res[0].uri,
                type: res[0].type
            }

        }
        else {
            Alert.alert("Warring", "image size too big(image size < 2MB)",)
        }
    } catch (err) {
        if (isCancel(err)) {
            console.log("User cancelled upload", err)
        }
        else {
            console.log(err)
        }
    }

}