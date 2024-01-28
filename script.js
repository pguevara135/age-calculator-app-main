const form = document.querySelector("#form")
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById('year');
const data = new Date()

const dia = String(data.getDate()).padStart(2, '0')
const mes = String(data.getMonth() + 1).padStart(2, '0')
const ano = data.getFullYear()

//? Validate if fields are empty

form.addEventListener("submit", (event) => {
    event.preventDefault();

    validateDay();
    validateMonth();
    validateYear();
    calculateYears()
})

//?Day Validation

function validateDay() {
    var error = document.getElementById("error-day")
    const dayColor = document.getElementById('label-day')

    if(day.value == "") {
        error.innerHTML = "This field is required"
        dayColor.className = 'error'
    }
}

//? Month validation

function validateMonth() {
    var error = document.getElementById('error-month')
    const monthColor = document.getElementById('label-month')

    if(month.value == "") {
        error.innerHTML = 'This field is required';
        monthColor.className = 'error'
    }
}

//? Year Validation

function validateYear() {
    var error = document.getElementById('error-year');
    var yearColor = document.getElementById('label-year');

    if(year.value == "") {
        error.innerHTML = "This field is required";
        yearColor.className = 'error';
    }
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
    var idadeAnos = ano - year.value;
    var idadeMeses = mes - month.value;
    var idadeDias = dia - day.value;

    

}