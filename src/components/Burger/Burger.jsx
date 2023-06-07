import { useState } from "react";
import { navbar } from "../../data/navbar";

import { ReactComponent as Cross } from "../../assets/cross.svg";
import { ReactComponent as Lines } from "../../assets/burger.svg";

import Navlink from "../NavBar/Navlink";

import styles from "./Burger.module.scss";
import NavBar from "../NavBar/NavBar";

const Burger = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleBurger = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="container">
			<div className={styles.burgerWrapper} onClick={toggleBurger}>
				{isOpen ? (
					<Cross className={styles.icon} width={24} height={24} />
				) : (
					<Lines className={styles.icon} width={24} height={24} />
				)}
			</div>
			<NavBar styles={styles} isOpen={isOpen} />
		</div>
	);
};

export default Burger;
