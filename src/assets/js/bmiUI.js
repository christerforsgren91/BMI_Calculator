const calculateBMI = () => {
    let weightInput = document.getElementById('weight')
    let heightInput = document.getElementById('height')
    let results = calculateMetricBMI(weightInput.value, heighInput.value)
    displayResultsElement.innerHTML = `<h1> Your BMI value is: ${results}</h1>`
}