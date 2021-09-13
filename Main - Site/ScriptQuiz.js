const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const previousButton = document.getElementById('previous-btn')
const questionContainerElement = document.getElementById('option-container')
const questionElement = document.getElementById('question')
const optionsButtonsElement = document.getElementById('option-btns')
const image = document.getElementById('question-title')
var total = parseInt(total)
total = 0

let Questions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextOption()
    setNextPicture()
})

function resetTotal() {
    total = 0
}

function startQuiz() {
    image.src="Images/4-estacoes-do-ano-no-brasil.jpg"
    endButton.classList.add('hide')
    startButton.classList.add('hide')
    Questions = options
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextOption()
}

function setNextOption() {
    resetState()
    showQuestion(Questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.options.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        if (option.value) {
            button.dataset.value = option.value
        }
        button.addEventListener('click', selectOption)
        optionsButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (optionsButtonsElement.firstChild) {
        optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)
    }
}

function responsiveButton() {
    
}

function selectOption(e) {
    const selectedButton = e.target
    selectedButton.classList.remove('btn')
    selectedButton.classList.add('selected-button')
    const value = selectedButton.dataset.value
    setTotalValue(value)
    if (options.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Recomeçar"
        startButton.addEventListener('click', resetTotal)
        startButton.classList.remove('hide')
        endButton.classList.remove('hide')
    }
}

function setTotalValue(value) {
    value = parseInt(value)
    total += value
    console.log("Value: " + value)
    console.log("Total: " + total)
}

function setNextPicture() {
    if(currentQuestionIndex == 1) {
        image.src="Images/rodasdosventosregioesdobrasil2.jpg"
    } else if(currentQuestionIndex == 2) {
        image.src="Images/1386284558000-plane-turning.jpg"
    }
}

const options = [
    {
        question: "Qual tipo de clima você prefere?",
        options: [
            {text: 'Quente', value: 1},
            {text: 'Frio', value: 2},
            {text: 'Chuvoso', value: 3},
            {text: 'Árido', value: 4}
        ]
    },
    {
        question: "Qual região do Brasil você prefere?",
        options: [
            {text: 'Norte', value: 1},
            {text: 'Sul', value: 2},
            {text: 'Leste', value: 3},
            {text: 'Oeste', value: 4}
        ]
    },
    {
        question: "Que tipo de transporte você prefere?",
        options: [
            {text: 'Ônibus', value: 1},
            {text: 'Carro', value: 2},
            {text: 'Avião', value: 3},
            {text: 'Barco', value: 4}
        ]
    }
]