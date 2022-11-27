const dateGenerator = (date) => {
	const creationDate = new Date(date);

	const year = creationDate.getFullYear();
	let month = creationDate.getMonth() + 1;
	let day = creationDate.getDate();

	if (month < 10) {
		month = '0' + month;
	}
	if (day < 10) {
		day = '0' + day;
	}
	return `${day}.${month}.${year}`;
};

export default dateGenerator;
