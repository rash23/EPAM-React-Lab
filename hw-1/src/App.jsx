import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedCoursesList, mockedAuthorsList } from './constants';

const App = () => {
	const [isNewCourse, setNewCourse] = useState(false);
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courses, setCourses] = useState(mockedCoursesList);

	return (
		<div className='container'>
			<Header />
			{isNewCourse ? (
				<CreateCourse
					authorsList={authors}
					setNewCourse={setNewCourse}
					setCourses={setCourses}
					mockedCoursesList={courses}
				/>
			) : (
				<Courses
					setNewCourse={setNewCourse}
					setAuthors={setAuthors}
					mockedAuthorsList={authors}
					mockedCoursesList={courses}
				/>
			)}
		</div>
	);
};

export default App;
