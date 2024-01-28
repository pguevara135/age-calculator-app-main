const form = document.querySelector("#form")
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById('year');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome esta vazio

    if (day.value == "" || month.value == "" || year.value == "") {
        alert("day, month")
        return
    }
})