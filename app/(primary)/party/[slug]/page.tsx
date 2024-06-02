import styles from './post.module.css';
import { getPartyBySlug } from '@/lib/api';
import { generatePageMetadata } from '@/src/components/_utils/MetaDataUtil/MetaDataUtil';
import { PartyHero } from '@/src/components/PartyHero';
import { PartyIdea } from '@/src/components/PartyIdea';
import { PartyDetails } from '@/src/components/PartyDetails';
import { notFound } from 'next/navigation';
import classNames from 'classnames';
import type { PostProps, Category } from './types';

export async function generateMetadata({ params: { slug } }: PostProps) {
  return await generatePageMetadata(slug);
}

export default async function Post({ params: {slug} }: PostProps) {
  if (!slug || typeof slug !== 'string') {
    notFound();
  }
  const post = await getPartyBySlug(slug);

  if (!post || !post.post) {
    notFound();
  }

  // Limit route to posts in "party" category
  // Temporary limit route to posts with partyContentMainTitle content
  const hasPartyCategory = post.post.categories.nodes.some(
    (category: Category) => category.name === 'party'
  );

  if (!hasPartyCategory || post.post.partycontent.partyContentMainTitle === null) {
    notFound();
  }

  const track = post.post.slug;
  const heroTitle = post.post.partycontent.partyContentMainTitle;
  const heroInfo = post.post.partycontent.partyContentMainInfo;
  const heroFigure = post.post.partycontent.partyContentPrimaryImage;
  const heroIcon = post.post.partycontent.partyContentPrimaryIcon;
  const heroActionButton = post.post.partycontent.partyContentPrimaryActionText;
  const heroActionUrl = post.post.partycontent.partyContentPrimaryActionUrl;

  const sectionTitle = post.post.partycontent.partyContentSectionSubtitle;
  const sectionInfo = post.post.partycontent.partyContentSectionInfo;
  const sectionFigure = post.post.partycontent.partyContentSectionImage;
  
  const outroTitle = post.post.partycontent.partyContentOutroSubtitle;
  const outroInfo = post.post.partycontent.partyContentOutroInfo;
  const outroFigure = post.post.partycontent.partyContentOutroImage;
  const outroIcon = post.post.partycontent.partyContentOutroIcon;

  const detailsInfo = post.post.partycontent.partyContentClosure;

  return (
    <div className={styles.container}>
      <div className={classNames(styles.content, styles[`${track}`])}>
        <PartyHero
          title={heroTitle}
          info={heroInfo}
          figure={heroFigure}
          icon={heroIcon}
          actionButton={heroActionButton}
          actionUrl={heroActionUrl}
        />
        <PartyIdea
          title={sectionTitle}
          info={sectionInfo}
          figure={sectionFigure}
          invert={true}
        />
        <PartyIdea
          title={outroTitle}
          info={outroInfo}
          figure={outroFigure}
          icon={outroIcon}
          reverse={true}
        />
        <PartyDetails
          info={detailsInfo}
        />
      </div>
    </div>
  );
}
