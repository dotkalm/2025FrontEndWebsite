export const LANDING_PAGE_QUERY = `
    *[_type == 'landingPage'][0]{
    carousel[]->{
        _id,
        title,
        "assetUrls": assets[]-> {
        _id,
        _type,
        "url": select(
            _type == "artworkImage" => image.asset->url,
            _type == "videoAsset" => video.asset->url,
            _type == "audioAsset" => audio.asset->url
        )
        },
        "mainImageUrl": mainImage.asset->url,
        mainImage{
        alt,
        caption
        }
    }
}`