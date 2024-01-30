
// ! Input

let form = document.querySelector("#form")
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById('year');

//! Take date from computer

let date = new Date()
let dia = date.getDate();
let mes = 1 + date.getMonth();
let ano = date.getFullYear()

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//! Output

const yearOtp = document.getElementById('age');
const monthOtp = document.getElementById('age_month');
const dayOtp = document.getElementById('age_days');

//? Validate if fields are empty

form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateDay();
    validateMonth();
    validateYear();

    if(validateDay() && validateMonth() && validateYear()) {
        calculateYears()
    } else {
        alert('Field is required')
    }
})

//?Day Validation

function validateDay() {
    var error = document.getElementById("error-day")
    const dayColor = document.getElementById('label-day')
    let validator = true

    if(day.value == "") {
        error.innerHTML = "This field is required"
        dayColor.className = 'error'
        validator = false
    }

    return validator
}

//? Month validation

function validateMonth() {
    var error = document.getElementById('error-month')
    const monthColor = document.getElementById('label-month');
    let validatorMonth = true

    if(month.value == "") {
        error.innerHTML = 'This field is required';
        monthColor.className = 'error'
        validatorMonth = false
    }
    if(month.value > 12) {
        error.innerHTML = 'Must be a valid month'
        monthColor.className = 'error';
        validatorMonth = false
    }

    return validatorMonth
}

//? Year Validation

function validateYear() {
    var error = document.getElementById('error-year');
    var yearColor = document.getElementById('label-year');
    let validator = true;

    if(year.value == "") {
        error.innerHTML = "This field is required";
        yearColor.className = 'error';
        validator = false
    }
    return validator
}

//? Clear error MSG to clean fields

function redefinirMsg() {
    var errorDay = document.getElementById("error-day");
    var dayColor = document.getElementById('label-day');
    
    if(errorDay.innerHTML == "This field is required") {
        errorDay.innerHTML = "";
        dayColor.classList.remove('error');
    }
}

function redefinirMsgMonth() {
    var errorMonth = document.getElementById('error-month');
    var monthColor = document.getElementById('label-month');

    if(errorMonth.innerHTML == 'This field is required') {
        errorMonth.innerHTML = '';
        monthColor.classList.remove('error');
    }
}

function redefinirMsgYear() {
    var errorYear = document.getElementById('error-year');
    var yearColor = document.getElementById('label-year');

    if(errorYear.innerHTML = 'This field is required'){
        errorYear.innerHTML = "";
        yearColor.classList.remove('error');
    }
}

function calculateYears() {
    
    if(day.value > dia) {
        dia = dia + months[mes - 1];
        mes = mes - 1;
    }

    if(month.value > mes) {
        mes = mes + 12;
        console.log(mes)
        ano = ano - 1;
    }

    const d = dia - day.value;
    const m = mes - month.value;
    const y = ano - year.value


    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
}