const  calculateMetricBMI = (weight, height) => {
	let  result
	result = (weight / ((height / 100) * (height / 100))).toFixed(2)
	return  result
}
const getBMIClassification = (value) => {
    if (value < 18.5){
        return 'UnderWeight'
    }else if (value < 25){
        return 'Healthy'
    }else if (value < 30){
        return 'Overweight'
    }
}