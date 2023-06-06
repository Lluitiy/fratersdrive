import styles from "./Text.module.scss";

const Text = () => {
	return (
		<div className="container">
			<h1 className={styles.heading}>Dear visitors,</h1>
			<br />
			<div className={styles.text}>
				We would like to inform you that our website is currently under
				development. We are working hard to bring you an enhanced
				browsing experience with exciting features and valuable content.
				We apologize for any inconvenience caused during this phase.
				Please stay tuned for updates and progress on our development.
				We appreciate your patience and understanding. Thank you for
				your interest in our website, and we look forward to sharing the
				final product with you soon! Best regards, The Website
				Development Team
			</div>
		</div>
	);
};

export default Text;
