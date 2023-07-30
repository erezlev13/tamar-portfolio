import { Routes, Route } from 'react-router-dom';
import NavBar from './views/NavBar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import PublicationsPage from './pages/PublicationsPage';
import ContactPage from './pages/ContactPage';

const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/projects'
					element={<ProjectsPage />}
				/>
				<Route
					path='/project'
					element={<ProjectPage />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/publications'
					element={<PublicationsPage />}
				/>
				<Route
					path='/contact'
					element={<ContactPage />}
				/>
			</Routes>
		</>
	);
};

export default App;
