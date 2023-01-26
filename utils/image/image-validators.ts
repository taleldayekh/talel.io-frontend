export const isValidImageType = (imageFile: File): Promise<boolean> => {
    const gifMagicNumberHeader = new Uint8Array([0x47, 0x49, 0x46, 0x38])
    const pngMagicNumberHeader = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
    const jpegMagicNumberHeader = new Uint8Array([0xff, 0xd8, 0xff, 0xe0])

    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            if (fileReader.result instanceof ArrayBuffer) {
                const fileHeader = new Uint8Array(fileReader.result);

                const isGif = gifMagicNumberHeader.every((header: number, index: number) => header === fileHeader[index]);
                const isPng = pngMagicNumberHeader.every((header: number, index: number) => header === fileHeader[index]);
                const isJpeg = jpegMagicNumberHeader.every((header: number, index: number) => header === fileHeader[index]);

                resolve(isGif || isPng || isJpeg);
                return;
            }

            resolve(false)
        }

        fileReader.onerror = reject;

        // Reads the first 8 bytes
        fileReader.readAsArrayBuffer(imageFile.slice(0, 8));
    })
}
