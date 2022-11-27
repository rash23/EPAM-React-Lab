import styled from 'styled-components';

export const StyledCreateCourse = styled.form`
	display: flex;
	flex-direction: column;
	border: 2px solid black;
	padding: 20px;
`;

export const StyledCreateCourseTitleWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	align-items: center;
`;

export const StyledCreateCourseTitle = styled.div`
	font-weight: bold;
	margin-bottom: 10px;
`;

export const StyledCreateCourseDescription = styled.div`
	font-weight: bold;
	margin-bottom: 10px;
`;

export const StyledCreateCourseWrapper = styled.div`
	margin-bottom: 10px;
`;

export const StyledCreateCourseContainer = styled.div`
	border: 2px solid #6a8728;
	padding: 10px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;
`;

export const StyledCreateCourseAddAuthor = styled.div`
	text-align: center;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const StyledCreateCourseAuthorName = styled.div`
	margin-bottom: 10px;
`;

export const StyledCreateCourseButtonWrapper = styled.div`
	text-align: center;
	margin-top: 10px;
	margin-bottom: 20px;
`;

export const StyledCreateCourseDuration = styled.div`
	text-align: center;
	font-weight: bold;
	margin-bottom: 10px;
	margin-top: 10px;
`;

export const StyledCreateCourseAuthorsList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 10px;
`;

export const StyledCreateCourseAuthorItem = styled.li`
	display: flex;
	gap: 40px;
	align-items: center;
	justify-content: space-between;
`;
