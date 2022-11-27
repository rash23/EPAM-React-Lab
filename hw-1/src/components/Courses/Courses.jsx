import CourseCard from './components/CourseCard/CourseCard';
import {
	StyledCourses,
	StyledCoursesList,
	StyledCoursesSearchPanel,
} from '../../styles/components/Courses/courses';

import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/Searchbar';
import { useState } from 'react';

const Courses = (props) => {
	const [coursesList, setCoursesList] = useState(props.mockedCoursesList);

	const filterCourses = (courses) => {
		setCoursesList(courses);
	};

	const handleAddCourse = () => {
		props.setNewCourse(true);
	};

	return (
		<StyledCourses>
			<StyledCoursesSearchPanel>
				<SearchBar
					placeholder='Enter course name or id'
					filterData={filterCourses}
					data={props.mockedCoursesList}
				/>
				<div>
					<Button text='Add new course' onClick={handleAddCourse} />
				</div>
			</StyledCoursesSearchPanel>
			<StyledCoursesList>
				{coursesList.length ? (
					coursesList.map((course) => (
						<CourseCard
							course={course}
							key={course.id}
							authorsList={props.mockedAuthorsList}
						/>
					))
				) : (
					<li>No result found</li>
				)}
			</StyledCoursesList>
		</StyledCourses>
	);
};

export default Courses;
