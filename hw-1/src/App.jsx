import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

const App = () => {
	return (
		<div className='container'>
			<Header />
			<Courses />
		</div>
	);
};

export default App;
