import { IMAGE_VALIDATION } from '@/queries/imageValidation';
import { sanityFetch } from '@/utils/groqFetcher';
import { TSanityImageAsset } from '@/types';
// Removed incorrect import of 'url'

export async function validateSanityAsset(uuid: string): Promise<TSanityImageAsset | { valid: false; error?: string }> {
    const asset = await sanityFetch<TSanityImageAsset>(IMAGE_VALIDATION, { assetId: uuid });
    if (!asset) {
      return { valid: false, error: 'Asset not found in Sanity' };
    }
    // Verify the URL matches
    // TODO: Replace 'expectedUrl' with the actual URL you want to compare against
    const expectedUrl = ''; // e.g., pass as argument or define here
    if (expectedUrl && asset.url !== expectedUrl) {
      return { valid: false, error: 'URL does not match asset in Sanity' };
    }

    // Check if it's a valid image format that Sharp can process
    const validImageFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/tiff', 'image/gif'];
    if (!validImageFormats.includes(asset.mimeType)) {
      return { valid: false, error: `Unsupported image format: ${asset.mimeType}` };
    }

    return asset;
}
