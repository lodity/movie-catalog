import React from 'react';
import './assets/styles/App.css';
import './assets/styles/fonts.css';
import './assets/styles/nullstyle.css';
import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="App">
				<AppRouter />
			</div>
		</BrowserRouter>
	);
}

export default App;
