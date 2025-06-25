import { useState, useEffect, useCallback } from "react";
import styles from './styles/ImageSlide.module.css'

function ImageSlide() {
	const [images, setImages] = useState([]);
	const [idx, setIdx] = useState(0);
	const [loading, setLoading] = useState(false);

	async function fetchImage() {
		const url = 'https://picsum.photos/v2/list?page=1&limit=10';
		setLoading(true);
		try {
			const res = await fetch(url);
			const json = await res.json();
			const list = json.map((p) => p.download_url);
			setImages(list);
		} catch (error) {
			console.error('Error fetching images:', error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchImage();
	}, []);

	const next = useCallback(() => {
		setIdx(prevIdx => {
			if (images.length === 0) return 0;
			if (prevIdx === images.length - 1) {
				return 0;
			} else {
				return prevIdx + 1;
			}
		});
	}, [images.length]);

	const prev = useCallback(() => {
		setIdx(prevIdx => {
			if (images.length === 0) return 0;
			if (prevIdx === 0) {
				return images.length - 1;
			} else {
				return prevIdx - 1;
			}
		});
	}, [images.length]);

	useEffect(() => {
		if (images.length === 0) return;

		const tid = setInterval(() => {
			next();
		}, 3000);

		return () => {
			clearInterval(tid);
		};
	}, [next, images.length]);

	return (
		<div className={styles.container}>
			{loading ? (
				<div className={styles.loading}>Loading...</div>
			) : (
				<div className={styles.carousel}>
					<button className={`${styles.button} ${styles.prevButton}`} onClick={prev}>
						&#8249;
					</button>
					<img src={images[idx]} alt={`Slide ${idx}`} className={styles.image} />
					<button className={`${styles.button} ${styles.nextButton}`} onClick={next}>
						&#8250;
					</button>
				</div>
			)}
		</div>
	);
}

export default ImageSlide;
