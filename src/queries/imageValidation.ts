export const IMAGE_VALIDATION = `
    *[_type == "sanity.imageAsset" && _id == $assetId][0]{
        _id,
        url,
        mimeType,
        extension
    }
`;