//bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(weight, heightCM) {
		let heightInMeters = heightCM / 100;
    let bmi = weight / heightInMeters**2;
		return bmi.toFixed(2);
}

console.log(calculateBMI(80, 180)); // "24.69"
