import styles from "./page.module.css";
import Image from 'next/image';
import { metadata } from '@/app/layout';

export default function Loading() {
	const button = '/button.png';
	const metaTitle = metadata.title || 'Sharenoto Party';

	return (
		<div className={styles.reactive}>
			<div className={styles['loading-button']}>
				<Image
					src={button}
					alt={String(metaTitle)}
					className={`${styles.button}`}
					priority
					width={0}
					height={0}
					sizes="100vw"
				/>
			</div>
		</div>
	)
}