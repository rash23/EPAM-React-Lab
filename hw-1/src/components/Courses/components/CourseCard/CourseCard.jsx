import Button from '../../../../common/Button/Button';
import {
	StyledCourseCard,
	StyledCourseCardAbout,
	StyledCourseCardInfo,
	StyledCourseCardWrapper,
} from '../../../../styles/components/Courses/courses';
import dateGenerator from '../../../../helpers/dateGenerator';
import pipeDurations from '../../../../helpers/pipeDuration';

const CourseCard = (props) => {
	const { title, description, authors, creationDate, duration } = props.course;

	const authorsData = props.authorsList.filter((author) =>
		authors.includes(author.id)
	);

	return (
		<StyledCourseCard>
			<StyledCourseCardAbout>
				<h2>{title}</h2>
				<div>{description}</div>
			</StyledCourseCardAbout>
			<StyledCourseCardInfo>
				<StyledCourseCardWrapper>
					<div>
						<strong>Authors: </strong>
						{authorsData.map((author) => (
							<span key={author.id}>{author.name}, </span>
						))}
					</div>
				</StyledCourseCardWrapper>
				<StyledCourseCardWrapper>
					<strong>Duration:</strong>
					<span>{pipeDurations(duration)}</span>
				</StyledCourseCardWrapper>
				<StyledCourseCardWrapper>
					<strong>Created:</strong>
					<span>{dateGenerator(creationDate)}</span>
				</StyledCourseCardWrapper>
				<div>
					<Button text='Show course' />
				</div>
			</StyledCourseCardInfo>
		</StyledCourseCard>
	);
};

export default CourseCard;
