const form = document.querySelector('form')
// this below use case line no.3 will give you empty not recommended
// const height = parseInt(document.querySelector('#height).value)

form.addEventListener('submit', function(e){
    e.preventDefault() // prevent the page from getting refreshed on submit

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')
    const wguide = document.querySelector('#weight-guide')

    if (height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }else if (weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<h2>Your BMI is ${bmi}</h2>`
        if (bmi <= 18.49) {
            wguide.innerHTML = 'You are underweight'
    } else if (bmi >= 18.50 && bmi <= 24.99){
        wguide.innerHTML = "You're at healthy weight"
    } else if (bmi >= 24.99){
        wguide.innerHTML = 'You have overweight'
    }
}
})