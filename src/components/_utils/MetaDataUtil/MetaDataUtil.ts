import { getMetaBySlug } from '@/lib/api';
import type { MetaResponse, PageMetadata } from './types';

export async function generatePageMetadata(slug: string): Promise<PageMetadata> {
  const meta: MetaResponse | null = await getMetaBySlug(slug);
  
  if (!meta || !meta.post) {
    return {
      title: 'Not Found',
      description: 'Page not found',
			openGraph: {
        title: 'Not Found',
        description: 'Page not found',
      },
    };
  }

  const metaPost = meta.post;
  const metaData = metaPost.meta;

  const metadata: PageMetadata = {
    title: metaData.metaTitle,
    description: metaData.metaDescription,
    openGraph: {
      title: metaData.metaTitle,
      description: metaData.metaDescription,
    },
  };

  const openGraphImage = metaData.metaOpengraphimage?.node?.sourceUrl;

  if (openGraphImage) {
    metadata.openGraph.images = [
      {
        url: openGraphImage,
        width: 1200,
        height: 630,
        alt: metaPost.title,
      },
    ];
  }

  return metadata;
}
