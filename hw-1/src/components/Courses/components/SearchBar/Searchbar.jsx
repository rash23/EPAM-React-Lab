import Input from '../../../../common/Input/Input';
import { StyledSearchBar } from '../../../../styles/components/Courses/courses';
import Button from '../../../../common/Button/Button';
import { useState, useEffect } from 'react';

const SearchBar = (props) => {
	const { placeholder, filterData, data } = props;

	const [inputValue, setInputValue] = useState('');

	const filtered = data.filter(
		(item) =>
			item.title.toLowerCase().includes(inputValue) ||
			item.id.toLowerCase().includes(inputValue)
	);

	useEffect(() => {
		if (inputValue === '') {
			filterData(data);
		}
	}, [inputValue, data, filterData]);

	const handleSearchClick = (event) => {
		event.preventDefault();

		if (inputValue !== '') {
			filterData(filtered);
		}
	};

	return (
		<StyledSearchBar onSubmit={(event) => handleSearchClick(event)}>
			<Input
				placeholder={placeholder}
				value={inputValue}
				onChange={(event) => setInputValue(event.target.value)}
			/>
			<Button text='Search' type='submit' />
		</StyledSearchBar>
	);
};

export default SearchBar;
