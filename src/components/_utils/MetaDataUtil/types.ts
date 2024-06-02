type MetaImage = {
  node?: {
    sourceUrl: string;
    srcSet: string;
    uri: string;
  };
}

type MetaData = {
  metaTitle: string;
  metaDescription: string;
  metaOpengraphimage?: MetaImage;
}

type MetaPost = {
  title: string;
  meta: MetaData;
}

export type MetaResponse = {
  post: MetaPost;
}

type OpenGraphImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
}

type OpenGraphMetadata = {
  title: string;
  description: string;
  images?: OpenGraphImage[];
}

export type PageMetadata = {
  title: string;
  description: string;
  openGraph: OpenGraphMetadata;
}