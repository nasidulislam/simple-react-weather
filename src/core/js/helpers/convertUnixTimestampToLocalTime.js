// converts  a unix timestamp to hours and minutes in 12 hour format
// 20:30:30 --> 8:30 PM
export default function convertUnixTimestampToLocalTime(unixTimeStamp) {
	const date = new Date(unixTimeStamp * 1000);
	let hours = date.getHours();
	const minutes = date.getMinutes();
	let desc = "";

	if(hours > 12) {
		hours = hours - 12;
		desc = "PM";
	} else {
		desc = "AM"
	}

	return hours + ":" + minutes + " " + desc;
}