const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const previousButton = document.getElementById('previous-btn')
const questionContainerElement = document.getElementById('option-container')
const questionElement = document.getElementById('question')
const optionsButtonsElement = document.getElementById('option-btns')
const image = document.getElementById('question-title')

const places = document.getElementById('places')
const place_1 = document.getElementById('place-1')
const place_2 = document.getElementById('place-2')
const place_3 = document.getElementById('place-3')
const place_4 = document.getElementById('place-4')
const container = document.getElementById('container')

container.classList.remove('hide')

var total = parseInt(total)
var clima;
var bool = true
total = 0

let Questions, currentQuestionIndex

const placis = [
    {place_1, clima: 1, transporte: 8},
    {place_2, clima: 2, transporte: 5},
    {place_3, clima: 3, transporte: 6},
    {place_4, clima: 3, transporte: 7},
]

startButton.addEventListener('click', () => {
    startQuiz()
    pageScroll()
    bool = true
})
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextOption()
    setNextPicture()
    bool = true
})

function resetTotal() {
    total = 0
}

function pageScroll() {
    container.scrollIntoView({behavior: "smooth", block: "center"})
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

function selectOption(e) {
    if (bool) {
        const selectedButton = e.target
        selectedButton.classList.remove('btn')
        selectedButton.classList.add('selected-button')
        const value = selectedButton.dataset.value
        setTotalValue(value)
        bool = false
    }
    if (options.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Recomeçar"
        startButton.classList.remove('start-init')
        startButton.addEventListener('click', resetTotal)
        startButton.classList.remove('hide')
        endButton.classList.remove('hide')
        endButton.addEventListener('click',() => {
            container.classList.add('hide')
            places.classList.remove('hide')
            place_1.classList.remove('hide')
            place_2.classList.remove('hide')
            place_3.classList.remove('hide')
        })
    }
}

function setTotalValue(value) {
    value = value
    console.log("Value: " + value)
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
            {text: 'Norte', value: 5},
            {text: 'Sul', value: 6},
            {text: 'Leste', value: 7},
            {text: 'Oeste', value: 8}
        ]
    },
    {
        question: "Que tipo de transporte você prefere?",
        options: [
            {text: 'Ônibus', value: 9},
            {text: 'Carro', value: 10},
            {text: 'Avião', value: 11},
            {text: 'Barco', value: 12}
        ]
    }
]