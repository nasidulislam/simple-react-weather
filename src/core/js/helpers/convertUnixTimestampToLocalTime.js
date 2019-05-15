// converts  a unix timestamp to hours and minutes in 24 hour format
export default function convertUnixTimestampToLocalTime(unixTimeStamp) {
	const date = new Date(unixTimeStamp * 1000);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();

	return hours + ":" + minutes + ":" + seconds;
}