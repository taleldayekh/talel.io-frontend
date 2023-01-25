// TODO: Add correct type
export function isValidImageType(imageFile: any) {
    const gifMagicNumberHeader = []
    const pngMagicNumberHeader = []
    const jpegMagicNumberHeader = []

    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            console.log(fileReader.result)
            // Return Promise<boolean>
        }

        // Reads the first 10 bytes
        fileReader.readAsArrayBuffer(imageFile.slice(0, 10))
    })
}
