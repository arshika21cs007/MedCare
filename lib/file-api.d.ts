declare module 'file-api' {
    export class File {
        constructor(properties: {
            //A Buffer object, which is typically used to store raw binary data.
            buffer: Buffer,
            name: string,
            type: string,
        });
    }
}
