import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";

import styles from "./App.module.scss";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/home" index element={<HomePage />} />
				<Route path="/cars" element={<Navigate to="/home" />} />
				<Route path="/shipment" element={<Navigate to="/home" />} />
				<Route path="/support" element={<Navigate to="/home" />} />
				<Route path="/about" element={<Navigate to="/home" />} />
			</Route>
			<Route path="*" element={<Navigate to="/home" />} />
		</Routes>
	);
}

export default App;
