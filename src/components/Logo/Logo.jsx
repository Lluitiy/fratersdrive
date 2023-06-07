import { Link } from "react-router-dom";

import logoImg from "../../assets/logo3.png";

import styles from "./Logo.module.scss";

const Logo = () => {
	return (
		<Link to="home" className={styles.logo}>
			<img src={logoImg} alt="logo" width={150} height={100} />
		</Link>
	);
};

export default Logo;
