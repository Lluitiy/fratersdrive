import { useMediaQuery } from "react-responsive";
import { navbar } from "../../data/navbar";

import Logo from "../Logo/Logo";
import Navlink from "./Navlink";

const NavBar = ({ styles, isOpen }) => {
	const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 768px)" });
	return (
		<>
			<nav
				className={
					isTabletOrDesktop
						? styles.nav
						: isOpen
						? `${styles.open}`
						: `${styles.closed}`
				}
			>
				{isTabletOrDesktop && <Logo />}
				<ul className={styles.list}>
					{navbar.map((link) => (
						<Navlink key={link.id} link={link} />
					))}
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
