//Variables
const btn = document.querySelector(".btn")

const cardNumber = document.querySelector(".number-content")
const inputNumber = document.querySelector("#card-number")

const cardName = document.querySelector("#name")
const inputName = document.querySelector("#card-name")

const cardMes = document.querySelector(".date-mes")
const cardAno = document.querySelector(".date-ano")
const inputMes = document.querySelector("#mes")
const inputAno = document.querySelector("#ano")

const cardCvc = document.querySelector("#verify")
const inputCvc = document.querySelector("#text-verify")

const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");

const form = document.querySelector(".form")
const task = document.querySelector(".complete")
const btnTask = document.querySelector(".btn-task")

console.log(form, task)

function numberV(value){
    return !isNaN(value)
}

//Card-front Name
inputName.addEventListener('input', () =>{
    cardName.textContent = inputName.value
    let zen = /[0-9]/

    if (!zen.test(inputName.value)){
        inputName.style.border = "0.18rem solid green";
        error1.style.opacity = 0
    } else{
        inputName.style.border = "0.17rem solid red";
        cardName.textContent = "JANE APPLESEED"
        error1.style.opacity = 1
        error1.innerText = "Wrong format, letters only"
    }
    if (inputName.value === "") {
        inputName.style.border = "0.17rem red solid"
        cardName.textContent = "JANE APPLESEED"
        error1.style.opacity = 1
        error1.innerText = "Can´t be blank"
    }
})

//Card-front Number
inputNumber.addEventListener('input', () =>{
    cardNumber.textContent = inputNumber.value

    if (numberV(inputNumber.value.split(" ").join(""))){
        inputNumber.style.border = "0.18rem solid green"
        error2.style.opacity = 0
    } else {
        inputNumber.style.border = "0.17rem solid red"
        cardNumber.textContent = "0000 0000 0000 0000"
        error2.style.opacity = 1
        error2.innerText = "Wrong format, numbers only"
    }
    if(inputNumber.value ===  "") {
        inputNumber.style.border = "0.17rem red solid";
        cardNumber.textContent = "0000 0000 0000 0000"
        error2.style.opacity = 1
        error2.innerText = "Can´t be blank"
    }
    
    const newValor = inputNumber.value.split(" ").join("") 


    inputNumber.value = newValor.match(/.{1,4}/g).join(' ')
})

//Card-front month
inputMes.addEventListener('input', () =>{
    cardMes.textContent = inputMes.value

    if (numberV(inputMes.value.split(" ").join(""))) {
        inputMes.style.border = "0.17rem green solid"
        error3.style.opacity = 0
    } else {
        inputMes.style.border = "0.17rem red solid"
        inputMes.textContent = "00"
        error3.innerText = "Numbers only"
        error3.style.opacity = 1
    }
    if (inputMes.value === "") {
        inputMes.style.border = "0.17rem red solid";
        cardMes.textContent = "00"
        error3.style.opacity = 1
        error3.innerText = "Can´t be blank"
    }
})

//Card-front year
inputAno.addEventListener('input', () =>{
    cardAno.textContent = inputAno.value

    if (numberV(inputAno.value.split(" ").join(""))) {
        inputAno.style.border = "0.17rem green solid"
        error3.style.opacity = 0
    } else {
        inputAno.style.border = "0.17rem red solid"
        inputAno.textContent = "00"
        error3.innerText = "Numbers only"
        error3.style.opacity = 1
    }
    if (inputAno.value === "") {
        inputAno.style.border = "0.17rem red solid";
        cardAno.textContent = "00"
        error3.style.opacity = 1
        error3.innerText = "Can´t be blank"
    }
})

//Card-back CVC
inputCvc.addEventListener('input', () =>{
    cardCvc.textContent = inputCvc.value

    if (numberV(inputCvc.value.split(" ").join(""))) {
        inputCvc.style.border = "0.17rem green solid"
        error4.style.opacity = 0
    } else {
        inputCvc.style.border = "0.17rem red solid"
        cardCvc.textContent = "000"
        error4.style.opacity = 1
        error4.innerText = "Numbers only"
    }
    if (inputCvc.value === ""){
        inputCvc.style.border = "0.17rem red solid"
        error4.style.opacity = 1
    }
})

btn.addEventListener('click', (e) =>{
    e.preventDefault;

    if(inputName.value.length > 5) {
        inputName.style.border = "0.17rem green solid"
    } else {
        inputName.style.border = "0.17rem red solid"
        error1.style.opacity = 1
        error1.innerText = "Add letters in the camp"
    }
    if(inputNumber.value.length > 18) {
        inputNumber.style.border = "0.17rem green solid"
    } else {
        inputNumber.style.border = "0.17rem red solid"
        error2.style.opacity = 1
        error2.innerText = "The field must contain 16 numbers"
    }
    if (inputMes.value.length === 2) {
        inputMes.style.border = "0.17rem green solid"
        error3.style.opacity = 0
    } else {
        inputMes.style.border = "0.17rem red solid"
        error3.style.opacity = 1
        error3.innerText = "Need for 2 numbers"
    }
    if (inputAno.value.length === 2) {
        inputAno.style.border = "0.17rem green solid"
        error3.style.opacity = 0
    } else {
        inputAno.style.border = "0.17rem red solid"
        error3.style.opacity = 1
        error3.innerText = "Need for 2 numbers"
    }
    if (inputCvc.value.length === 3){
        inputCvc.style.border = "0.17rem green solid"
    } else {
        inputCvc.style.border = "0.17rem red solid"
        error4.style.opacity = 1
        error4.innerText = "Need for 3 numbers"
    }

    if (inputName.value.length >= 4 && inputNumber.value.length > 18 && inputMes.value.length === 2 && inputAno.value.length === 2 && inputCvc.value.length === 3) {
        form.classList.add("hide")
        task.classList.add("show")
    } else {
        form.classList.remove("hide")
        task.classList.add("hide")
    }
})

btnTask.addEventListener("click", () => {
    task.classList.remove("show")
    form.classList.remove("hide")
    form.reset()
    inputName.style.border = "0.17rem hsl(279, 6%, 55%) solid"
    cardName.textContent = "JANE APPLESEED"
    inputNumber.style.border = "0.17rem hsl(279, 6%, 55%) solid"
    cardNumber.textContent = "0000 0000 0000 0000"
    inputMes.style.border = "0.17rem hsl(279, 6%, 55%) solid"
    cardMes.textContent = "00"
    inputAno.style.border = "0.17rem hsl(279, 6%, 55%) solid"
    cardAno.textContent = "00"
    inputCvc.style.border = "0.17rem hsl(279, 6%, 55%) solid"
    cardCvc.textContent = "000"
})

