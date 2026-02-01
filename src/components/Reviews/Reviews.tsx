"use client";
import React, { useEffect, useState } from 'react';
import styles from './r.module.css';
import { getReviewsCategory, getReviewsNotes } from '@/lib/api';
import classNames from 'classnames';
import Image from 'next/image';
import { Modal } from '@/src/components/_utils/Modal';
 
type ReviewProps = {
  title: string;
  content: string;
  excerpt?: string;
  featuredImage?: {
    node?: {
      sourceUrl: string;
      uri: string;
    };
  };
  reviews?: {
    subheading: string;
  }
};

type CategoryNode = {
  description: string;
  uri: string;
  slug: string;
}

// randomize items in reviews array
const shuffleItems = (array: any[]) => {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const LoadingReview = () => {
  return (
    <div className={styles.review}>
      <div className={styles['skeleton-avatar']}></div>
      <div className={styles['skeleton-story']}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

const Reviews: React.FC = () => {
  const [category, setCategory] = useState<CategoryNode[]>([]);
  const [reviews, setReviews] = useState<ReviewProps[]>([]);
  const [mixReviews, setMixReviews] = useState<ReviewProps[]>([]);
  const [refresh, setRefresh] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const categoryData = await getReviewsCategory();
      const category = categoryData?.categories?.nodes ?? [];
      const reviewsData = await getReviewsNotes();
      const reviews = reviewsData?.posts?.nodes ?? [];
      const mixReviews = shuffleItems(reviews).slice(0, 2);

      setCategory(category);
      setReviews(reviews);
      setMixReviews(mixReviews);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setRefresh(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = async () => {
    setRefresh(true);
    const reviewsData = await getReviewsNotes();
    const reviews = reviewsData?.posts?.nodes ?? [];
    const reloadReviews = shuffleItems(reviews).slice(0, 2);

    setReviews(reviews);
    setMixReviews(reloadReviews);
    setRefresh(false);
  };

  const showModal = (index: number) => {
    setSelectedReviewIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className={classNames(styles.reviews, { [styles.loading]: refresh })}>
      <h2 className={styles['reviews-heading']}>{category && category.length > 0 ? category[0].description : 'Ето какво споделиха за нас:'}</h2>
      <div className={styles['reviews-wrap']}>
        {(mixReviews.length === 0 || refresh) ? (
          Array.from({ length: 2 }).map((_, index) => (
            <LoadingReview key={index} />
          ))
        ) : (
          mixReviews.map((review: ReviewProps, index: number) => {
            
            return (
              <div className={classNames(styles.review, styles[`review-${index}`])} key={index}>
                <div className={styles.avatar}>
                  <div className={styles.alias}>{review.title}</div>
                  {review.featuredImage?.node?.sourceUrl && (
                    <Image
                      src={review.featuredImage.node.sourceUrl}
                      alt={review.title || ''}
                      className={styles['avatar-image']}
                      priority
                      width={0}
                      height={0}
                      sizes="100vw"
                      onClick={() => showModal(index)}
                    />
                  )}
                </div>
                <div className={styles.story}
                  dangerouslySetInnerHTML={{
                    __html: review.content,
                  }}
                />
                <Modal open={isModalOpen && selectedReviewIndex === index} onClose={() => setIsModalOpen(false)}>
                  <div className={styles.modal}>
                    <div className={styles['modal-story']}
                      dangerouslySetInnerHTML={{
                        __html: review.content,
                      }}
                    />
                    {review.featuredImage?.node?.sourceUrl && (
                      <Image
                        src={review.featuredImage.node.sourceUrl}
                        alt={review.title || ''}
                        className={styles['avatar-image']}
                        priority
                        width={0}
                        height={0}
                        sizes="100vw"
                      />
                    )}
                    <div className={styles.name}>{review.title}</div>
                    {review.reviews?.subheading && (
                      <div className={styles.subheading}>{review.reviews.subheading}</div>
                    )}
                  </div>
                </Modal>
              </div>
            );
          })
        )}
        <button className={styles.refresh} onClick={handleRefresh}></button>
      </div>
    </section>
  );

};

export default Reviews;
