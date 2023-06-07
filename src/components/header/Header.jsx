import { useMediaQuery } from "react-responsive";

import Burger from "../Burger/Burger";
import NavBar from "../NavBar/NavBar";

import styles from "./Header.module.scss";

const Header = () => {
	const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<header>
			{isTabletOrDesktop ? (
				<div className="container">
					<NavBar styles={styles} />
				</div>
			) : (
				<Burger />
			)}
		</header>
	);
};

export default Header;
