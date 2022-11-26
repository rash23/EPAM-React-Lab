import CourseCard from './components/CourseCard/CourseCard';
import {
	StyledCourses,
	StyledCoursesList,
	StyledCoursesSearchPanel,
} from '../../styles/components/Courses/courses';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/Searchbar';
import { useState } from 'react';

const Courses = () => {
	const [coursesList, setCoursesList] = useState(mockedCoursesList);

	const filterCourses = (courses) => {
		setCoursesList(courses);
	};

	return (
		<StyledCourses>
			<StyledCoursesSearchPanel>
				<SearchBar
					placeholder='Enter course name or id'
					filterData={filterCourses}
					data={mockedCoursesList}
				/>
				<div>
					<Button text='Add new course' />
				</div>
			</StyledCoursesSearchPanel>
			<StyledCoursesList>
				{coursesList.length ? (
					coursesList.map((course) => (
						<CourseCard
							course={course}
							key={course.id}
							authorsList={mockedAuthorsList}
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
