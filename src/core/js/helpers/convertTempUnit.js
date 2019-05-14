export default function convertTempUnit(temp, tempUnit) {
	if (tempUnit === "F") {
		return Math.ceil(((temp - 273.15) * 1.8) + 32)
	} else {
		return Math.ceil(temp - 273.15)
	}
}