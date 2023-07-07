import './assets/styles/App.css';
import './assets/styles/fonts.css';
import './assets/styles/nullstyle.css';
import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { useActions } from './hooks/useActions';
import { useEffect } from 'react';

function App() {
	const { checkAuth } = useActions();
	useEffect(() => {
		if (localStorage.getItem('token')) {
			console.log('checkAuth');
			checkAuth();
		}
	});

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
