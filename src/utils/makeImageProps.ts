import imageUrlBuilder from '@sanity/image-url'
import { type TAsset, TMakeResponsiveContain } from '@/types'

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
});

function urlFor(source: TAsset) {
  return builder.image(source)
};

export const makeResponsiveContain: TMakeResponsiveContain = (
  imageAsset,
  blurred = false,
  maxWidths = [400, 800, 1200, 2400],
) => {
  const urls: Record<string, string> = {}
  
  maxWidths.forEach((width: number): void => {
    const baseBuilder = urlFor(imageAsset)
      .width(width)
      .quality(blurred ? 20 : 75)
      .fit('max');
    
    const key = `w${width}`
    urls[key] = blurred ? baseBuilder.blur(50).url() : baseBuilder.url()
  })
  
  return urls
};