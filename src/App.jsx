import Loader from "./components/Loader/Loader";
import Text from "./components/Text/Text";

import styles from "./App.module.scss";

function App() {
	return (
		<div className="section">
			<Loader />
			<Text />
		</div>
	);
}

export default App;
