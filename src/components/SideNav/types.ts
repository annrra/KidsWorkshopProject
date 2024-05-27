export type MenuProps = {
  title: string;
  label: string;
  description: string;
  databaseId: number;
  url: string;
  uri: string;
};

type FeaturedImage = {
  node?: {
    sourceUrl?: string;
    srcSet?: string;
    uri?: string;
  };
};

type EventDetails = {
  eventStatus: boolean;
  eventWhen: string;
  eventWhere: string;
};

export type EventProps = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  uri: string;
  featuredImage: FeaturedImage;
  events: EventDetails;
}

type ImageNode = {
  sourceUrl?: string;
  uri?: string;
};

type PartyCardImage = {
  node?: ImageNode;
};

type PartyDetails = {
  partycardIcon?: string | null;
  partycardImage?: PartyCardImage;
};

export type PostProps = {
  title: string;
  excerpt: string;
  uri: string;
  featuredImage: FeaturedImage;
  party: PartyDetails;
};