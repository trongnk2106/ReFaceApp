import { pick, types, isCancel } from 'react-native-document-picker'

export default async function pickImage() {
    try {
        const res = await pick({
            type: [types.images]
        })
        return {
            name: res[0].name,
            uri: res[0].uri
        }
    } catch (err) {
        if (isCancel(err)) {
            console.log("User cancelled upload", err)
        }
        else {
            console.log(err)
        }
    }
    console.log("button pressed");
}