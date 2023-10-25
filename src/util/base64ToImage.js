import { Buffer } from "buffer";

export default async function base64ToImage(base64Data) {
    const buffer = Buffer.from(base64Data, "base64");

    const blob = new Blob([buffer], { type: "image/jpeg" })

    return new File([blob], "regen.jpg", { type: "image/jpeg" })
}