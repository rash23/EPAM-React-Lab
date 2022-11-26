import styled from 'styled-components';

export const StyledCourses = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid black;
	padding: 20px;
`;

export const StyledCoursesList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const StyledCoursesSearchPanel = styled.li`
	display: flex;
	gap: 10px;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 10px;
`;

export const StyledSearchBar = styled.form`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	align-items: center;
	width: 50%;
`;

export const StyledCourseCard = styled.li`
	padding: 10px;
	display: flex;
	gap: 10px;
	justify-content: space-between;
	align-items: center;
	border: 2px solid green;
`;

export const StyledCourseCardAbout = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
	width: 70%;
	h2 {
		font-weight: bold;
		font-size: 20px;
	}
`;

export const StyledCourseCardInfo = styled.div`
	display: flex;
	width: 30%;
	gap: 10px;
	flex-direction: column;
`;

export const StyledCourseCardWrapper = styled.div`
	display: flex;
	gap: 10px;
	strong {
		font-weight: bold;
	}
`;
