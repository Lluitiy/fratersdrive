import { NavLink } from "react-router-dom";
import { activateNavlink } from "../../utils/activateNavlik";

import styles from "./NavBar.module.scss";

const Navlink = ({ link: { route, name } }) => {
	return (
		<li className={styles.item}>
			<NavLink
				to={route}
				className={({ isActive }) => activateNavlink(isActive, styles)}
			>
				<p>{name}</p>
			</NavLink>
		</li>
	);
};

export default Navlink;
