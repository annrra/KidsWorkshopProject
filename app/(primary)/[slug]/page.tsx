import styles from './post.module.css';
import { ContextGallery } from '@/src/components/ContextGallery';
import { generatePageMetadata } from '@/src/components/_utils/MetaDataUtil/MetaDataUtil';
import { getPostBySlug } from '@/lib/api';
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
  const post = await getPostBySlug(slug);

  if (!post || !post.post) {
    notFound();
  }

  // Temporary limit route to posts in "events" category
  const hasEventsCategory = post.post.categories.nodes.some(
    (category: Category) => category.name === 'events'
  );

  if (!hasEventsCategory) {
    notFound();
  }

  const gallery = post.post.gallery;
  const content = post.post.content;
  const track = post.post.slug;

  return (
    <div className={styles.container}>
      <ContextGallery imageData={gallery} fraction />
      <div className={classNames(styles.content, styles.post, styles[`${track}`])}>
        <h1>{post.post.title}</h1>
        <div className={styles.info}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </div>
  );
}
