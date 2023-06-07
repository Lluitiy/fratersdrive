import autoImg from "../../assets/Picsart_23-06-07_00-14-09-249.jpg";

import styles from "./Text.module.scss";

const Text = () => {
	return (
		<div className="container">
			<div className={styles.wrapper}>
				<h1 className={styles.heading}>Import of Japanese cars</h1>

				<div className={styles.text}>
					Welcome to our company! We specialize in importing Japanese
					cars and selling them directly in United Kingdom.Our
					services include assistance with comprehensive car
					purchasing in Japan,ensuring a seamless experience from
					selection to home delivery . With our expert support, you
					can find your dream car and have it conveniently delivered
					right to your doorstep in the UK
				</div>
				<img
					src={autoImg}
					alt="auto image"
					width={480}
					height={240}
					className={styles.bgImg}
				/>
			</div>
		</div>
	);
};

export default Text;
