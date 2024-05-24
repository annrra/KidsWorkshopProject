import styles from './post.module.css';
import { ContextGallery } from '@/src/components/ContextGallery';
import { getWorkshopBySlug } from '@/lib/api';
import { notFound } from 'next/navigation';
import classNames from 'classnames';

type PostProps = {
  params: {
    slug: string;
  };
}

type Category = {
  name: string;
  slug: string;
}

export default async function Post({ params: {slug} }: PostProps) {
  if (!slug || typeof slug !== 'string') {
    notFound();
  }
  const post = await getWorkshopBySlug(slug);

  if (!post || !post.post) {
    notFound();
  }

  // Temporary limit route to posts in "blog" category
  const hasBlogCategory = post.post.categories.nodes.some(
    (category: Category) => category.name === 'blog'
  );

  if (!hasBlogCategory) {
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
