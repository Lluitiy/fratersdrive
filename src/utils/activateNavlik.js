export const activateNavlink = (isActive, styles) => {
	return isActive ? `${styles.active}` : `${styles.navlink}`;
};
