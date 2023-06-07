import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => {
	return (
		<Link to="home" className={styles.logo}>
			Fraters' Drive
		</Link>
	);
};

export default Logo;
