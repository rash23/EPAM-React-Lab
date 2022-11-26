const pipeDurations = (totalMinutes) => {
	let hours = Math.floor(totalMinutes / 60);
	let minutes = totalMinutes % 60;

	if (hours < 10) {
		hours = '0' + hours;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	return `${hours}:${`${minutes} hours`}`;
};

export default pipeDurations;
