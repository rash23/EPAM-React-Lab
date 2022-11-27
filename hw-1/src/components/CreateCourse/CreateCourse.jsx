import {
	StyledCreateCourse,
	StyledCreateCourseTitleWrapper,
	StyledCreateCourseTitle,
	StyledCreateCourseDescription,
	StyledCreateCourseWrapper,
	StyledCreateCourseContainer,
	StyledCreateCourseAddAuthor,
	StyledCreateCourseAuthorName,
	StyledCreateCourseButtonWrapper,
	StyledCreateCourseDuration,
	StyledCreateCourseAuthorsList,
	StyledCreateCourseAuthorItem,
} from '../../styles/components/CreateCourse/create-course';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Textarea from '../../common/Textarea/Textarea';
import pipeDurations from '../../helpers/pipeDuration';
import { useState } from 'react';

const CreateCourse = (props) => {
	const [authors, setAuthors] = useState([]);
	const [authorsData, setAuthorsData] = useState([]);
	const [mockedAuthorsList, setMockedAuthorsList] = useState(props.authorsList);
	const [authorName, setAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	const createAuthor = (event) => {
		event.stopPropagation();
		const authorObject = {
			id: Date.now().toString(),
			name: authorName,
		};
		setMockedAuthorsList([...mockedAuthorsList, authorObject]);
		setAuthorName('');
	};

	const addAuthor = (author) => {
		setAuthors([...authors, author.id]);
		setAuthorsData([...authorsData, author]);

		const filtered = mockedAuthorsList.filter((item) => item.id !== author.id);

		setMockedAuthorsList(filtered);
	};

	const removeAuthor = (author) => {
		const filtered = authors.filter((item) => item.id !== author.id);
		setAuthors(filtered);

		const filteredData = authorsData.filter((item) => item.id !== author.id);
		setAuthorsData(filteredData);

		const authorsList = authorsData.filter((item) => item.id === author.id);
		setMockedAuthorsList([...mockedAuthorsList, ...authorsList]);
	};

	const createCourse = (event) => {
		event.preventDefault();

		const newCourse = {
			id: Date.now().toString(),
			title: title,
			description: description,
			creationDate: new Date().toDateString(),
			duration: +duration,
			authors: [...authors],
		};

		if (
			!newCourse.title ||
			!newCourse.description ||
			!newCourse.duration ||
			!authors.length
		) {
			alert('Please fill in all fields');
			return;
		}

		props.setCourses([...props.mockedCoursesList, newCourse]);
		props.setNewCourse(false);
	};

	return (
		<StyledCreateCourse onSubmit={createCourse}>
			<StyledCreateCourseTitle>Title</StyledCreateCourseTitle>
			<StyledCreateCourseTitleWrapper>
				<div>
					<Input
						placeholder='Enter title...'
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
				</div>
				<div>
					<Button text='Create course' type='submit' />
				</div>
			</StyledCreateCourseTitleWrapper>

			<StyledCreateCourseWrapper>
				<StyledCreateCourseDescription>
					Description
				</StyledCreateCourseDescription>
				<div>
					<Textarea
						placeholder='Enter description'
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
				</div>
			</StyledCreateCourseWrapper>

			<StyledCreateCourseContainer>
				<div>
					<StyledCreateCourseAddAuthor>Add Author</StyledCreateCourseAddAuthor>
					<div>
						<StyledCreateCourseAuthorName>
							Author name
						</StyledCreateCourseAuthorName>
						<StyledCreateCourseWrapper>
							<Input
								placeholder='Enter author name...'
								value={authorName}
								onChange={(event) => setAuthorName(event.target.value)}
							/>
						</StyledCreateCourseWrapper>
						<StyledCreateCourseButtonWrapper>
							<Button text='Create author' onClick={createAuthor} />
						</StyledCreateCourseButtonWrapper>
					</div>

					<div>
						<StyledCreateCourseDuration>Duration</StyledCreateCourseDuration>
						<StyledCreateCourseWrapper>Duration</StyledCreateCourseWrapper>
						<StyledCreateCourseWrapper>
							<Input
								placeholder='Enter duration in minutes...'
								type='number'
								value={duration}
								onChange={(event) => setDuration(event.target.value)}
							/>
						</StyledCreateCourseWrapper>
						<StyledCreateCourseWrapper>
							Duration <span>{pipeDurations(duration)}</span>
						</StyledCreateCourseWrapper>
					</div>
				</div>
				<div>
					<StyledCreateCourseAddAuthor>Authors</StyledCreateCourseAddAuthor>
					{mockedAuthorsList.length ? (
						<StyledCreateCourseAuthorsList>
							{mockedAuthorsList.map((author) => {
								return (
									<StyledCreateCourseAuthorItem key={author.id}>
										<div>{author.name}</div>
										<Button
											text='Add author'
											onClick={() => addAuthor(author)}
										/>
									</StyledCreateCourseAuthorItem>
								);
							})}
						</StyledCreateCourseAuthorsList>
					) : (
						<div>Authors is empty</div>
					)}

					<StyledCreateCourseDuration>
						Course authors
					</StyledCreateCourseDuration>

					{authorsData.length ? (
						<StyledCreateCourseAuthorsList>
							{authorsData.map((author) => {
								return (
									<StyledCreateCourseAuthorItem key={author.id}>
										<div>{author.name}</div>
										<Button
											text='Delete author'
											onClick={() => removeAuthor(author)}
										/>
									</StyledCreateCourseAuthorItem>
								);
							})}
						</StyledCreateCourseAuthorsList>
					) : (
						<div>Authors is empty</div>
					)}
				</div>
			</StyledCreateCourseContainer>
		</StyledCreateCourse>
	);
};

export default CreateCourse;
