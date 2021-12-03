const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const previousButton = document.getElementById('previous-btn')
const questionContainerElement = document.getElementById('option-container')
const questionElement = document.getElementById('question')
const optionsButtonsElement = document.getElementById('option-btns')
const image = document.getElementById('question-title')

const place1txt = document.getElementById('place1-txt')
const place2txt = document.getElementById('place2-txt')
const place3txt = document.getElementById('place3-txt')

const places = document.getElementById('places')
const place_1 = document.getElementById('place-1')
const place_2 = document.getElementById('place-2')
const place_3 = document.getElementById('place-3')
const container = document.getElementById('container')

container.classList.remove('hide')

const place1 = document.getElementsByClassName('place')
const place2 = document.getElementsByClassName('place')
const place3 = document.getElementsByClassName('place')
const place4 = document.getElementsByClassName('place')

var total = parseInt(total)
var clima
var fclima
var pt
var bool = true
total = 0

let Questions, currentQuestionIndex

const placis = [
    {place1, clima: 1, regiao: 8, transporte: 11},
    {place2, clima: 2, regiao: 5, transporte: 12},
    {place3, clima: 3, regiao: 6, transporte: 10},
    {place4, clima: 3, regiao: 7, transporte: 9}
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
    image.src="https://www.sketchappsources.com/resources/source-image/climate-icons-hosseinian.png"
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
        pageScroll()
        if (selectedButton.dataset.value >= 1 && selectedButton.dataset.value <= 4) {
            pt = selectedButton.dataset.value
            setClima(pt)
        } else if (selectedButton.dataset.value >= 5 && selectedButton.dataset.value <= 8) {
            pt = selectedButton.dataset.value
            setRegiao(pt)
        } else if (selectedButton.dataset.value >= 9 && selectedButton.dataset.value <= 12) {
            pt = selectedButton.dataset.value
            setTransporte(pt)
        }
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
            place1txt.innerText = "Teste 1"
            place2txt.innerText = "Teste 2"
            place3txt.innerText = "Teste 3"
        })
    }
}

function setClima(value) {
    fclima = value
    console.log("Clima: " + fclima)
}

function setRegiao(value) {
    var fregiao = value
    console.log("Região: " + fregiao)
}

function setTransporte(value) {
    var ftransporte = value
    console.log("Transporte: " + ftransporte)
}

function setNextPicture() {
    if(currentQuestionIndex == 1) {
        image.src="https://o.quizlet.com/R83wCCnwxgQylxWG3-vYrg_b.png"
    } else if(currentQuestionIndex == 2) {
        image.src="https://st8.cannypic.com/thumbs/40/408827_632_canny_pic.jpg"
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