const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const previousButton = document.getElementById('previous-btn')

const bigbutton1f = document.getElementById('btn-extd1f')
const bigbutton1v = document.getElementById('btn-extd1v')

const bigbutton2f = document.getElementById('btn-extd2f')
const bigbutton2v = document.getElementById('btn-extd2v')

const bigbutton3f = document.getElementById('btn-extd3f')
const bigbutton3v = document.getElementById('btn-extd3v')

const food_list1 = document.getElementById('list-food1')
const food_list2 = document.getElementById('list-food2')
const food_list3 = document.getElementById('list-food3')

const food_name1_1 = document.getElementById('food-text1-1')
const food_name1_2 = document.getElementById('food-text1-2')
const food_name1_3 = document.getElementById('food-text1-3')
const food_name1_4 = document.getElementById('food-text1-4')

const food_name2_1 = document.getElementById('food-text2-1')
const food_name2_2 = document.getElementById('food-text2-2')
const food_name2_3 = document.getElementById('food-text2-3')
const food_name2_4 = document.getElementById('food-text2-4')

const food_name3_1 = document.getElementById('food-text3-1')
const food_name3_2 = document.getElementById('food-text3-2')
const food_name3_3 = document.getElementById('food-text3-3')
const food_name3_4 = document.getElementById('food-text3-4')

const food_desc1_1 = document.getElementById('food-desc1-1')
const food_desc1_2 = document.getElementById('food-desc1-2')
const food_desc1_3 = document.getElementById('food-desc1-3')
const food_desc1_4 = document.getElementById('food-desc1-4')

const food_desc2_1 = document.getElementById('food-desc2-1')
const food_desc2_2 = document.getElementById('food-desc2-2')
const food_desc2_3 = document.getElementById('food-desc2-3')
const food_desc2_4 = document.getElementById('food-desc2-4')

const food_desc3_1 = document.getElementById('food-desc3-1')
const food_desc3_2 = document.getElementById('food-desc3-2')
const food_desc3_3 = document.getElementById('food-desc3-3')
const food_desc3_4 = document.getElementById('food-desc3-4')

const food_img1_1 = document.getElementById('food-img1-1')
const food_img1_2 = document.getElementById('food-img1-2')
const food_img1_3 = document.getElementById('food-img1-3')
const food_img1_4 = document.getElementById('food-img1-4')

const food_img2_1 = document.getElementById('food-img2-1')
const food_img2_2 = document.getElementById('food-img2-2')
const food_img2_3 = document.getElementById('food-img2-3')
const food_img2_4 = document.getElementById('food-img2-4')

const food_img3_1 = document.getElementById('food-img3-1')
const food_img3_2 = document.getElementById('food-img3-2')
const food_img3_3 = document.getElementById('food-img3-3')
const food_img3_4 = document.getElementById('food-img3-4')

const state_img1 = document.getElementById('img-state1')
const state_img2 = document.getElementById('img-state2')
const state_img3 = document.getElementById('img-state3')

const food_title1 = document.getElementById('fd-txt1')
const food_title2 = document.getElementById('fd-txt2')
const food_title3 = document.getElementById('fd-txt3')

const clima_title1 = document.getElementById('cl-txt1')
const clima_title2 = document.getElementById('cl-txt2')
const clima_title3 = document.getElementById('cl-txt3')

const clima_desc1 = document.getElementById('cl-desc1')
const clima_desc2 = document.getElementById('cl-desc2')
const clima_desc3 = document.getElementById('cl-desc3')

const travel_title1 = document.getElementById('vi-txt1')
const travel_title2 = document.getElementById('vi-txt2')
const travel_title3 = document.getElementById('vi-txt3')

const travel_desc1 = document.getElementById('vi-desc1')
const travel_desc2 = document.getElementById('vi-desc2')
const travel_desc3 = document.getElementById('vi-desc3')

const map_title1 = document.getElementById('mp-txt1')
const map_title2 = document.getElementById('mp-txt2')
const map_title3 = document.getElementById('mp-txt3')

const option5 = document.getElementById('op-5')

const questionContainerElement = document.getElementById('option-container')
const questionElement = document.getElementById('question')
const optionsButtonsElement = document.getElementById('option-btns')
const image = document.getElementById('question-title')

const place1txt = document.getElementById('place1-txt')
const place2txt = document.getElementById('place2-txt')
const place3txt = document.getElementById('place3-txt')

const statetxt1 = document.getElementById('state-txt1')
const statetxt2 = document.getElementById('state-txt2')
const statetxt3 = document.getElementById('state-txt3')

const places = document.getElementById('places')

const place_1 = document.getElementById('place-1')
const place_2 = document.getElementById('place-2')
const place_3 = document.getElementById('place-3')

const container = document.getElementById('container')

const sub_text = document.getElementById('sub-texte')

container.classList.remove('hide')

const map1 = document.getElementById('gg-map1')
const map2 = document.getElementById('gg-map2')
const map3 = document.getElementById('gg-map3')

var total = parseInt(total)
var clima
var fclima
var fregiao
var ftransporte
var pt
var bool = true
total = 0

let Questions, currentQuestionIndex

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
    console.log(currentQuestionIndex)
})

function resetTotal() {
    total = 0
}

function pageScroll() {
    container.scrollIntoView({behavior: "smooth", block: "center"})
}

function startQuiz() {
    endButton.classList.add('hide')
    startButton.classList.add('hide')
    Questions = options
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextOption()
}

function setNextOption() {
    resetState()
    if(Questions[currentQuestionIndex] == 0) {
        option5.classList.remove('hide')

    }
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
        } else if (selectedButton.dataset.value >= 5 && selectedButton.dataset.value <= 9) {
            pt = selectedButton.dataset.value
            setRegiao(pt)
        } else if (selectedButton.dataset.value >= 10 && selectedButton.dataset.value <= 13) {
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
            verifyBlocks()
            container.scrollIntoView({behavior: "smooth", block: "start"})
            container.classList.add('hide')
            places.classList.remove('hide')
            place_1.classList.remove('hide')
            place_2.classList.remove('hide')
            place_3.classList.remove('hide')
            state_img1.classList.remove('hide')
            state_img2.classList.remove('hide')
            state_img3.classList.remove('hide')
            sub_text.innerText = "Esses são os estados que recomendamos para você! Saiba mais sobre eles apertando a setinha no canto direito! :D"
        })
    }
}

function setClima(value) {
    fclima = value
    console.log("Clima: " + fclima)
}

function setRegiao(value) {
    fregiao = value
    console.log("Região: " + fregiao)
}

function setTransporte(value) {
    ftransporte = value
    console.log("Transporte: " + ftransporte)
}

function bigbutton1fv() {
    bigbutton1f.addEventListener('click', () => {
        console.log('bg1foi')
        place_1.style.paddingBottom = '5cm'
        map1.classList.remove('hide')
        state_img1.classList.add('hide')
        food_title1.classList.remove('hide')
        clima_title1.classList.remove('hide')
        clima_desc1.classList.remove('hide')
        travel_title1.classList.remove('hide')
        travel_desc1.classList.remove('hide')
        map_title1.classList.remove('hide')
        food_list1.classList.remove('hide')
        place_1.scrollIntoView({behavior: "smooth", block: "start"})
        bigbutton1v.classList.remove('hide')
        statetxt1.classList.remove('hide')
        bigbutton1f.classList.add('hide')
    })

    bigbutton1v.addEventListener('click', () => {
        map1.classList.add('hide')
        console.log('bg1vorto')
        state_img1.classList.remove('hide')
        food_title1.classList.add('hide')
        clima_title1.classList.add('hide')
        clima_desc1.classList.add('hide')
        travel_title1.classList.add('hide')
        travel_desc1.classList.add('hide')
        map_title1.classList.add('hide')
        food_list1.classList.add('hide')
        place_1.style.paddingBottom = '2.5cm'
        place_1.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton1v.classList.add('hide')
        statetxt1.classList.add('hide')
        bigbutton1f.classList.remove('hide')
    })
}

function bigbutton2fv() {
    bigbutton2f.addEventListener('click', () => {
        console.log('bg2foi')
        place_2.style.paddingBottom = '5cm'
        map2.classList.remove('hide')
        state_img2.classList.add('hide')
        food_title2.classList.remove('hide')
        clima_title2.classList.remove('hide')
        clima_desc2.classList.remove('hide')
        travel_title2.classList.remove('hide')
        travel_desc2.classList.remove('hide')
        map_title2.classList.remove('hide')
        food_list2.classList.remove('hide')
        place_2.scrollIntoView({behavior: "smooth", block: "start"})
        bigbutton2v.classList.remove('hide')
        statetxt2.classList.remove('hide')
        bigbutton2f.classList.add('hide')
    })

    bigbutton2v.addEventListener('click', () => {
        map2.classList.add('hide')
        console.log('bg2vorto')
        state_img2.classList.remove('hide')
        food_title2.classList.add('hide')
        clima_title2.classList.add('hide')
        clima_desc2.classList.add('hide')
        travel_title2.classList.add('hide')
        travel_desc2.classList.add('hide')
        map_title2.classList.add('hide')
        food_list2.classList.add('hide')
        place_2.style.paddingBottom = '2.5cm'
        place_2.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton2v.classList.add('hide')
        statetxt2.classList.add('hide')
        bigbutton2f.classList.remove('hide')
    })
}

function bigbutton3fv() {
    bigbutton3f.addEventListener('click', () => {
        console.log('bg3foi')
        place_3.style.paddingBottom = '5cm'
        map3.classList.remove('hide')
        state_img3.classList.add('hide')
        food_title3.classList.remove('hide')
        clima_title3.classList.remove('hide')
        clima_desc3.classList.remove('hide')
        travel_title3.classList.remove('hide')
        travel_desc3.classList.remove('hide')
        map_title3.classList.remove('hide')
        food_list3.classList.remove('hide')
        place_3.scrollIntoView({behavior: "smooth", block: "start"})
        bigbutton3v.classList.remove('hide')
        statetxt3.classList.remove('hide')
        bigbutton3f.classList.add('hide')
    })

    bigbutton3v.addEventListener('click', () => {
        map3.classList.add('hide')
        console.log('bg3vorto')
        state_img3.classList.remove('hide')
        food_title3.classList.add('hide')
        clima_title3.classList.add('hide')
        clima_desc3.classList.add('hide')
        travel_title3.classList.add('hide')
        travel_desc3.classList.add('hide')
        map_title3.classList.add('hide')
        food_list3.classList.add('hide')
        place_3.style.paddingBottom = '2.5cm'
        place_3.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton3v.classList.add('hide')
        statetxt3.classList.add('hide')
        bigbutton3f.classList.remove('hide')
    })
}

function verifyBlocks() {
    if(fregiao == 5 && fclima == 1) {
        place1txt.innerText = "Amapá"
        statetxt1.innerText = "Amapá é um estado no norte do Brasil que faz fronteira com o Suriname, a Guiana Francesa e o Oceano Atlântico. A floresta amazónica abrange uma grande parte da sua área e o rio Oiapoque faz parte da sua fronteira a norte. No sul, a capital, Macapá, é conhecida pela Fortaleza de São José de Macapá, situada à beira-mar, um forte português do século XVIII, e pelo Monumento do Marco Zero, um obelisco que marca o equador."
        state_img1.src = "https://amapaecocamping.com.br/wp-content/uploads/2020/10/Macapa-capital-do-estado-do-Amapa-1024x768.jpeg"

        food_name1_1.innerText = "Pescada de Gurijuba"
        food_img1_1.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/pescada-de-gurijuba.jpg"
        food_desc1_1.innerText = "É muito comum o uso de peixes como ingrediente em pratos típicos da região amazônica, uma vez que eles são abundantes por ali. No caso da gurijuba, embora esse peixe possa ser encontrado em quase qualquer rio da região, a receita da pescada está firmada no Amapá."

        food_name1_2.innerText = "Tucunaré na brasa"
        food_img1_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/tucunare-na-brasa.jpg"
        food_desc1_2.innerText = "O tucunaré possui receitas em diversos estados da região Norte. Assim como no Acre o tucunaré recheado é um prato típico, no Amapá é mais comum comer o tucunaré na brasa, com um tempero bem leve, apenas limão sal e pimenta do reino. Uma outra receita comum é a caldeirada de tucunaré."

        food_name1_3.innerText = "Camarão no Bafo"
        food_img1_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/camarao-ao-bafo.jpg"
        food_desc1_3.innerText = "O Amapá é um dos estados nortistas que é banhado pelo Oceano Atlântico, e por possuir um litoral, frutos do mar também fazem parte da sua culinária. Um desses ingredientes é o camarão, e a receita típica preparada com ele é o camarão no bafo, que leva um pouco de cachaça de alambique, pimenta dedo de moça, cebola e tomate."

        food_name1_4.innerText = "Tacacá"
        food_img1_4.src = "https://www.visiteobrasil.com.br/galerias/carac8-amapa-tacaca/545-121725-culinaria-amapense-tacaca-foto-carismaticos-do-santuariogr.jpg"
        food_desc1_4.innerText = "Preparado com tucupi (que é o sumo retirado da raiz da mandioca brava), goma de mandioca e camarão. Seu tempero leva pimenta de cheiro, alho, sal e jambu, um tipo de erva típica da região."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083987.4528746754!2d-54.620577521026256!3d1.596783970843328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d653d73cd997b21%3A0x911a614576f6bcd4!2zQW1hcMOh!5e0!3m2!1spt-BR!2sbr!4v1638791542883!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Amapá é predominantemente equatorial úmido ou tropical super úmido, devido à influência da Floresta Amazônica em seu território. Desse modo, o seu clima é marcado por altas temperaturas, e elevados índices pluviométricos."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Amapá está em uma média de R$ 836 (atualmente) dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Tocantins"
        statetxt2.innerText = "Tocantins é um estado na região norte do Brasil. Caracteriza-se pelo cerrado, rios vastos e plantações de soja. A capital moderna, Palmas, foi construída propositadamente no centro geográfico do estado e está rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de água. Há também pontos turísticos como: Parque estadual do Jalapão, fervedouro do ceiça, palácio Araguaia e etc."
        state_img2.src = "https://terravistabrasil.com.br/wp-content/uploads/2020/05/jalapao-tocantins.jpg"

        food_name2_1.innerText = "Chambari"
        food_img2_1.src = "https://s2.glbimg.com/P4z_WgaVk6HqFVSGRiLJFMGAS7g=/0x0:751x600/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/01/24/17_23_15_959_142.jpg"
        food_desc2_1.innerText = "O chambari é uma adaptação tocantinense do “ossobuco” italiano, que significa, literalmente, osso furado. No Tocantins, o osso é cortado horizontalmente e cozido com pimenta e temperos. O chambari é servido com arroz, cheiro verde e, com frequência, também com farinha de mandioca e muita pimenta."

        food_name2_2.innerText = "Amor Perfeito"
        food_img2_2.src = "https://central3.to.gov.br/arquivo/566317_1100x550.jpg"
        food_desc2_2.innerText = "A fécula da raiz de mandioca - também chamada de tapioca -, leite de coco, açúcar refinado, manteiga de leite. Estes são os poucos ingredientes de um biscoito que pelo sabor suave e a deliciosa sensação que provoca ao derreter na boca se tornou uma das iguarias mais famosas entre as cozinheiras do Estado, o 'Amor Perfeito'"

        food_name2_3.innerText = "Paçoca de Carne de Sol"
        food_img2_3.src = "https://central3.to.gov.br/arquivo/566322_1000.jpg"
        food_desc2_3.innerText = "Em questão de praticidade, poucos alimentos ganham da paçoca de carne seca. Reúne poucos ingredientes, mantém a qualidade por vários dias sem necessidade de geladeira e é razoavelmente fácil de fazer. A iguaria é consumida em todas as regiões, mas tem como principal referência a histórica  cidade de Arraias, localizada no Sudeste do Estado"

        food_name2_4.innerText = "Peixe no Leite de Coco Babaçu"
        food_img2_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/peixe-no-leite-de-coco-babacu.jpg"
        food_desc2_4.innerText = "Outra especialidade tocantinense é o peixe no leite de coco babaçu. Essa receita é preparada com caris, cheiro-verde, tomate, cebola, pimenta-de-cheiro e leite de coco babaçu. Depois dos caris limpos, o peixe é colocado para ferver junto com os temperos para formar um molho. Depois disso, é acrescentado o leite de coco, sempre mexendo para não talhar."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "Em Tocantins, a estação com precipitação é quente, abafada e de céu quase encoberto; a estação seca é morna e de céu quase sem nuvens. Ao longo do ano, em geral a temperatura varia de 14 °C a 31 °C e raramente é inferior a 11 °C ou superior a 36 °C. O mês mais quente do ano em Tocantins é fevereiro, com a máxima de 31 °C e mínima de 21 °C, em média, já o mês mais frio é junho com máxima de 15 °C e mínima de 27 °C em média."

        travel_desc2.innerText = "Um roteiro de 7 dias, sendo 5 dias completos no Jalapão + o dia da chegada em Palmas e o dia do retorno. O valor, se for uma única pessoa, fica na faixa de R$ 3.600. Separadamente o voo pode custar acima de R$380, e pode durar entre 2h20 e 6h."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Pará"
        statetxt3.innerText = "O estado do Pará, está localizado na região norte do Brasil, abriga o Parque Nacional da Amazônia. O parque protege uma grande área da densa floresta Amazônica e abriga milhares de animais. Boa parte desta área é alagada todos os anos, tornando o acesso a essas áreas distantes somente por barco. Próxima da desembocadura do Rio Amazonas está Belém, a capital do Pará. Famosa por sua arquitetura colonial e pelo mercado Ver-o-Peso às margens do rio. Nos dias atuais, o Pará é um dos principais produtores de ferro e ouro do Brasil, além disso, a cultura desse estado é marcada por influências indígenas e religiosas."
        state_img3.src = "https://1.bp.blogspot.com/-x5Qwp8dbH9Y/XpOWRimbXoI/AAAAAAAAp1w/rRk810ou8js3_hTOCxry7ATsvyRFTsHLQCLcBGAsYHQ/s1600/esta%25C3%25A7%25C3%25A3o-das-docas-belem-do-para.jpg"

        food_name3_1.innerText = "Pato no Tucupi"
        food_img3_1.src = "https://t2.rg.ltmcdn.com/pt/images/4/1/9/img_pato_no_tucupi_paraense_2914_orig.jpg"
        food_desc3_1.innerText = "Pato no tucupi é um prato brasileiro típico da culinária da região Norte do Brasil, porém em especial do estado do Pará. É elaborado com tucupi, líquido de cor amarela extraído da raiz da mandioca brava, e com jambu, erva típica da região norte. Pode ser acompanhado por arroz branco ou farinha-d'água de mandioca."

        food_name3_2.innerText = "Maniçoba"
        food_img3_2.src = "https://www.portalr3.com.br/wp-content/uploads/2021/01/20210128-manicoba.jpg"
        food_desc3_2.innerText = "A Maniçoba é um prato de origem indígena, típico da culinária paraense e amapaense. Pela origem da folha de que é produzido, surgiu provavelmente entre aldeias indígenas no norte brasileiro, embora seja comumente apontado como uma comida paraense. Tem como principal ingrediente a maniva, a folha da mandioca moída."

        food_name3_3.innerText = "Tacacá"
        food_img3_3.src = "https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacacá_Cred-Kato-1.jpg"
        food_desc3_3.innerText = "Tacacá é um prato típico da Região Amazônica de origem indígena. É muito apreciado em várias localidades da região Norte do Brasil. Preparado com um caldo amarelado, chamado tucupi. Coloca-se esse caldo por cima da goma de mandioca, também servida com jambu e camarão seco."

        food_name3_4.innerText = "Chibé"
        food_img3_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2017/04/am2.png?fit=1024%2C536&ssl=1"
        food_desc3_4.innerText = "Chibé ou Jacuba é uma bebida brasileira típica da culinária tupi É uma bebida com um gosto levemente ácido. É feito misturando de farinha de mandioca e água. Os grãos de farinha incham, resultando em uma textura semelhante a fubá. Pode ser acompanhado de sal, pimenta ou outros temperos salgados à gosto."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310730.867194925!2d-61.52762278360523!3d-3.5616704612925862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f999ac2c0997%3A0x315ec83ee755f30a!2zUGFyw6E!5e0!3m2!1spt-BR!2sbr!4v1638972167247!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O estado tem a segunda maior extensão do Brasil (1.245.759,305 km²) -, tem seu interior a predominância do Clima Equatorial Quente e Úmido. Entretanto, como sua área é muito extensa, existem algumas variabilidades nos tipos climáticos do Estado, que segundo a classificação de Köppen destacam-se mais dois: o Clima Equatorial Semiúmido e o Clima Tropical Equatorial de Savanas. A temperatura média anual é de 26 °C, e esse clima se caracteriza por possuir amplitudes térmicas maiores em relação ao Clima Equatorial. Isso ocorre devida à influência da Continentalidade nas temperaturas diárias."

        travel_desc3.innerText = "O custo total de uma viagem de cinco dias inteiros (quatro dias inteiros e dois “meios dias”) e seis noites em Belém é em média R$ 1.148 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
    } else if(fregiao == 5 && fclima == 2) {
		place1txt.innerText = "Roraima"
        statetxt1.innerText = "O estado de Roraima localizado na região norte do Brasil, é conhecido pela Floresta Amazónica. A capital, Boa Vista, na margem oeste de Rio Branco, fica próxima dos parques nacionais da Serra da Mocidade, a sudoeste, e do Monte Roraima, a norte. Com penhascos íngremes e um misterioso cume plano, o Monte Roraima, partilhado com a Venezuela e a Guiana, foi, presumivelmente, a inspiração de Sir Arthur Conan Doyle para O Mundo Perdido."
        state_img1.src = "https://www.oikostravel.com.br/wp-content/uploads/2020/07/Expedição-Monte-Roraima.jpg"

        food_name1_1.innerText = "Caldeirada"
        food_img1_1.src = "http://s2.glbimg.com/uZqdjuwmg02KKizUlii9S4x6g-A=/s.glbimg.com/og/rg/f/original/2014/09/05/redeam_bda_peixe_05092014.jpg"
        food_desc1_1.innerText = "Prato muito comum no estado, a caldeirada é uma forma de preparação de peixe, que é limpo e cortado em pedaços, colocado em um caldeirão com temperos (cebola, tomate, pimentão, cheiro verde e pimenta-de-cheiro) refogados em óleo e cozidos em água."

        food_name1_2.innerText = "Pirarucu Desfiado"
        food_img1_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/pirarucu-desfiado.jpg"
        food_desc1_2.innerText = "É uma forma típica roraimense de preparar o pirarucu. O peixe é lavado com água e limão, escaldado no fogo e desfiado, retirando-se todas as espinhas. É refogado em uma panela com óleo e temperos, e a esses ingredientes é acrescentado leite de coco ou de castanha do Pará."

        food_name1_3.innerText = "Guisado de Galinha Caipira"
        food_img1_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/guisado-de-galinha-caipira.jpg"
        food_desc1_3.innerText = "Um tipo de receita muito popular na região. A galinha é cortada em pedaços, guisada em óleo, cebola, alho, pimenta-do-reino, pimenta-de-cheiro, tomate, sal, cheiro verde e colorau. Acompanha pirão feito com o próprio caldo."

        food_name1_4.innerText = "Paçoca com Banana"
        food_img1_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/pacoca-com-banana.jpg"
        food_desc1_4.innerText = "Prato preparado com farinha, banana e carne bovina bem seca ou charque batida no pilão. É indicado pelos roraimenses como ideal para viagens por conservar-se durante muitos dias fora da geladeira."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083457.8505257973!2d-64.10488380441548!3d1.844161315734518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d930671dfccf45b%3A0x695f00f29e9c7a14!2sRoraima!5e0!3m2!1spt-BR!2sbr!4v1638976305616!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Nas regiões mais elevadas do estado não há um período seco bem definido e a temperatura do mês mais frio costuma oscilar entre 15° e 20 °C. Nas regiões de menor altitude, a temperatura média mínima mensal é de 20 °C e a média máxima de 38 °C. Nas áreas planas a temperatura média mensal está acima de 26 °C. O longo período de chuvas e a deficiente drenagem organizada permitem uma acumulação ininterrupta de água. Enquanto todas quase todas as capitais brasileiras estão na primavera, Boa Vista é a única delas a estar no outono, por estar localizada acima da linha do Equador."

        travel_desc1.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço das passagens aéreas é acima de R$986, e a duração do voo pode variar entre 3h30 e 9h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Tocantins"
        statetxt2.innerText = "Tocantins é um estado na região norte do Brasil. Caracteriza-se pelo cerrado, rios vastos e plantações de soja. A capital moderna, Palmas, foi construída propositadamente no centro geográfico do estado e está rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de água. Há também pontos turísticos como: Parque estadual do Jalapão, fervedouro do ceiça, palácio Araguaia e etc."
        state_img2.src = "https://terravistabrasil.com.br/wp-content/uploads/2020/05/jalapao-tocantins.jpg"

        food_name2_1.innerText = "Chambari"
        food_img2_1.src = "https://s2.glbimg.com/P4z_WgaVk6HqFVSGRiLJFMGAS7g=/0x0:751x600/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/01/24/17_23_15_959_142.jpg"
        food_desc2_1.innerText = "O chambari é uma adaptação tocantinense do “ossobuco” italiano, que significa, literalmente, osso furado. No Tocantins, o osso é cortado horizontalmente e cozido com pimenta e temperos. O chambari é servido com arroz, cheiro verde e, com frequência, também com farinha de mandioca e muita pimenta."

        food_name2_2.innerText = "Amor Perfeito"
        food_img2_2.src = "https://central3.to.gov.br/arquivo/566317_1100x550.jpg"
        food_desc2_2.innerText = "A fécula da raiz de mandioca - também chamada de tapioca -, leite de coco, açúcar refinado, manteiga de leite. Estes são os poucos ingredientes de um biscoito que pelo sabor suave e a deliciosa sensação que provoca ao derreter na boca se tornou uma das iguarias mais famosas entre as cozinheiras do Estado, o 'Amor Perfeito'"

        food_name2_3.innerText = "Paçoca de Carne de Sol"
        food_img2_3.src = "https://central3.to.gov.br/arquivo/566322_1000.jpg"
        food_desc2_3.innerText = "Em questão de praticidade, poucos alimentos ganham da paçoca de carne seca. Reúne poucos ingredientes, mantém a qualidade por vários dias sem necessidade de geladeira e é razoavelmente fácil de fazer. A iguaria é consumida em todas as regiões, mas tem como principal referência a histórica  cidade de Arraias, localizada no Sudeste do Estado"

        food_name2_4.innerText = "Peixe no Leite de Coco Babaçu"
        food_img2_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/peixe-no-leite-de-coco-babacu.jpg"
        food_desc2_4.innerText = "Outra especialidade tocantinense é o peixe no leite de coco babaçu. Essa receita é preparada com caris, cheiro-verde, tomate, cebola, pimenta-de-cheiro e leite de coco babaçu. Depois dos caris limpos, o peixe é colocado para ferver junto com os temperos para formar um molho. Depois disso, é acrescentado o leite de coco, sempre mexendo para não talhar."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "Em Tocantins, a estação com precipitação é quente, abafada e de céu quase encoberto; a estação seca é morna e de céu quase sem nuvens. Ao longo do ano, em geral a temperatura varia de 14 °C a 31 °C e raramente é inferior a 11 °C ou superior a 36 °C. O mês mais quente do ano em Tocantins é fevereiro, com a máxima de 31 °C e mínima de 21 °C, em média, já o mês mais frio é junho com máxima de 15 °C e mínima de 27 °C em média."

        travel_desc2.innerText = "Um roteiro de 7 dias, sendo 5 dias completos no Jalapão + o dia da chegada em Palmas e o dia do retorno. O valor, se for uma única pessoa, fica na faixa de R$ 3.600. Separadamente o voo pode custar acima de R$380, e pode durar entre 2h20 e 6h."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rondônia"
        statetxt3.innerText = "O estado de Rondônia, fica localizado na região norte do Brasil, e sua capital é Porto Velho, banhada pelo rio Madeira. Além deste, há outros destinos importantes como: Ariquemes, Cacoal, Guajará-Mirim, Ji-Paraná, Rolim de Moura e Vilhena."
        state_img3.src = "https://rondonia.ro.gov.br/wp-content/uploads/2020/07/CPA-Palácio-Rio-Madeira-14.07.20-Fotos-Frank-Nery-13.jpg"

        food_name3_1.innerText = "Torta de Cupuaçu"
        food_img3_1.src = "https://www.visiteobrasil.com.br/galerias/carac8-rondonia-torta-de-cupuacu/563-011122-culinaria-rondoniense-torta-de-cupuacu-foto-reproducao-tv-liberalgr.jpg"
        food_desc3_1.innerText = "Algumas frutas típicas da região são bastante usadas em receitas de tortas e outros tipos de sobremesa. O cupuaçu é uma delas. A fruta é parente próxima do cacau, e por conta disso seu gosto muitas vezes se assemelha ao do chocolate. Além de tortas, o cupuaçu pode ser usado para fazer bombons e até mesmo receitas de sabor azedo."

        food_name3_2.innerText = "Doce de Buriti"
        food_img3_2.src = "https://www.visiteobrasil.com.br/galerias/carac8-rondonia-doce-de-buriti/564-011742-culinaria-rondoniense-doce-de-buriti-foto-marilene-ribeiro-ci-divulgacaogr.jpg"
        food_desc3_2.innerText = "Outra fruta que é bastante usada na gastronomia rondoniense é o buriti. Apesar de ser empregada na confecção de tipos de produtos, de sabonetes a vermífugos, a fruta é rica em vitaminas e cálcio, o que valoriza ainda mais o seu doce."

        food_name3_3.innerText = "Pirarucu Rondon"
        food_img3_3.src = "http://s2.glbimg.com/b2d8-Sxy0XWkmRpSvEPk1VLE9B0=/620x465/s2.glbimg.com/kiRb3cZOcOxgmw0_Dscmq-CxsPQ=/620x465/s.glbimg.com/jo/g1/f/original/2016/08/18/img_6105.jpg"
        food_desc3_3.innerText = "A receita do Pirarucu Rondon é um prato bem típico do estado, tem cinco ingredientes e leva até 35 minutos para ficar pronto. O prato é composto pelo pirarucu, jambu, macaxeira, batata doce, tucupi"

        food_name3_4.innerText = "Tacacá"
        food_img3_4.src = "https://www.visiteobrasil.com.br/galerias/carac8-rondonia-tacaca/561-011056-culinaria-rondoniense-tacaca-de-rondonia-foto-baenningergr.jpg"
        food_desc3_4.innerText = "Tacacá é uma comida regional muito diferente, preparada com o tucupí (caldo da mandioca), previamente fervido com alho e chicória), camarões secos graúdos, goma (mingau feito com uma massa fina e branca, resultado da lavagem da mandioca ralada) e jambú (planta considerada afrodisíaca)."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4012850.4642982725!2d-65.5369612909414!3d-10.826667114104417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cd96f516b57%3A0x733763d5340621dd!2zUm9uZMO0bmlh!5e0!3m2!1spt-BR!2sbr!4v1638976435117!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "A região tem altíssima umidade e a temperatura média está em torno de 26ºC. A variação de temperatura é pequena, mas neste estado do norte ocorre um fenômeno climático atípico. A “friagem” faz com que os termômetros baixem vários graus de forma brusca, podendo chegar até 10°C."

        travel_desc3.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço do voo é acima de R$975, e a duração do voo pode variar entre 4h e 8h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
	} else if(fregiao == 5 && fclima == 3) {
		place1txt.innerText = "Amazonas"
        statetxt1.innerText = "Amazonas é um enorme estado no noroeste do Brasil, coberto quase na sua totalidade pela floresta tropical da Amazónia. A capital, Manaus, é um porto fluvial com pontos de referência que datam do ciclo da borracha de finais do século XIX, incluindo o Teatro Amazonas, uma grande casa de ópera. A cidade marca o Encontro das Águas, onde o rio Negro, de água negra, e o rio Solimões se juntam para formar o rio Amazonas."
        state_img1.src = "https://cdn.falauniversidades.com.br/wp-content/uploads/2021/04/19161129/Amazonas.jpg"

        food_name1_1.innerText = "Tapioca"
        food_img1_1.src = "https://www.u-amazon.com/blogs/wp-content/uploads/2021/05/3-4-1024x683.png"
        food_desc1_1.innerText = "A tapioca, ou beiju, é uma iguaria de origem indígena tupi-guarani, feita com a goma da tapioca. O recheio irá variar, podendo ser apreciada apenas com manteiga, com queijo ou mesmo com tucumã, uma fruta típica da região."

        food_name1_2.innerText = "Guaraná"
        food_img1_2.src = "https://www.u-amazon.com/blogs/wp-content/uploads/2021/05/4-4-1024x683.png"
        food_desc1_2.innerText = "O guaraná é um cipó originário da Amazônia. Seus frutos são utilizados para fazer bebida ou são transformados em pó. Com propriedades estimulantes, é normalmente adicionado a sucos e a vitaminas."

        food_name1_3.innerText = "Tucunaré"
        food_img1_3.src = "https://www.u-amazon.com/blogs/wp-content/uploads/2021/05/5-5-1024x683.png"
        food_desc1_3.innerText = "Espécie de peixe que se torna um ingrediente versátil e muito saboroso, usado em caldeiradas ou servido frito, à milanesa."

        food_name1_4.innerText = "Brigadeiro de Tucupi"
        food_img1_4.src = "https://s2.glbimg.com/dxnFkU4t5WM_Ao2NOmZhJV2DePk=/620x455/e.glbimg.com/og/ed/f/original/2018/10/19/brigadeiro-de-tucupi.jpg"
        food_desc1_4.innerText = "O doce é feito com tucupi preto, que é o melaço do tradicional tucupi – sumo amarelo extraído da raíz da mandioca. A receita leva 30 minutos para ficar pronta e rende 20 porções."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307384.704508508!2d-73.99534554581057!3d-3.745764141344254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92183f5c8b1d6ed1%3A0x176d6af66b3c2efa!2sAmazonas!5e0!3m2!1spt-BR!2sbr!4v1639057872387!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima de Amazonas é considerado tropical úmido de monção, com temperatura média compensada anual de 27 °C e umidade do ar relativamente elevada, com índice pluviométrico em torno de 2 300 milímetros (mm) anuais."

        travel_desc1.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Manaus (Capital de Amazonas) varia em média de R$ 580 à R$ 1450 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Pará"
        statetxt2.innerText = "O estado do Pará, está localizado na região norte do Brasil, abriga o Parque Nacional da Amazônia. O parque protege uma grande área da densa floresta Amazônica e abriga milhares de animais. Boa parte desta área é alagada todos os anos, tornando o acesso a essas áreas distantes somente por barco. Próxima da desembocadura do Rio Amazonas está Belém, a capital do Pará. Famosa por sua arquitetura colonial e pelo mercado Ver-o-Peso às margens do rio. Nos dias atuais, o Pará é um dos principais produtores de ferro e ouro do Brasil, além disso, a cultura desse estado é marcada por influências indígenas e religiosas."
        state_img2.src = "https://1.bp.blogspot.com/-x5Qwp8dbH9Y/XpOWRimbXoI/AAAAAAAAp1w/rRk810ou8js3_hTOCxry7ATsvyRFTsHLQCLcBGAsYHQ/s1600/esta%25C3%25A7%25C3%25A3o-das-docas-belem-do-para.jpg"

        food_name2_1.innerText = "Pato no Tucupi"
        food_img2_1.src = "https://t2.rg.ltmcdn.com/pt/images/4/1/9/img_pato_no_tucupi_paraense_2914_orig.jpg"
        food_desc2_1.innerText = "Pato no tucupi é um prato brasileiro típico da culinária da região Norte do Brasil, porém em especial do estado do Pará. É elaborado com tucupi, líquido de cor amarela extraído da raiz da mandioca brava, e com jambu, erva típica da região norte. Pode ser acompanhado por arroz branco ou farinha-d'água de mandioca."

        food_name2_2.innerText = "Maniçoba"
        food_img2_2.src = "https://www.portalr3.com.br/wp-content/uploads/2021/01/20210128-manicoba.jpg"
        food_desc2_2.innerText = "A Maniçoba é um prato de origem indígena, típico da culinária paraense e amapaense. Pela origem da folha de que é produzido, surgiu provavelmente entre aldeias indígenas no norte brasileiro, embora seja comumente apontado como uma comida paraense. Tem como principal ingrediente a maniva, a folha da mandioca moída."

        food_name2_3.innerText = "Tacacá"
        food_img2_3.src = "https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacacá_Cred-Kato-1.jpg"
        food_desc2_3.innerText = "Tacacá é um prato típico da Região Amazônica de origem indígena. É muito apreciado em várias localidades da região Norte do Brasil. Preparado com um caldo amarelado, chamado tucupi. Coloca-se esse caldo por cima da goma de mandioca, também servida com jambu e camarão seco."

        food_name2_4.innerText = "Chibé"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2017/04/am2.png?fit=1024%2C536&ssl=1"
        food_desc2_4.innerText = "Chibé ou Jacuba é uma bebida brasileira típica da culinária tupi É uma bebida com um gosto levemente ácido. É feito misturando de farinha de mandioca e água. Os grãos de farinha incham, resultando em uma textura semelhante a fubá. Pode ser acompanhado de sal, pimenta ou outros temperos salgados à gosto."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310730.867194925!2d-61.52762278360523!3d-3.5616704612925862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f999ac2c0997%3A0x315ec83ee755f30a!2zUGFyw6E!5e0!3m2!1spt-BR!2sbr!4v1638972167247!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O estado tem a segunda maior extensão do Brasil (1.245.759,305 km²) -, tem seu interior a predominância do Clima Equatorial Quente e Úmido. Entretanto, como sua área é muito extensa, existem algumas variabilidades nos tipos climáticos do Estado, que segundo a classificação de Köppen destacam-se mais dois: o Clima Equatorial Semiúmido e o Clima Tropical Equatorial de Savanas. A temperatura média anual é de 26 °C, e esse clima se caracteriza por possuir amplitudes térmicas maiores em relação ao Clima Equatorial. Isso ocorre devida à influência da Continentalidade nas temperaturas diárias."

        travel_desc2.innerText = "O custo total de uma viagem de cinco dias inteiros (quatro dias inteiros e dois “meios dias”) e seis noites em Belém é em média R$ 1.148 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Acre"
        statetxt3.innerText = "Acre é um estado no noroeste do Brasil, na Floresta Amazónica. É conhecido pela quantidade de árvores-da-borracha e castanhas-do-brasil. Na fronteira peruana, a oeste, o Parque Nacional da Serra do Divisor possui montanhas elevadas e várias quedas de água, além de diversas espécies animais, como tatus-gigantes, tapires e aves raras. A sudeste, encontra-se Rio Branco, a capital do estado, nas margens do rio Acre."
        state_img3.src = "https://agencia.ac.gov.br/wp-content/uploads/2020/09/WhatsApp-Image-2020-01-06-at-09.15.29-1-Cópia-1200x673.jpeg"

        food_name3_1.innerText = "Tucunaré recheado"
        food_img3_1.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/tucunare-recheado.jpg"
        food_desc3_1.innerText = "Esta receita utiliza um dos peixes comuns na bacia hidrográfica amazônica. O tucunaré é aberto pelo lombo e tem sua tripas retiradas, depois é recheado com legumes cozidos e/ou batata doce, temperado com limão e pimenta-do-reino, e depois posto para assar. Um ponto importante para deixar o peixe suculento é colocá-lo para marinar na vinha d’alho, que é basicamente vinho e alho."

        food_name3_2.innerText = "Pirarucu à Casaca"
        food_img3_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/pirarucu-a-casaca.jpg"
        food_desc3_2.innerText = "Este prato é muito comum no estado do Amazonas, principalmente em Manaus, porém é muito apreciado também no Acre. O pirarucu à cascata também leva farinha de mandioca, que é conhecida na região como farinha d’água. Os ingredientes são todos montados em camadas."

        food_name3_3.innerText = "Saltenha"
        food_img3_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/saltenha.jpg"
        food_desc3_3.innerText = "A origem deste salgado é boliviana, e vale lembrar que a Bolívia detinha a posse do território que hoje corresponde ao Acre. A saltenha tornou-se um dos principais salgados do estado acreano, podendo ser encontrada em quase qualquer barraca ou lanchonete. Apesar de normalmente ser frita, também pode ser assada."

        food_name3_4.innerText = "Tambaqui Acreano"
        food_img3_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/tambaqui-acreano.jpg"
        food_desc3_4.innerText = "Os peixes são o carro forte da culinária acreana. São diversas as receitas com carne branca que encontramos não só no Acre, mas em toda a Região Norte. A receita do tambaqui acreano já foi premiada e usa as costelas do peixe."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8068242.876102725!2d-74.80123332555144!3d-9.102721649406758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8daa4e9106b9%3A0x25ec0ac5083607c1!2sAcre!5e0!3m2!1spt-BR!2sbr!4v1639058810496!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima característico do Acre é o equatorial, que apresenta durante todo o ano altas temperaturas e elevada umidade."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Acre varia em média de R$ 753 à R$ 998 (atualmente) dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
	} else if(fregiao == 5 && fclima == 4) {
        place1txt.innerText = "Tocantins"
        statetxt1.innerText = "Tocantins é um estado na região norte do Brasil. Caracteriza-se pelo cerrado, rios vastos e plantações de soja. A capital moderna, Palmas, foi construída propositadamente no centro geográfico do estado e está rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de água. Há também pontos turísticos como: Parque estadual do Jalapão, fervedouro do ceiça, palácio Araguaia e etc."
        state_img1.src = "https://terravistabrasil.com.br/wp-content/uploads/2020/05/jalapao-tocantins.jpg"

        food_name1_1.innerText = "Chambari"
        food_img1_1.src = "https://s2.glbimg.com/P4z_WgaVk6HqFVSGRiLJFMGAS7g=/0x0:751x600/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/01/24/17_23_15_959_142.jpg"
        food_desc1_1.innerText = "O chambari é uma adaptação tocantinense do “ossobuco” italiano, que significa, literalmente, osso furado. No Tocantins, o osso é cortado horizontalmente e cozido com pimenta e temperos. O chambari é servido com arroz, cheiro verde e, com frequência, também com farinha de mandioca e muita pimenta."

        food_name1_2.innerText = "Amor Perfeito"
        food_img1_2.src = "https://central3.to.gov.br/arquivo/566317_1100x550.jpg"
        food_desc1_2.innerText = "A fécula da raiz de mandioca - também chamada de tapioca -, leite de coco, açúcar refinado, manteiga de leite. Estes são os poucos ingredientes de um biscoito que pelo sabor suave e a deliciosa sensação que provoca ao derreter na boca se tornou uma das iguarias mais famosas entre as cozinheiras do Estado, o 'Amor Perfeito'"

        food_name1_3.innerText = "Paçoca de Carne de Sol"
        food_img1_3.src = "https://central3.to.gov.br/arquivo/566322_1000.jpg"
        food_desc1_3.innerText = "Em questão de praticidade, poucos alimentos ganham da paçoca de carne seca. Reúne poucos ingredientes, mantém a qualidade por vários dias sem necessidade de geladeira e é razoavelmente fácil de fazer. A iguaria é consumida em todas as regiões, mas tem como principal referência a histórica  cidade de Arraias, localizada no Sudeste do Estado"

        food_name1_4.innerText = "Peixe no Leite de Coco Babaçu"
        food_img1_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/peixe-no-leite-de-coco-babacu.jpg"
        food_desc1_4.innerText = "Outra especialidade tocantinense é o peixe no leite de coco babaçu. Essa receita é preparada com caris, cheiro-verde, tomate, cebola, pimenta-de-cheiro e leite de coco babaçu. Depois dos caris limpos, o peixe é colocado para ferver junto com os temperos para formar um molho. Depois disso, é acrescentado o leite de coco, sempre mexendo para não talhar."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Em Tocantins, a estação com precipitação é quente, abafada e de céu quase encoberto; a estação seca é morna e de céu quase sem nuvens. Ao longo do ano, em geral a temperatura varia de 14 °C a 31 °C e raramente é inferior a 11 °C ou superior a 36 °C. O mês mais quente do ano em Tocantins é fevereiro, com a máxima de 31 °C e mínima de 21 °C, em média, já o mês mais frio é junho com máxima de 15 °C e mínima de 27 °C em média."

        travel_desc1.innerText = "Um roteiro de 7 dias, sendo 5 dias completos no Jalapão + o dia da chegada em Palmas e o dia do retorno. O valor, se for uma única pessoa, fica na faixa de R$ 3.600. Separadamente o voo pode custar acima de R$380, e pode durar entre 2h20 e 6h."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Roraima"
        statetxt2.innerText = "O estado de Roraima localizado na região norte do Brasil, é conhecido pela Floresta Amazónica. A capital, Boa Vista, na margem oeste de Rio Branco, fica próxima dos parques nacionais da Serra da Mocidade, a sudoeste, e do Monte Roraima, a norte. Com penhascos íngremes e um misterioso cume plano, o Monte Roraima, partilhado com a Venezuela e a Guiana, foi, presumivelmente, a inspiração de Sir Arthur Conan Doyle para O Mundo Perdido."
        state_img2.src = "https://www.oikostravel.com.br/wp-content/uploads/2020/07/Expedição-Monte-Roraima.jpg"

        food_name2_1.innerText = "Caldeirada"
        food_img2_1.src = "http://s2.glbimg.com/uZqdjuwmg02KKizUlii9S4x6g-A=/s.glbimg.com/og/rg/f/original/2014/09/05/redeam_bda_peixe_05092014.jpg"
        food_desc2_1.innerText = "Prato muito comum no estado, a caldeirada é uma forma de preparação de peixe, que é limpo e cortado em pedaços, colocado em um caldeirão com temperos (cebola, tomate, pimentão, cheiro verde e pimenta-de-cheiro) refogados em óleo e cozidos em água."

        food_name2_2.innerText = "Pirarucu Desfiado"
        food_img2_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/pirarucu-desfiado.jpg"
        food_desc2_2.innerText = "É uma forma típica roraimense de preparar o pirarucu. O peixe é lavado com água e limão, escaldado no fogo e desfiado, retirando-se todas as espinhas. É refogado em uma panela com óleo e temperos, e a esses ingredientes é acrescentado leite de coco ou de castanha do Pará."

        food_name2_3.innerText = "Guisado de Galinha Caipira"
        food_img2_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/guisado-de-galinha-caipira.jpg"
        food_desc2_3.innerText = "Um tipo de receita muito popular na região. A galinha é cortada em pedaços, guisada em óleo, cebola, alho, pimenta-do-reino, pimenta-de-cheiro, tomate, sal, cheiro verde e colorau. Acompanha pirão feito com o próprio caldo."

        food_name2_4.innerText = "Paçoca com Banana"
        food_img2_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/pacoca-com-banana.jpg"
        food_desc2_4.innerText = "Prato preparado com farinha, banana e carne bovina bem seca ou charque batida no pilão. É indicado pelos roraimenses como ideal para viagens por conservar-se durante muitos dias fora da geladeira."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083457.8505257973!2d-64.10488380441548!3d1.844161315734518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d930671dfccf45b%3A0x695f00f29e9c7a14!2sRoraima!5e0!3m2!1spt-BR!2sbr!4v1638976305616!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "Nas regiões mais elevadas do estado não há um período seco bem definido e a temperatura do mês mais frio costuma oscilar entre 15° e 20 °C. Nas regiões de menor altitude, a temperatura média mínima mensal é de 20 °C e a média máxima de 38 °C. Nas áreas planas a temperatura média mensal está acima de 26 °C. O longo período de chuvas e a deficiente drenagem organizada permitem uma acumulação ininterrupta de água. Enquanto todas quase todas as capitais brasileiras estão na primavera, Boa Vista é a única delas a estar no outono, por estar localizada acima da linha do Equador."

        travel_desc2.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço das passagens aéreas é acima de R$986, e a duração do voo pode variar entre 3h30 e 9h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Amapá"
        statetxt3.innerText = "Amapá é um estado no norte do Brasil que faz fronteira com o Suriname, a Guiana Francesa e o Oceano Atlântico. A floresta amazónica abrange uma grande parte da sua área e o rio Oiapoque faz parte da sua fronteira a norte. No sul, a capital, Macapá, é conhecida pela Fortaleza de São José de Macapá, situada à beira-mar, um forte português do século XVIII, e pelo Monumento do Marco Zero, um obelisco que marca o equador."
        state_img3.src = "https://amapaecocamping.com.br/wp-content/uploads/2020/10/Macapa-capital-do-estado-do-Amapa-1024x768.jpeg"

        food_name3_1.innerText = "Pescada de Gurijuba"
        food_img3_1.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/pescada-de-gurijuba.jpg"
        food_desc3_1.innerText = "É muito comum o uso de peixes como ingrediente em pratos típicos da região amazônica, uma vez que eles são abundantes por ali. No caso da gurijuba, embora esse peixe possa ser encontrado em quase qualquer rio da região, a receita da pescada está firmada no Amapá."

        food_name3_2.innerText = "Tucunaré na brasa"
        food_img3_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/tucunare-na-brasa.jpg"
        food_desc3_2.innerText = "O tucunaré possui receitas em diversos estados da região Norte. Assim como no Acre o tucunaré recheado é um prato típico, no Amapá é mais comum comer o tucunaré na brasa, com um tempero bem leve, apenas limão sal e pimenta do reino. Uma outra receita comum é a caldeirada de tucunaré."

        food_name3_3.innerText = "Camarão no Bafo"
        food_img3_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/camarao-ao-bafo.jpg"
        food_desc3_3.innerText = "O Amapá é um dos estados nortistas que é banhado pelo Oceano Atlântico, e por possuir um litoral, frutos do mar também fazem parte da sua culinária. Um desses ingredientes é o camarão, e a receita típica preparada com ele é o camarão no bafo, que leva um pouco de cachaça de alambique, pimenta dedo de moça, cebola e tomate."

        food_name3_4.innerText = "Tacacá"
        food_img3_4.src = "https://www.visiteobrasil.com.br/galerias/carac8-amapa-tacaca/545-121725-culinaria-amapense-tacaca-foto-carismaticos-do-santuariogr.jpg"
        food_desc3_4.innerText = "Preparado com tucupi (que é o sumo retirado da raiz da mandioca brava), goma de mandioca e camarão. Seu tempero leva pimenta de cheiro, alho, sal e jambu, um tipo de erva típica da região."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083987.4528746754!2d-54.620577521026256!3d1.596783970843328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d653d73cd997b21%3A0x911a614576f6bcd4!2zQW1hcMOh!5e0!3m2!1spt-BR!2sbr!4v1638791542883!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Amapá é predominantemente equatorial úmido ou tropical super úmido, devido à influência da Floresta Amazônica em seu território. Desse modo, o seu clima é marcado por altas temperaturas, e elevados índices pluviométricos."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Amapá está em uma média de R$ 836 (atualmente) dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

	} else if(fregiao == 6 && fclima == 1) {
        place1txt.innerText = "Piauí"
        statetxt1.innerText = "Piauí é um estado no nordeste do Brasil conhecido pelos parques nacionais. O Parque Nacional Serra da Capivara, no sudeste, possui sítios arqueológicos com pinturas rupestres pré-históricas. Nas proximidades, o Parque Nacional Serra das Confusões tem gigantescas formações rochosas e grandes áreas de caatinga (vegetação semiárida), onde vivem aves em risco de extinção. As mangueiras ladeiam as ruas da capital à beira-rio, Teresina."
        state_img1.src = "https://exame.com/wp-content/uploads/2018/06/thinkstockphotos-886667882-e1528831390573.jpg"

        food_name1_1.innerText = "Maria Isabel"
        food_img1_1.src = "https://img-global.cpcdn.com/recipes/39eaaf2ac385653c/680x482cq70/foto-principal-da-receita-arroz-maria-isabel-do-piaui.webp"
        food_desc1_1.innerText = "Arroz Maria Isabel é um dos pratos que mais representam o Piauí, que surgiu entre as famílias mais humildes do estado. Conta a história, que os homens dessas famílias mais pobres, eram os que consumiam carnes. Uma mãe tirou um pedaço de carne, cortou em pedacinhos e misturou com arroz, para que toda família pudesse comer carne, e deu ao prato o nome das filhas, Maria e Izabel."

        food_name1_2.innerText = "Carne de Sol"
        food_img1_2.src = "https://s2.glbimg.com/U8uguGGrZTSnNV0F9mYE7Hw5VAI=/0x0:1237x692/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/p/B/qFHWsdT62dzJZoCICQ8g/captura-de-tela-2020-04-27-as-16.14.45.jpg"
        food_desc1_2.innerText = "A carne de sol, também conhecida como carne seca, é um alimento que começou a ser consumido no Brasil ainda no período colonial. Com o tempo, o ingrediente se tornou um patrimônio cultural do município de Campo Maior, localizado a 81 km de Teresina."

        food_name1_3.innerText = "Arroz com Capote"
        food_img1_3.src = "http://www.mulheresempreendedoraspi.com.br/site/wp-content/uploads/2017/03/dest-6.png"
        food_desc1_3.innerText = "A criação de galinha-da-angola, conhecida no Piauí como capote, vem do processo de colonização brasileiro. As aves vieram importadas da África, e logo se adaptaram ao clima brasileiro. No Piauí ela é muito apreciada na culinária, sobretudo no prato chaamdo arroz com capote, que também vai bem com o capote frito, feito farofa."

        food_name1_4.innerText = "Panelada Piauiense"
        food_img1_4.src = "https://meupiauioficial.com/wp-content/uploads/2017/05/panelada-do-piaui.jpg"
        food_desc1_4.innerText = "A Panelada Piauiense é uma das receitas mais famosas e saborosas do estado, simplesmente porque seu sabor é muito diferenciado e rico gastronomicamente, é aquele tipo de acompanhamento que faz qualquer outra comida ficar deliciosa. Esse prato é mais uma das criatividades do piauí. Habitualmente, ela é feita com bucho, tripas, nervo de boi e mocotó, adicionando temperos a gosto, para buscar um sabor ainda mais excepcional."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8113542.171589297!2d-47.69755108333961!3d-6.807450319798847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x782e57c7080b28f%3A0x5ae7715404f694a5!2zUGlhdcOt!5e0!3m2!1spt-BR!2sbr!4v1637171672042!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima do Piauí apresenta dois tipos climáticos: o clima Tropical quente e úmido (que tem influência do ambiente amazônico) e o clima Semiárido (que herda características do Sertão Nordestino)."

        travel_desc1.innerText = "O gasto total de uma viagem confortável de quatro dias seria em cerca de R$ 2.700,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Bahia"
        statetxt2.innerText = "A Bahia é um estado do nordeste brasileiro com paisagens que variam da costa tropical até a aridez do Sertão. A capital, Salvador, é conhecida por seu centro histórico, o Pelourinho, com uma rica arquitetura colonial do século XVII e assentado sobre a Baía de Todos-os-Santos. O Carnaval da cidade reúne foliões fantasiados que dançam ao som do samba e do axé em uma enorme festa de rua."
        state_img2.src = "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3048082:1613517407/Salvador.jpg"

        food_name2_1.innerText = "Acarajé"
        food_img2_1.src = "https://a.cdn-hotels.com/gdcs/production43/d1529/f40f10ad-7c31-4522-9f03-349419ab9c45.jpg"
        food_desc2_1.innerText = "O acarajé é uma especialidade gastronômica das culinárias africana e afro-brasileira. Trata-se de um bolinho feito de massa de feijão-fradinho, cebola e sal, e frito em azeite de dendê. Um prato extremamente famoso e típico na Bahia"

        food_name2_2.innerText = "Abará"
        food_img2_2.src = "https://a.cdn-hotels.com/gdcs/production40/d269/c3769b2a-381b-476c-b863-cc5728f85d06.jpg"
        food_desc2_2.innerText = "O Abará é um dos pratos típicos da culinária baiana, presente em muitos locais de Salvador. Um bolinho de feijão cozido em banho-maria e embrulhado em folha de bananeira, que pode acompanhar a moqueca baiana ou ser recheado com vatapá e caruru, servido com camarões seco ou uma saladinha verde."

        food_name2_3.innerText = "Vatapá"
        food_img2_3.src = "https://a.cdn-hotels.com/gdcs/production130/d394/8df37ba6-ba3c-44c4-b0b8-33c9b508a034.jpg"
        food_desc2_3.innerText = "O Vatapá é um prato típico da culinária nordestina e nortista, e tem presença garantida nos cardápios dos pratos típicos de da Bahia, seja servido como acompanhamento de outras comidinhas ou como recheio de um bom acarajé ou abará."

        food_name2_4.innerText = "Caldo de Sururu"
        food_img2_4.src = "https://a.cdn-hotels.com/gdcs/production14/d1593/2203bd05-6049-48f3-8462-5f4661671641.jpg"
        food_desc2_4.innerText = "O pequeno molusco conhecido como 'sururu', muito comum nos manguezais, sai direto de suas conchas para agradar aos paladares mais exigentes dos que provam as delícias dos pratos de Salvador. O caldinho de sururu é uma pedida indispensável como entrada dos pratos principais nos melhores restaurantes da capital baiana. A receita leva cebola, tomate, coentro, cheiro-verde e leite de coco."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7948669.111898074!2d-46.456551842282416!3d-13.400801239048862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b3%3A0x7e926f5fb491ed05!2sBahia!5e0!3m2!1spt-BR!2sbr!4v1639062047218!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima predominante no Estado da Bahia é o tropical, com médias de temperaturas anuais elevadas e máximas acima dos 30ºC. No sertão, o clima é semiárido, com pluviosidade anual acumulada abaixo dos 800 mm."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Bahia está em uma média de R$ 414 à R$ 566 (atualmente) dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Maranhão"
        statetxt3.innerText = "Maranhão, estado no nordeste brasileiro, é formado em parte pela Floresta Amazônica e pelas praias ao longo do Oceano Atlântico. Próximo à cidade de Barreirinhas, grandes dunas de areia branca criam paisagens que lembram um deserto no Parque Nacional Lençóis Maranhenses, onde lagoas de água fresca nas quais se pode nadar se formam durante a temporada de chuvas. É na capital, São Luís, que se encontra o agitado bairro histórico conhecido como Reviver."
        state_img3.src = "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2021/08/o-que-fazer-no-parque-nacional-dos-lencois-maranhenses-1.png"

        food_name3_1.innerText = "Arroz de Cuxá"
        food_img3_1.src = "https://conteudo.imguol.com.br/c/entretenimento/5e/2020/08/03/arroz-de-cuxa---receitas-eno-1596486529246_v2_1x1.jpg"
        food_desc3_1.innerText = "Tradicionalmente servido como acompanhamento para frutos-do-mar, peixes fritos e ensopados, esse arroz demanda maestria em seu preparo, porque a vinagreira é uma erva ácida e amarga, o que dificulta seu preparo e exige um controle de proporções para que o arroz não fique com um gosto ruim."

        food_name3_2.innerText = "Peixada Maranhense"
        food_img3_2.src = "https://www.essemundoenosso.com.br/wp-content/uploads/2017/07/culinaria-maranhense-3-peixada-740x493.jpg"
        food_desc3_2.innerText = "Parecida com uma moqueca, a peixada maranhense é um cozido bem temperado de peixe, normalmente feita de pescada, mas também pode ser feita com outros peixes parecidos. Seu diferencial é o ovo cozido que vai junto. Um prato único e típico da região, que vai bem até em dias de calor."

        food_name3_3.innerText = "Mingau de Tapioca"
        food_img3_3.src = "https://guiadaculinaria.com/wp-content/uploads/2019/09/mingau-de-tapioca-1200x720.jpg"
        food_desc3_3.innerText = "Muito consumido em festas de São João, o mingau de tapioca se parece com o curau de milho. De sabor muito leve e fácil de fazer, ele é uma delícia quando servido quente. Para fazê-lo, usa-se tapioca, leite condensado, leite de coco e canela."

        food_name3_4.innerText = "Juçará"
        food_img3_4.src = "https://www.buenasdicas.com/wp-content/uploads/2017/10/acai-jussara-sao-luis-maranhao-770x515.jpg"
        food_desc3_4.innerText = "A juçara é um parente próximo do açaí, de sabor mais suave e com menos calorias. Mas, seja juçara ou açaí, a forma típica de servir a iguaria é a mesma: acomapanhada de farinha ou camarão seco."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8131616.336870998!2d-49.77381877236813!3d-5.638238522210157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7edd77a9bcc1ce5%3A0x6276aba3d96c2934!2zTWFyYW5ow6Nv!5e0!3m2!1spt-BR!2sbr!4v1636377025778!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima Tropical é predominante no estado, com ocorrência de clima Equatorial na porção oeste e de uma pequena faixa de clima Semiárido no sudeste. No oeste do Maranhão, há a ocorrência de clima Equatorial, de temperaturas elevadas e alta pluviosidade na maior parte do ano, podendo chegar a 2000 mm anuais."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até São Luís (Capital do Maranhão) varia em média de R$ 790 à R$ 1100 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 6 && fclima == 2) {
        place1txt.innerText = "Pernambuco"
        statetxt1.innerText = "Pernambuco é um estado no nordeste do Brasil, no Oceano Atlântico. A sua capital moderna, o Recife, inclui um porto, a cidade velha e a popular área balnear de Boa Viagem. Ao largo da costa, o arquipélago vulcânico de Fernando de Noronha possui uma linha costeira dentada, praias poucos urbanizadas e um parque marítimo. A sul do Recife, a praia de Porto de Galinhas, protegida por um recife, oferece piscinas naturais. A norte encontra-se Olinda, uma cidade colonial situada entre uma vegetação exuberante."
        state_img1.src = "https://static.whow.com.br/wp-content/uploads/2019/10/Foto-Pxhere_Pernambuco-capa.jpg"

        food_name1_1.innerText = "Bolo Souza Leão"
        food_img1_1.src = "https://img.estadao.com.br/fotos/crop/600x400/resources/jpg/7/5/1453287641157.jpg"
        food_desc1_1.innerText = "É um dos mais tradicionais bolos da culinária pernambucana. O nome vem da família que repassou a receita. Tem consistência cremosa e é preparado com massa de mandioca, calda quente de açúcar, ovos e manteiga."

        food_name1_2.innerText = "Cartola"
        food_img1_2.src = "https://midiamax.uol.com.br/media/_versions/legacy/2019/02/cartola-patrimonio-imaterial-de-pe_widelg.jpg"
        food_desc1_2.innerText = "É uma das mais tradicionais sobremesas da gastronomia pernambucana. Seu preparo consiste em banana frita coberta com queijo coalho assado, polvilhada com açúcar e canela."

        food_name1_3.innerText = "Buchada"
        food_img1_3.src = "https://www.visiteobrasil.com.br/galerias/carac8-pernambuco-buchada/509-113302-culinaria-pernambucana-buchada-de-bode-foto-romero-cruzgr.jpg"
        food_desc1_3.innerText = "É um dos mais tradicionais pratos da cozinha sertaneja. Preparado com o bucho de bode ou carneiro, recheado com um picadinho do sangue coagulado, tripas e fígado, refogado com hortelã, limão, alho, cebola e temperos."

        food_name1_4.innerText = "Sarapatel"
        food_img1_4.src = "https://www.visiteobrasil.com.br/galerias/carac8-pernambuco-sarapatel/510-113324-culinaria-pernambucana-sarapatel-foto-barnaberestaurante-com-brgr.jpg"
        food_desc1_4.innerText = "Prato feito com sangue avinagrado e miúdos de porco, picadinhos em pequenos cubos, refogados em temperos e cozidos. É acompanhado com farinha de mandioca, podendo, também, ser servido como petisco ou tira-gosto para cachaça ou batida de limão."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058224.7548695286!2d-39.11264219095019!3d-6.633244590411314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7007c9d931c86c5%3A0x1de0196a93401726!2sPernambuco!5e0!3m2!1spt-BR!2sbr!4v1637164979870!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima de Pernambuco é o tropical com variações locais marcadas pela posição geográfica, pela falta de chuvas e pelos sistemas meteorológicos atuantes na região. Isso faz com que as chuvas se concentrem especialmente no Litoral e na Zona da Mata, caracterizando o clima destas mesorregiões como tropical úmido."

        travel_desc1.innerText = "O gasto total de uma viagem confortável de três dias seria em cerca de R$1.850,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Alagoas"
        statetxt2.innerText = "Alagoas é um pequeno estado do nordeste brasileiro cujo litoral tropical é marcado por praias de areia branca repletas de palmeiras, lagoas cristalinas e recifes de corais. Em Maceió, sua capital, estão localizadas as famosas praias Pajuçara e Ponta Verde, com hotéis, bares e restaurantes. Os recifes de corais decoram o litoral ao norte de Maceió que, por isso, tem o apelido de Costa dos Corais."
        state_img2.src = "https://revistaazul.voeazul.com.br/wp-content/uploads/2021/07/alagoas_destaque.jpg"

        food_name2_1.innerText = "Pituzada"
        food_img2_1.src = "https://www.visiteobrasil.com.br/galerias/carac8-alagoas-pituzada/483-115317-pituzada-foto-nide-linsgr.jpg"
        food_desc2_1.innerText = "O pitu é um lagostim de água doce, conhecido como “lagostinha”. Na culinária alagoana, ele é um ingrediente importante na preparação de diversos pratos. A pituzada é também um caldo mais espesso, preparado com leite de coco, extrato de tomate, farinha de mandioca, cebola, alho e cheiro-verde. Normalmente é servido com arroz e pirão e é muito apreciada pelos alagoanos e pelos turistas que vão conhecer o estado."

        food_name2_2.innerText = "Siri Mole ao Coco"
        food_img2_2.src = "https://www.praiasdemaceio.com/wp-content/uploads/2017/05/Siri-mole-ao-coco.jpg"
        food_desc2_2.innerText = "O coco é a base da preparação de muitos pratos do estado, sobretudo quando acompanhado por algum fruto do mar. O siri mole, por exemplo, é um dos frutos do mar mais consumidos do estado. O siri mole ao coco, que parece uma moqueca, é feito com leite de coco, siri mole refogado, alho, cebola, pimentão, tomate, coentro, farinha de mandioca e outros temperos da região, sendo servido acompanhado de arroz e farofa."

        food_name2_3.innerText = "Arrumadinho de Feijão"
        food_img2_3.src = "https://coperaguas.com.br/blog/wp-content/uploads/2020/01/receita-de-arrumadinho-de-feijao.jpg"
        food_desc2_3.innerText = "O arrumadinho de feijão é um prato muito consumido no estado, muito simples e saboroso. Pode ser feito com feijão verde ou feijão fradinho, sendo preparado com carne de sol, linguiça e ervas frescas. Tradicionalmente é servido com molho vinagrete e farofa."

        food_name2_4.innerText = "Feijão de Coco"
        food_img2_4.src = "https://agenciach.com.br/wp-content/uploads/2020/03/receita-de-feijao-com-coco.jpg"
        food_desc2_4.innerText = "O feijão de coco é muito consumido em todo o Nordeste. Parecido com o caldinho de feijão, prato típico carioca, o feijão de coco é um caldo cremoso de feijão, podendo ser feito com feijão preto ou feijão carioca, preparado com coco ralado, leite de coco, cebola e pimenta. Apesar da combinação soar um pouco estranha, é um prato tradicional cheio de sabor, perfeito para ser servido com peixe e arroz."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4027769.3781213453!2d-38.939266155554165!3d-9.649517704358482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700fd232f520d9b%3A0x7e2d39e57f3df62d!2sAlagoas!5e0!3m2!1spt-BR!2sbr!4v1639065805289!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima de Alagoas é o Tropical Atlântico, em virtude de sua posição entre os trópicos e próximo ao mar. Enquanto no Leste Alagoano, as chuvas são mais regulares, no Sertão Alagoano, o índice pluviométrico é baixo, tornando a região muito seca."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Alagoas é em média de R$ 707 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Ceará"
        statetxt3.innerText = "O Ceará, um estado do nordeste brasileiro, tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas. O balneário de Canoa Quebrada tem enormes dunas de areia rosadas e a Rua Dragão do Mar, muito movimentada e também conhecida como Broadway. A cidade isolada de Jericoacoara, cercada pelo Parque Nacional de Jericoacoara, repleto de dunas, é famosa por suas ruas de areia, pela prática de windsurfe e pelo pôr do sol incomum em tons de verde."
        state_img3.src = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/77000/77772-Fortaleza-And-Vicinity.jpg"

        food_name3_1.innerText = "Baião de dois"
        food_img3_1.src = "https://img.cybercook.com.br/imagens/receitas/871/baiao-de-dois-de-fortal-1.jpeg"
        food_desc3_1.innerText = "Uma das comidas mais tradicionais de Fortaleza. Com ingredientes bem brasileiros como arroz, feijão-de-corda e queijo coalho, o baião é uma iguaria de sabor único. Normalmente é servido juntamente com paçoca de carne seca ou com macaxeira cozida, farofa e a incomparável manteiga de garrafa."

        food_name3_2.innerText = "Moqueca Cearense"
        food_img3_2.src = "https://t2.rg.ltmcdn.com/pt/images/6/8/0/img_peixada_cearense_3086_orig.jpg"
        food_desc3_2.innerText = "Com um sabor inesquecível, a moqueca cearense pode ser encontrada em todas as praias do estado, sendo que a receita da capital leva um toque especial do suco de caju. O prato nos presenteia com um sabor incomparável, conquistando quem prova."

        food_name3_3.innerText = "Rapadura"
        food_img3_3.src = "https://www.opovo.com.br/_midias/jpg/2019/11/13/rapadura_92_1_20180815102630-10483946.jpg"
        food_desc3_3.innerText = "O Ceará é o maior produtor de rapadura do Brasil. O doce típico é uma delícia e pode ser encontrado em diversos formatos e sabores, como de chocolate, de caju e de laranja, as combinações são inumeráveis e deliciosas."

        food_name3_4.innerText = "Caranguejo"
        food_img3_4.src = "https://www.opovo.com.br/_midias/jpg/2020/05/14//696x390/1_fjs_2243-12604558.jpg"
        food_desc3_4.innerText = "O carangueijo é tão amado no Ceará, que possui um dia específico na semana onde há promoções em todas as barracas da Praia do Futuro. Basta ir nos quiosques às quintas-feiras para provar e se deliciar com todas as opções."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4067993.4674452688!2d-41.58267516023761!3d-5.317193530296392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bdb31827e686c5%3A0x3bb435e0af957842!2zQ2VhcsOh!5e0!3m2!1spt-BR!2sbr!4v1639067254706!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima predominante no território cearense é o Tropical Quente Semiárido, abrangendo 9 das 184 sedes municipais. Esse tipo climático apresenta características como escassez e irregularidade pluviométrica associado a altas taxas de evapotranspiração."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Ceará é em média de R$ 661 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 6 && fclima == 3) {
        place1txt.innerText = "Maranhão"
        statetxt1.innerText = "Maranhão, estado no nordeste brasileiro, é formado em parte pela Floresta Amazônica e pelas praias ao longo do Oceano Atlântico. Próximo à cidade de Barreirinhas, grandes dunas de areia branca criam paisagens que lembram um deserto no Parque Nacional Lençóis Maranhenses, onde lagoas de água fresca nas quais se pode nadar se formam durante a temporada de chuvas. É na capital, São Luís, que se encontra o agitado bairro histórico conhecido como Reviver."
        state_img1.src = "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2021/08/o-que-fazer-no-parque-nacional-dos-lencois-maranhenses-1.png"

        food_name1_1.innerText = "Arroz de Cuxá"
        food_img1_1.src = "https://conteudo.imguol.com.br/c/entretenimento/5e/2020/08/03/arroz-de-cuxa---receitas-eno-1596486529246_v2_1x1.jpg"
        food_desc1_1.innerText = "Tradicionalmente servido como acompanhamento para frutos-do-mar, peixes fritos e ensopados, esse arroz demanda maestria em seu preparo, porque a vinagreira é uma erva ácida e amarga, o que dificulta seu preparo e exige um controle de proporções para que o arroz não fique com um gosto ruim."

        food_name1_2.innerText = "Peixada Maranhense"
        food_img1_2.src = "https://www.essemundoenosso.com.br/wp-content/uploads/2017/07/culinaria-maranhense-3-peixada-740x493.jpg"
        food_desc1_2.innerText = "Parecida com uma moqueca, a peixada maranhense é um cozido bem temperado de peixe, normalmente feita de pescada, mas também pode ser feita com outros peixes parecidos. Seu diferencial é o ovo cozido que vai junto. Um prato único e típico da região, que vai bem até em dias de calor."

        food_name1_3.innerText = "Mingau de Tapioca"
        food_img1_3.src = "https://guiadaculinaria.com/wp-content/uploads/2019/09/mingau-de-tapioca-1200x720.jpg"
        food_desc1_3.innerText = "Muito consumido em festas de São João, o mingau de tapioca se parece com o curau de milho. De sabor muito leve e fácil de fazer, ele é uma delícia quando servido quente. Para fazê-lo, usa-se tapioca, leite condensado, leite de coco e canela."

        food_name1_4.innerText = "Juçará"
        food_img1_4.src = "https://www.buenasdicas.com/wp-content/uploads/2017/10/acai-jussara-sao-luis-maranhao-770x515.jpg"
        food_desc1_4.innerText = "A juçara é um parente próximo do açaí, de sabor mais suave e com menos calorias. Mas, seja juçara ou açaí, a forma típica de servir a iguaria é a mesma: acomapanhada de farinha ou camarão seco."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8131616.336870998!2d-49.77381877236813!3d-5.638238522210157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7edd77a9bcc1ce5%3A0x6276aba3d96c2934!2zTWFyYW5ow6Nv!5e0!3m2!1spt-BR!2sbr!4v1636377025778!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima Tropical é predominante no estado, com ocorrência de clima Equatorial na porção oeste e de uma pequena faixa de clima Semiárido no sudeste. No oeste do Maranhão, há a ocorrência de clima Equatorial, de temperaturas elevadas e alta pluviosidade na maior parte do ano, podendo chegar a 2000 mm anuais."

        travel_desc1.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até São Luís (Capital do Maranhão) varia em média de R$ 790 à R$ 1100 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Bahia"
        statetxt2.innerText = "A Bahia é um estado do nordeste brasileiro com paisagens que variam da costa tropical até a aridez do Sertão. A capital, Salvador, é conhecida por seu centro histórico, o Pelourinho, com uma rica arquitetura colonial do século XVII e assentado sobre a Baía de Todos-os-Santos. O Carnaval da cidade reúne foliões fantasiados que dançam ao som do samba e do axé em uma enorme festa de rua."
        state_img2.src = "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3048082:1613517407/Salvador.jpg"

        food_name2_1.innerText = "Acarajé"
        food_img2_1.src = "https://a.cdn-hotels.com/gdcs/production43/d1529/f40f10ad-7c31-4522-9f03-349419ab9c45.jpg"
        food_desc2_1.innerText = "O acarajé é uma especialidade gastronômica das culinárias africana e afro-brasileira. Trata-se de um bolinho feito de massa de feijão-fradinho, cebola e sal, e frito em azeite de dendê. Um prato extremamente famoso e típico na Bahia"

        food_name2_2.innerText = "Abará"
        food_img2_2.src = "https://a.cdn-hotels.com/gdcs/production40/d269/c3769b2a-381b-476c-b863-cc5728f85d06.jpg"
        food_desc2_2.innerText = "O Abará é um dos pratos típicos da culinária baiana, presente em muitos locais de Salvador. Um bolinho de feijão cozido em banho-maria e embrulhado em folha de bananeira, que pode acompanhar a moqueca baiana ou ser recheado com vatapá e caruru, servido com camarões seco ou uma saladinha verde."

        food_name2_3.innerText = "Vatapá"
        food_img2_3.src = "https://a.cdn-hotels.com/gdcs/production130/d394/8df37ba6-ba3c-44c4-b0b8-33c9b508a034.jpg"
        food_desc2_3.innerText = "O Vatapá é um prato típico da culinária nordestina e nortista, e tem presença garantida nos cardápios dos pratos típicos de da Bahia, seja servido como acompanhamento de outras comidinhas ou como recheio de um bom acarajé ou abará."

        food_name2_4.innerText = "Caldo de Sururu"
        food_img2_4.src = "https://a.cdn-hotels.com/gdcs/production14/d1593/2203bd05-6049-48f3-8462-5f4661671641.jpg"
        food_desc2_4.innerText = "O pequeno molusco conhecido como 'sururu', muito comum nos manguezais, sai direto de suas conchas para agradar aos paladares mais exigentes dos que provam as delícias dos pratos de Salvador. O caldinho de sururu é uma pedida indispensável como entrada dos pratos principais nos melhores restaurantes da capital baiana. A receita leva cebola, tomate, coentro, cheiro-verde e leite de coco."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7948669.111898074!2d-46.456551842282416!3d-13.400801239048862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b3%3A0x7e926f5fb491ed05!2sBahia!5e0!3m2!1spt-BR!2sbr!4v1639062047218!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima predominante no Estado da Bahia é o tropical, com médias de temperaturas anuais elevadas e máximas acima dos 30ºC. No sertão, o clima é semiárido, com pluviosidade anual acumulada abaixo dos 800 mm."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Bahia está em uma média de R$ 414 à R$ 566 (atualmente) dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio Grande do Norte"
        statetxt3.innerText = "Rio Grande do Norte é um estado na extremidade nordeste do Brasil. A capital, Natal, fica numa costa repleta de praias onde se encontra o Forte dos Reis Magos, em forma de estrela, um forte português do século XVI. Ponta Negra é uma praia enquadrada pela enorme duna, Morro do Careca, um símbolo da cidade. A sul, a Praia de Pipa é uma estância célebre pelo surf e pelos golfinhos."
        state_img3.src = "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/07/Morro-do-careca-Natal.jpg"

        food_name3_1.innerText = "Ginga com Tapioca"
        food_img3_1.src = "https://agorarn.com.br/files/uploads/2018/12/ginga-com-tapioca.jpg"
        food_desc3_1.innerText = "A Ginga com Tapioca é uma delícia potiguar. O nome curioso do prato se deve ao apelido do peixe manjuba, que, normalmente, mede de 10 a 15 centímetros. Para completar essa mistura de tirar água da boca, o povo do Rio Grande do Norte mistura o pescado com a goma de mandioca, servindo para os turistas uma iguaria fresca e pouco calórica."

        food_name3_2.innerText = "Escondidinho de Carne Seca"
        food_img3_2.src = "https://www.praiasdenatal.com.br/wp-content/uploads/2014/09/Escondidinho1.jpg"
        food_desc3_2.innerText = "O Escondidinho de Carne Seca é uma mistura de purê de mandioca (também chamado de macaxeira na região) e carne maturada (a famosa charque). Uma vez montado com queijo ou requeijão em uma travessa, termina de gratinar no forno."

        food_name3_3.innerText = "Caranguejada"
        food_img3_3.src = "https://www.praiasdenatal.com.br/wp-content/uploads/2014/08/caranguejada-com-pirao1.jpg"
        food_desc3_3.innerText = "O prato, normalmente, é caldoso, podendo ter um visual bastante semelhante ao da peixada. Ao final, a iguaria é servida unicamente ou acompanhada por porções de arroz, pirão ou batata, por exemplo."

        food_name3_4.innerText = "Baião de Dois de Camarão"
        food_img3_4.src = "https://media-cdn.tripadvisor.com/media/photo-s/0c/4a/d6/a5/camarao-nordestino.jpg"
        food_desc3_4.innerText = "O Baião de Dois é um prato muito conhecido no Nordeste, sendo preparado com feijão-de-corda seco ou verde, arroz branco e queijo coalho. No entanto, como tudo recebe um toque magnífico no Rio Grande do Norte, a receita passou a ser servida com camarão, tornando-se uma verdadeira obra-prima para os apaixonados por crustáceos."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031981.7490146954!2d-37.896658696606345!3d-5.895691295285868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b04df549e8eaad%3A0xa92509ac1c4d9ec4!2sRio%20Grande%20do%20Norte!5e0!3m2!1spt-BR!2sbr!4v1637173247370!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Rio Grande do Norte é o Tropical, sendo do subtipo Tropical Úmido no litoral e, ainda, do subtipo Tropical Semiárido no interior. O Sertão potiguar, por exemplo, tem no clima Semiárido a principal explicação pela escassez de chuvas."

        travel_desc3.innerText = "O gasto total de uma viagem de 7 dias seria em cerca de R$ 2.588,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 6 && fclima == 4) {
        place1txt.innerText = "Ceará"
        statetxt1.innerText = "O Ceará, um estado do nordeste brasileiro, tem um interior montanhoso e um litoral atlântico com impressionantes falésias vermelhas. O balneário de Canoa Quebrada tem enormes dunas de areia rosadas e a Rua Dragão do Mar, muito movimentada e também conhecida como Broadway. A cidade isolada de Jericoacoara, cercada pelo Parque Nacional de Jericoacoara, repleto de dunas, é famosa por suas ruas de areia, pela prática de windsurfe e pelo pôr do sol incomum em tons de verde."
        state_img1.src = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/77000/77772-Fortaleza-And-Vicinity.jpg"

        food_name1_1.innerText = "Baião de dois"
        food_img1_1.src = "https://img.cybercook.com.br/imagens/receitas/871/baiao-de-dois-de-fortal-1.jpeg"
        food_desc1_1.innerText = "Uma das comidas mais tradicionais de Fortaleza. Com ingredientes bem brasileiros como arroz, feijão-de-corda e queijo coalho, o baião é uma iguaria de sabor único. Normalmente é servido juntamente com paçoca de carne seca ou com macaxeira cozida, farofa e a incomparável manteiga de garrafa."

        food_name1_2.innerText = "Moqueca Cearense"
        food_img1_2.src = "https://t2.rg.ltmcdn.com/pt/images/6/8/0/img_peixada_cearense_3086_orig.jpg"
        food_desc1_2.innerText = "Com um sabor inesquecível, a moqueca cearense pode ser encontrada em todas as praias do estado, sendo que a receita da capital leva um toque especial do suco de caju. O prato nos presenteia com um sabor incomparável, conquistando quem prova."

        food_name1_3.innerText = "Rapadura"
        food_img1_3.src = "https://www.opovo.com.br/_midias/jpg/2019/11/13/rapadura_92_1_20180815102630-10483946.jpg"
        food_desc1_3.innerText = "O Ceará é o maior produtor de rapadura do Brasil. O doce típico é uma delícia e pode ser encontrado em diversos formatos e sabores, como de chocolate, de caju e de laranja, as combinações são inumeráveis e deliciosas."

        food_name1_4.innerText = "Caranguejo"
        food_img1_4.src = "https://www.opovo.com.br/_midias/jpg/2020/05/14//696x390/1_fjs_2243-12604558.jpg"
        food_desc1_4.innerText = "O carangueijo é tão amado no Ceará, que possui um dia específico na semana onde há promoções em todas as barracas da Praia do Futuro. Basta ir nos quiosques às quintas-feiras para provar e se deliciar com todas as opções."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4067993.4674452688!2d-41.58267516023761!3d-5.317193530296392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bdb31827e686c5%3A0x3bb435e0af957842!2zQ2VhcsOh!5e0!3m2!1spt-BR!2sbr!4v1639067254706!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima predominante no território cearense é o Tropical Quente Semiárido, abrangendo 9 das 184 sedes municipais. Esse tipo climático apresenta características como escassez e irregularidade pluviométrica associado a altas taxas de evapotranspiração."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Ceará é em média de R$ 661 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Piauí"
        statetxt2.innerText = "Piauí é um estado no nordeste do Brasil conhecido pelos parques nacionais. O Parque Nacional Serra da Capivara, no sudeste, possui sítios arqueológicos com pinturas rupestres pré-históricas. Nas proximidades, o Parque Nacional Serra das Confusões tem gigantescas formações rochosas e grandes áreas de caatinga (vegetação semiárida), onde vivem aves em risco de extinção. As mangueiras ladeiam as ruas da capital à beira-rio, Teresina."
        state_img2.src = "https://exame.com/wp-content/uploads/2018/06/thinkstockphotos-886667882-e1528831390573.jpg"

        food_name2_1.innerText = "Maria Isabel"
        food_img2_1.src = "https://img-global.cpcdn.com/recipes/39eaaf2ac385653c/680x482cq70/foto-principal-da-receita-arroz-maria-isabel-do-piaui.webp"
        food_desc2_1.innerText = "Arroz Maria Isabel é um dos pratos que mais representam o Piauí, que surgiu entre as famílias mais humildes do estado. Conta a história, que os homens dessas famílias mais pobres, eram os que consumiam carnes. Uma mãe tirou um pedaço de carne, cortou em pedacinhos e misturou com arroz, para que toda família pudesse comer carne, e deu ao prato o nome das filhas, Maria e Izabel."

        food_name2_2.innerText = "Carne de Sol"
        food_img2_2.src = "https://s2.glbimg.com/U8uguGGrZTSnNV0F9mYE7Hw5VAI=/0x0:1237x692/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/p/B/qFHWsdT62dzJZoCICQ8g/captura-de-tela-2020-04-27-as-16.14.45.jpg"
        food_desc2_2.innerText = "A carne de sol, também conhecida como carne seca, é um alimento que começou a ser consumido no Brasil ainda no período colonial. Com o tempo, o ingrediente se tornou um patrimônio cultural do município de Campo Maior, localizado a 81 km de Teresina."

        food_name2_3.innerText = "Arroz com Capote"
        food_img2_3.src = "http://www.mulheresempreendedoraspi.com.br/site/wp-content/uploads/2017/03/dest-6.png"
        food_desc2_3.innerText = "A criação de galinha-da-angola, conhecida no Piauí como capote, vem do processo de colonização brasileiro. As aves vieram importadas da África, e logo se adaptaram ao clima brasileiro. No Piauí ela é muito apreciada na culinária, sobretudo no prato chaamdo arroz com capote, que também vai bem com o capote frito, feito farofa."

        food_name2_4.innerText = "Panelada Piauiense"
        food_img2_4.src = "https://meupiauioficial.com/wp-content/uploads/2017/05/panelada-do-piaui.jpg"
        food_desc2_4.innerText = "A Panelada Piauiense é uma das receitas mais famosas e saborosas do estado, simplesmente porque seu sabor é muito diferenciado e rico gastronomicamente, é aquele tipo de acompanhamento que faz qualquer outra comida ficar deliciosa. Esse prato é mais uma das criatividades do piauí. Habitualmente, ela é feita com bucho, tripas, nervo de boi e mocotó, adicionando temperos a gosto, para buscar um sabor ainda mais excepcional."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8113542.171589297!2d-47.69755108333961!3d-6.807450319798847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x782e57c7080b28f%3A0x5ae7715404f694a5!2zUGlhdcOt!5e0!3m2!1spt-BR!2sbr!4v1637171672042!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do Piauí apresenta dois tipos climáticos: o clima Tropical quente e úmido (que tem influência do ambiente amazônico) e o clima Semiárido (que herda características do Sertão Nordestino)."

        travel_desc2.innerText = "O gasto total de uma viagem confortável de quatro dias seria em cerca de R$ 2.700,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio Grande do Norte"
        statetxt3.innerText = "Rio Grande do Norte é um estado na extremidade nordeste do Brasil. A capital, Natal, fica numa costa repleta de praias onde se encontra o Forte dos Reis Magos, em forma de estrela, um forte português do século XVI. Ponta Negra é uma praia enquadrada pela enorme duna, Morro do Careca, um símbolo da cidade. A sul, a Praia de Pipa é uma estância célebre pelo surf e pelos golfinhos."
        state_img3.src = "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/07/Morro-do-careca-Natal.jpg"

        food_name3_1.innerText = "Ginga com Tapioca"
        food_img3_1.src = "https://agorarn.com.br/files/uploads/2018/12/ginga-com-tapioca.jpg"
        food_desc3_1.innerText = "A Ginga com Tapioca é uma delícia potiguar. O nome curioso do prato se deve ao apelido do peixe manjuba, que, normalmente, mede de 10 a 15 centímetros. Para completar essa mistura de tirar água da boca, o povo do Rio Grande do Norte mistura o pescado com a goma de mandioca, servindo para os turistas uma iguaria fresca e pouco calórica."

        food_name3_2.innerText = "Escondidinho de Carne Seca"
        food_img3_2.src = "https://www.praiasdenatal.com.br/wp-content/uploads/2014/09/Escondidinho1.jpg"
        food_desc3_2.innerText = "O Escondidinho de Carne Seca é uma mistura de purê de mandioca (também chamado de macaxeira na região) e carne maturada (a famosa charque). Uma vez montado com queijo ou requeijão em uma travessa, termina de gratinar no forno."

        food_name3_3.innerText = "Caranguejada"
        food_img3_3.src = "https://www.praiasdenatal.com.br/wp-content/uploads/2014/08/caranguejada-com-pirao1.jpg"
        food_desc3_3.innerText = "O prato, normalmente, é caldoso, podendo ter um visual bastante semelhante ao da peixada. Ao final, a iguaria é servida unicamente ou acompanhada por porções de arroz, pirão ou batata, por exemplo."

        food_name3_4.innerText = "Baião de Dois de Camarão"
        food_img3_4.src = "https://media-cdn.tripadvisor.com/media/photo-s/0c/4a/d6/a5/camarao-nordestino.jpg"
        food_desc3_4.innerText = "O Baião de Dois é um prato muito conhecido no Nordeste, sendo preparado com feijão-de-corda seco ou verde, arroz branco e queijo coalho. No entanto, como tudo recebe um toque magnífico no Rio Grande do Norte, a receita passou a ser servida com camarão, tornando-se uma verdadeira obra-prima para os apaixonados por crustáceos."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031981.7490146954!2d-37.896658696606345!3d-5.895691295285868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b04df549e8eaad%3A0xa92509ac1c4d9ec4!2sRio%20Grande%20do%20Norte!5e0!3m2!1spt-BR!2sbr!4v1637173247370!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Rio Grande do Norte é o Tropical, sendo do subtipo Tropical Úmido no litoral e, ainda, do subtipo Tropical Semiárido no interior. O Sertão potiguar, por exemplo, tem no clima Semiárido a principal explicação pela escassez de chuvas."

        travel_desc3.innerText = "O gasto total de uma viagem de 7 dias seria em cerca de R$ 2.588,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 7 && fclima == 1) {
        place1txt.innerText = "Mato Grosso do Sul"
        statetxt1.innerText = "Mato Grosso do Sul é uma das 27 unidades federativas do Brasil. Localiza-se no sul da Região Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goiás e Minas Gerais, São Paulo e Paraná; e dois países sul-americanos: Paraguai e Bolívia."
        state_img1.src = "https://blog.malupires.com.br/wp-content/uploads/2021/07/bonito-mato-grosso-do-sul-pontos-turisticos-2.jpg"

        food_name1_1.innerText = "Chipa"
        food_img1_1.src = "https://aquelemato.org/wp-content/uploads/2018/07/chipa-paraguaia-mato-grosso-do-sul-2.jpg"
        food_desc1_1.innerText = "Essa tradicional receita tem origem na celebração da Sexta-feira Santa, quando, devido ao resguardo religioso, as mulheres preparavam uma quantidade de chipa na véspera para ser consumida no dia seguinte. Atualmente é servida sempre e em qualquer local, sendo uma 'prima' do pão-de-queijo-mineiro, porém com consistência e sabor próprios."

        food_name1_2.innerText = "Doce de Jaracatiá"
        food_img1_2.src = "https://media-cdn.tripadvisor.com/media/photo-s/14/12/e3/5c/sorvete-de-jaracatia.jpg"
        food_desc1_2.innerText = "O jaracatiá ou mamão-de-veado (Jacaratia spinosa), é uma árvore da família do mamoeiro, ainda bastante abundante pois a madeira não tem utilidade comercial (é oca e mole). Seu fruto é comestível, procurado por muitos animais, mas é necessário tirar o leite de sua casca antes de comer, pois pode ser tóxico. Pode-se fazer um delicioso doce com seu fruto e com seu caule."

        food_name1_3.innerText = "Locro"
        food_img1_3.src = "http://portalfaces.com.br/wp-content/uploads/2020/04/4cb258361327b308ae338549d7b5c827.jpg"
        food_desc1_3.innerText = "Essa é a denominação para um prato à base de canjica de milho e vértebras de boi, denominadas como 'puchero'. É um alimento bastante forte, sendo preparado logo durante o carneamento do boi, com a finalidade de fortalecer os peões, empreiteiros e outros trabalhadores das fazendas nas regiões de fronteira entre Brasil e principalmente Paraguai."

        food_name1_4.innerText = "Marmelada"
        food_img1_4.src = "https://www.greenme.com.br/wp-content/uploads/2017/11/marmelada.jpg"
        food_desc1_4.innerText = "O marmelo, fruta que ocorre na região, pode ser consumida diretamente da árvore, mas o doce preparado é um dos mais antigos e tradicionais do Brasil, tanto que o nome “marmelada” é hoje utilizado para designar compotas de sabores diferentes inclusive em outros países."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650744.986605649!2d-59.04165762147003!3d-20.558825377289097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947e91dbe29f7383%3A0x351cd8e9695410ac!2sMato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1636379447700!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima predominante no Estado do Mato Grosso do Sul é o clima tropical, sendo o clima tropical semiúmido o predominante no território do Estado. Este tipo de clima se caracteriza por apresentar verões quentes e chuvosos e inverno seco e pouco frio."

        travel_desc1.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Campo Grande (Capital do Mato Grosso do Sul) varia em média de R$ 485 à R$ 1450 dependendo da companhia aérea e outras variantes como tipo de voo, horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Goiás"
        statetxt2.innerText = "Goiás, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros é uma reserva de montanhas paisagísticas com trilhos, rios, desfiladeiros e quedas de água. Fundadas durante o século XVIII, as cidades do ciclo de ouro de Pirenópolis e Goiás Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas cristãs."
        state_img2.src = "https://i.ytimg.com/vi/5OjKEC8KmWY/maxresdefault.jpg"

        food_name2_1.innerText = "Galinhada"
        food_img2_1.src = "https://i1.wp.com/files.agro20.com.br/uploads/2020/04/Galinhada-1.jpg"
        food_desc2_1.innerText = "O Prato preferido do Goiano é a Galinhada. E não é só arroz com galinha, mas pode ser acompanhada também com milho e o famoso pequi ou guariroba, açafrão, pimenta de cheiro e muita cebolinha verde."

        food_name2_2.innerText = "Empadão"
        food_img2_2.src = "https://t1.rg.ltmcdn.com/pt/images/1/1/9/img_empadao_goiano_2911_orig.jpg"
        food_desc2_2.innerText = "É uma torta salgada típica da região. Um belo prato feito com uma massa fina recheada com frango, queijo minas em cubos, azeitona e linguiça."

        food_name2_3.innerText = "Pamonha"
        food_img2_3.src = "https://uploads.emaisgoias.com.br/2021/01/Captura-de-Tela-2021-01-14-às-13.45.32.png"
        food_desc2_3.innerText = "Em quase toda esquina de Goiânia existe uma Pamonharia. É tradição em Goiás reunir a família para fazer pamonha. Tem Pamonha doce, sal, a moda (geralmente com linguiça, queijo minas, muita cebolinha verde e pimenta). Com frango e catupiry, com creme de pequi, de jiló etc. E ainda tem pamonha frita."

        food_name2_4.innerText = "Peixe na Telha"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2015/05/peixe-na-telha-comunidade-mais-comunidade.jpg"
        food_desc2_4.innerText = "Esse prato esáa sempre presente nos restaurantes e nas casas dos goianos. Na receita tradicional é usado peixe de água doce, de couro e em postas, geralmente Pintado ou Surubim com molho de tomate, açafrão, leite de coco e creme de leite. Acompanha arroz branco e um pirão feito com o caldo da cabeça e da espinha do peixe."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858528.037722338!2d-54.074770566586125!3d-15.900063051386356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935db96386b920f5%3A0x8c6d8f8cd8cf0d3!2zR29pw6Fz!5e0!3m2!1spt-BR!2sbr!4v1636375262710!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O Estado de Goiás possui clima predominante tropical semi-úmido, suas características se apresentam em duas estações distintas, uma de seca (maio a setembro) e outra chuvosa (outubro a abril)."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Goiânia (Capital de Goiás) varia em média de R$ 385 à R$ 750 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Mato Grosso"
        statetxt3.innerText = "Mato Grosso, um grande estado no centro-oeste brasileiro, é coberto na maioria pela floresta tropical amazónica, as zonas húmidas e as planícies da savana. A capital, Cuiabá, é um centro de viagens que remonta à corrida ao ouro do século XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimarães possui áreas de caminhada com penhascos em arenito, quedas de água e cavernas. As extensas zonas húmidas do Pantanal albergam diversas espécies selvagens, incluindo araras, caimões e jaguares."
        state_img3.src = "https://hotelmt.com.br/wp-content/uploads/2017/09/113047-5-destinos-imperdiveis-para-turismo-no-mato-grosso.jpg"

        food_name3_1.innerText = "Mojica de Pintado"
        food_img3_1.src = "https://hotelmt.com.br/wp-content/uploads/2020/03/original-2187e32d37ac80325435f96992898246.jpg"
        food_desc3_1.innerText = "Essa é uma das comidas típicas do Mato Grosso mais deliciosas que existem. É uma espécie de caldo com esse enorme pescado, somado ao sabor da mandioca e outros temperos marcantes. É, sem dúvidas, o orgulho da cozinha mato-grossense e o prato é um dos mais elaborados da culinária local."

        food_name3_2.innerText = "Furrundu"
        food_img3_2.src = "https://leiamaisba.com.br/upload/images/2013-04-22/20130422093223_doce.jpg"
        food_desc3_2.innerText = "O furrundu é um doce típico que leva mamão ralado, gengibre, cravo, rapadura e canela. Essa sobremesa é oferecida em quase todos os estabelecimentos, como restaurantes, bares e até em postos de gasolina. "

        food_name3_3.innerText = "Caldo de Piranha"
        food_img3_3.src = "https://paraisodacozinha.com.br/wp-content/uploads/caldo-de-piranha.jpg"
        food_desc3_3.innerText = "O caldo é apreciado por moradores da região, mas qualquer turista tem a oportunidade de experimentar seu sabor único. A sopa é encorpada e os locais afirmam ser um energético natural, famoso por curar aquela ressaca de uma noite agitada."

        food_name3_4.innerText = "Farofa de Banana-da-Terra"
        food_img3_4.src = "https://i2.wp.com/www.saibatudomt.com.br/wp-content/uploads/2018/04/blog1.png"
        food_desc3_4.innerText = "A farinha de mandioca ganha um toque especial com a banana-da-terra e há quem ainda incremente com carne seca frita."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952284.738864267!2d-64.97077761310251!3d-12.542586149809685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e748370319%3A0xc66268e27d2181fb!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1636377806190!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O estado de Mato Grosso apresenta sensível variedade de climas. Prevalece o tropical super-úmido de monção, com elevada temperatura média anual, superior a 24º C e alta pluviosidade (2.000mm anuais); e o tropical, com chuvas de verão e inverno seco, caracterizado por médias de 23°C no planalto."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Cuiabá (Capital do Mato Grosso) varia em média de R$ 455 à R$ 930 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 7 && fclima == 2) {
        place1txt.innerText = "Mato Grosso do Sul"
        statetxt1.innerText = "Mato Grosso do Sul é uma das 27 unidades federativas do Brasil. Localiza-se no sul da Região Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goiás e Minas Gerais, São Paulo e Paraná; e dois países sul-americanos: Paraguai e Bolívia."
        state_img1.src = "https://blog.malupires.com.br/wp-content/uploads/2021/07/bonito-mato-grosso-do-sul-pontos-turisticos-2.jpg"

        food_name1_1.innerText = "Chipa"
        food_img1_1.src = "https://aquelemato.org/wp-content/uploads/2018/07/chipa-paraguaia-mato-grosso-do-sul-2.jpg"
        food_desc1_1.innerText = "Essa tradicional receita tem origem na celebração da Sexta-feira Santa, quando, devido ao resguardo religioso, as mulheres preparavam uma quantidade de chipa na véspera para ser consumida no dia seguinte. Atualmente é servida sempre e em qualquer local, sendo uma 'prima' do pão-de-queijo-mineiro, porém com consistência e sabor próprios."

        food_name1_2.innerText = "Doce de Jaracatiá"
        food_img1_2.src = "https://media-cdn.tripadvisor.com/media/photo-s/14/12/e3/5c/sorvete-de-jaracatia.jpg"
        food_desc1_2.innerText = "O jaracatiá ou mamão-de-veado (Jacaratia spinosa), é uma árvore da família do mamoeiro, ainda bastante abundante pois a madeira não tem utilidade comercial (é oca e mole). Seu fruto é comestível, procurado por muitos animais, mas é necessário tirar o leite de sua casca antes de comer, pois pode ser tóxico. Pode-se fazer um delicioso doce com seu fruto e com seu caule."

        food_name1_3.innerText = "Locro"
        food_img1_3.src = "http://portalfaces.com.br/wp-content/uploads/2020/04/4cb258361327b308ae338549d7b5c827.jpg"
        food_desc1_3.innerText = "Essa é a denominação para um prato à base de canjica de milho e vértebras de boi, denominadas como 'puchero'. É um alimento bastante forte, sendo preparado logo durante o carneamento do boi, com a finalidade de fortalecer os peões, empreiteiros e outros trabalhadores das fazendas nas regiões de fronteira entre Brasil e principalmente Paraguai."

        food_name1_4.innerText = "Marmelada"
        food_img1_4.src = "https://www.greenme.com.br/wp-content/uploads/2017/11/marmelada.jpg"
        food_desc1_4.innerText = "O marmelo, fruta que ocorre na região, pode ser consumida diretamente da árvore, mas o doce preparado é um dos mais antigos e tradicionais do Brasil, tanto que o nome “marmelada” é hoje utilizado para designar compotas de sabores diferentes inclusive em outros países."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650744.986605649!2d-59.04165762147003!3d-20.558825377289097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947e91dbe29f7383%3A0x351cd8e9695410ac!2sMato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1636379447700!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima predominante no Estado do Mato Grosso do Sul é o clima tropical, sendo o clima tropical semiúmido o predominante no território do Estado. Este tipo de clima se caracteriza por apresentar verões quentes e chuvosos e inverno seco e pouco frio."

        travel_desc1.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Campo Grande (Capital do Mato Grosso do Sul) varia em média de R$ 485 à R$ 1450 dependendo da companhia aérea e outras variantes como tipo de voo, horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Mato Grosso"
        statetxt2.innerText = "Mato Grosso, um grande estado no centro-oeste brasileiro, é coberto na maioria pela floresta tropical amazónica, as zonas húmidas e as planícies da savana. A capital, Cuiabá, é um centro de viagens que remonta à corrida ao ouro do século XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimarães possui áreas de caminhada com penhascos em arenito, quedas de água e cavernas. As extensas zonas húmidas do Pantanal albergam diversas espécies selvagens, incluindo araras, caimões e jaguares."
        state_img2.src = "https://hotelmt.com.br/wp-content/uploads/2017/09/113047-5-destinos-imperdiveis-para-turismo-no-mato-grosso.jpg"

        food_name2_1.innerText = "Mojica de Pintado"
        food_img2_1.src = "https://hotelmt.com.br/wp-content/uploads/2020/03/original-2187e32d37ac80325435f96992898246.jpg"
        food_desc2_1.innerText = "Essa é uma das comidas típicas do Mato Grosso mais deliciosas que existem. É uma espécie de caldo com esse enorme pescado, somado ao sabor da mandioca e outros temperos marcantes. É, sem dúvidas, o orgulho da cozinha mato-grossense e o prato é um dos mais elaborados da culinária local."

        food_name2_2.innerText = "Furrundu"
        food_img2_2.src = "https://leiamaisba.com.br/upload/images/2013-04-22/20130422093223_doce.jpg"
        food_desc2_2.innerText = "O furrundu é um doce típico que leva mamão ralado, gengibre, cravo, rapadura e canela. Essa sobremesa é oferecida em quase todos os estabelecimentos, como restaurantes, bares e até em postos de gasolina. "

        food_name2_3.innerText = "Caldo de Piranha"
        food_img2_3.src = "https://paraisodacozinha.com.br/wp-content/uploads/caldo-de-piranha.jpg"
        food_desc2_3.innerText = "O caldo é apreciado por moradores da região, mas qualquer turista tem a oportunidade de experimentar seu sabor único. A sopa é encorpada e os locais afirmam ser um energético natural, famoso por curar aquela ressaca de uma noite agitada."

        food_name2_4.innerText = "Farofa de Banana-da-Terra"
        food_img2_4.src = "https://i2.wp.com/www.saibatudomt.com.br/wp-content/uploads/2018/04/blog1.png"
        food_desc2_4.innerText = "A farinha de mandioca ganha um toque especial com a banana-da-terra e há quem ainda incremente com carne seca frita."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952284.738864267!2d-64.97077761310251!3d-12.542586149809685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e748370319%3A0xc66268e27d2181fb!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1636377806190!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O estado de Mato Grosso apresenta sensível variedade de climas. Prevalece o tropical super-úmido de monção, com elevada temperatura média anual, superior a 24º C e alta pluviosidade (2.000mm anuais); e o tropical, com chuvas de verão e inverno seco, caracterizado por médias de 23°C no planalto."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Cuiabá (Capital do Mato Grosso) varia em média de R$ 455 à R$ 930 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Goiás"
        statetxt3.innerText = "Goiás, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros é uma reserva de montanhas paisagísticas com trilhos, rios, desfiladeiros e quedas de água. Fundadas durante o século XVIII, as cidades do ciclo de ouro de Pirenópolis e Goiás Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas cristãs."
        state_img3.src = "https://i.ytimg.com/vi/5OjKEC8KmWY/maxresdefault.jpg"

        food_name3_1.innerText = "Galinhada"
        food_img3_1.src = "https://i1.wp.com/files.agro20.com.br/uploads/2020/04/Galinhada-1.jpg"
        food_desc3_1.innerText = "O Prato preferido do Goiano é a Galinhada. E não é só arroz com galinha, mas pode ser acompanhada também com milho e o famoso pequi ou guariroba, açafrão, pimenta de cheiro e muita cebolinha verde."

        food_name3_2.innerText = "Empadão"
        food_img3_2.src = "https://t1.rg.ltmcdn.com/pt/images/1/1/9/img_empadao_goiano_2911_orig.jpg"
        food_desc3_2.innerText = "É uma torta salgada típica da região. Um belo prato feito com uma massa fina recheada com frango, queijo minas em cubos, azeitona e linguiça."

        food_name3_3.innerText = "Pamonha"
        food_img3_3.src = "https://uploads.emaisgoias.com.br/2021/01/Captura-de-Tela-2021-01-14-às-13.45.32.png"
        food_desc3_3.innerText = "Em quase toda esquina de Goiânia existe uma Pamonharia. É tradição em Goiás reunir a família para fazer pamonha. Tem Pamonha doce, sal, a moda (geralmente com linguiça, queijo minas, muita cebolinha verde e pimenta). Com frango e catupiry, com creme de pequi, de jiló etc. E ainda tem pamonha frita."

        food_name3_4.innerText = "Peixe na Telha"
        food_img3_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2015/05/peixe-na-telha-comunidade-mais-comunidade.jpg"
        food_desc3_4.innerText = "Esse prato esáa sempre presente nos restaurantes e nas casas dos goianos. Na receita tradicional é usado peixe de água doce, de couro e em postas, geralmente Pintado ou Surubim com molho de tomate, açafrão, leite de coco e creme de leite. Acompanha arroz branco e um pirão feito com o caldo da cabeça e da espinha do peixe."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858528.037722338!2d-54.074770566586125!3d-15.900063051386356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935db96386b920f5%3A0x8c6d8f8cd8cf0d3!2zR29pw6Fz!5e0!3m2!1spt-BR!2sbr!4v1636375262710!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O Estado de Goiás possui clima predominante tropical semi-úmido, suas características se apresentam em duas estações distintas, uma de seca (maio a setembro) e outra chuvosa (outubro a abril)."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Goiânia (Capital de Goiás) varia em média de R$ 385 à R$ 750 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 7 && fclima == 3) {
        place1txt.innerText = "Mato Grosso do Sul"
        statetxt1.innerText = "Mato Grosso do Sul é uma das 27 unidades federativas do Brasil. Localiza-se no sul da Região Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goiás e Minas Gerais, São Paulo e Paraná; e dois países sul-americanos: Paraguai e Bolívia."
        state_img1.src = "https://blog.malupires.com.br/wp-content/uploads/2021/07/bonito-mato-grosso-do-sul-pontos-turisticos-2.jpg"

        food_name1_1.innerText = "Chipa"
        food_img1_1.src = "https://aquelemato.org/wp-content/uploads/2018/07/chipa-paraguaia-mato-grosso-do-sul-2.jpg"
        food_desc1_1.innerText = "Essa tradicional receita tem origem na celebração da Sexta-feira Santa, quando, devido ao resguardo religioso, as mulheres preparavam uma quantidade de chipa na véspera para ser consumida no dia seguinte. Atualmente é servida sempre e em qualquer local, sendo uma 'prima' do pão-de-queijo-mineiro, porém com consistência e sabor próprios."

        food_name1_2.innerText = "Doce de Jaracatiá"
        food_img1_2.src = "https://media-cdn.tripadvisor.com/media/photo-s/14/12/e3/5c/sorvete-de-jaracatia.jpg"
        food_desc1_2.innerText = "O jaracatiá ou mamão-de-veado (Jacaratia spinosa), é uma árvore da família do mamoeiro, ainda bastante abundante pois a madeira não tem utilidade comercial (é oca e mole). Seu fruto é comestível, procurado por muitos animais, mas é necessário tirar o leite de sua casca antes de comer, pois pode ser tóxico. Pode-se fazer um delicioso doce com seu fruto e com seu caule."

        food_name1_3.innerText = "Locro"
        food_img1_3.src = "http://portalfaces.com.br/wp-content/uploads/2020/04/4cb258361327b308ae338549d7b5c827.jpg"
        food_desc1_3.innerText = "Essa é a denominação para um prato à base de canjica de milho e vértebras de boi, denominadas como 'puchero'. É um alimento bastante forte, sendo preparado logo durante o carneamento do boi, com a finalidade de fortalecer os peões, empreiteiros e outros trabalhadores das fazendas nas regiões de fronteira entre Brasil e principalmente Paraguai."

        food_name1_4.innerText = "Marmelada"
        food_img1_4.src = "https://www.greenme.com.br/wp-content/uploads/2017/11/marmelada.jpg"
        food_desc1_4.innerText = "O marmelo, fruta que ocorre na região, pode ser consumida diretamente da árvore, mas o doce preparado é um dos mais antigos e tradicionais do Brasil, tanto que o nome “marmelada” é hoje utilizado para designar compotas de sabores diferentes inclusive em outros países."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650744.986605649!2d-59.04165762147003!3d-20.558825377289097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947e91dbe29f7383%3A0x351cd8e9695410ac!2sMato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1636379447700!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima predominante no Estado do Mato Grosso do Sul é o clima tropical, sendo o clima tropical semiúmido o predominante no território do Estado. Este tipo de clima se caracteriza por apresentar verões quentes e chuvosos e inverno seco e pouco frio."

        travel_desc1.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Campo Grande (Capital do Mato Grosso do Sul) varia em média de R$ 485 à R$ 1450 dependendo da companhia aérea e outras variantes como tipo de voo, horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Goiás"
        statetxt2.innerText = "Goiás, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros é uma reserva de montanhas paisagísticas com trilhos, rios, desfiladeiros e quedas de água. Fundadas durante o século XVIII, as cidades do ciclo de ouro de Pirenópolis e Goiás Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas cristãs."
        state_img2.src = "https://i.ytimg.com/vi/5OjKEC8KmWY/maxresdefault.jpg"

        food_name2_1.innerText = "Galinhada"
        food_img2_1.src = "https://i1.wp.com/files.agro20.com.br/uploads/2020/04/Galinhada-1.jpg"
        food_desc2_1.innerText = "O Prato preferido do Goiano é a Galinhada. E não é só arroz com galinha, mas pode ser acompanhada também com milho e o famoso pequi ou guariroba, açafrão, pimenta de cheiro e muita cebolinha verde."

        food_name2_2.innerText = "Empadão"
        food_img2_2.src = "https://t1.rg.ltmcdn.com/pt/images/1/1/9/img_empadao_goiano_2911_orig.jpg"
        food_desc2_2.innerText = "É uma torta salgada típica da região. Um belo prato feito com uma massa fina recheada com frango, queijo minas em cubos, azeitona e linguiça."

        food_name2_3.innerText = "Pamonha"
        food_img2_3.src = "https://uploads.emaisgoias.com.br/2021/01/Captura-de-Tela-2021-01-14-às-13.45.32.png"
        food_desc2_3.innerText = "Em quase toda esquina de Goiânia existe uma Pamonharia. É tradição em Goiás reunir a família para fazer pamonha. Tem Pamonha doce, sal, a moda (geralmente com linguiça, queijo minas, muita cebolinha verde e pimenta). Com frango e catupiry, com creme de pequi, de jiló etc. E ainda tem pamonha frita."

        food_name2_4.innerText = "Peixe na Telha"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2015/05/peixe-na-telha-comunidade-mais-comunidade.jpg"
        food_desc2_4.innerText = "Esse prato esáa sempre presente nos restaurantes e nas casas dos goianos. Na receita tradicional é usado peixe de água doce, de couro e em postas, geralmente Pintado ou Surubim com molho de tomate, açafrão, leite de coco e creme de leite. Acompanha arroz branco e um pirão feito com o caldo da cabeça e da espinha do peixe."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858528.037722338!2d-54.074770566586125!3d-15.900063051386356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935db96386b920f5%3A0x8c6d8f8cd8cf0d3!2zR29pw6Fz!5e0!3m2!1spt-BR!2sbr!4v1636375262710!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O Estado de Goiás possui clima predominante tropical semi-úmido, suas características se apresentam em duas estações distintas, uma de seca (maio a setembro) e outra chuvosa (outubro a abril)."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Goiânia (Capital de Goiás) varia em média de R$ 385 à R$ 750 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Mato Grosso"
        statetxt3.innerText = "Mato Grosso, um grande estado no centro-oeste brasileiro, é coberto na maioria pela floresta tropical amazónica, as zonas húmidas e as planícies da savana. A capital, Cuiabá, é um centro de viagens que remonta à corrida ao ouro do século XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimarães possui áreas de caminhada com penhascos em arenito, quedas de água e cavernas. As extensas zonas húmidas do Pantanal albergam diversas espécies selvagens, incluindo araras, caimões e jaguares."
        state_img3.src = "https://hotelmt.com.br/wp-content/uploads/2017/09/113047-5-destinos-imperdiveis-para-turismo-no-mato-grosso.jpg"

        food_name3_1.innerText = "Mojica de Pintado"
        food_img3_1.src = "https://hotelmt.com.br/wp-content/uploads/2020/03/original-2187e32d37ac80325435f96992898246.jpg"
        food_desc3_1.innerText = "Essa é uma das comidas típicas do Mato Grosso mais deliciosas que existem. É uma espécie de caldo com esse enorme pescado, somado ao sabor da mandioca e outros temperos marcantes. É, sem dúvidas, o orgulho da cozinha mato-grossense e o prato é um dos mais elaborados da culinária local."

        food_name3_2.innerText = "Furrundu"
        food_img3_2.src = "https://leiamaisba.com.br/upload/images/2013-04-22/20130422093223_doce.jpg"
        food_desc3_2.innerText = "O furrundu é um doce típico que leva mamão ralado, gengibre, cravo, rapadura e canela. Essa sobremesa é oferecida em quase todos os estabelecimentos, como restaurantes, bares e até em postos de gasolina. "

        food_name3_3.innerText = "Caldo de Piranha"
        food_img3_3.src = "https://paraisodacozinha.com.br/wp-content/uploads/caldo-de-piranha.jpg"
        food_desc3_3.innerText = "O caldo é apreciado por moradores da região, mas qualquer turista tem a oportunidade de experimentar seu sabor único. A sopa é encorpada e os locais afirmam ser um energético natural, famoso por curar aquela ressaca de uma noite agitada."

        food_name3_4.innerText = "Farofa de Banana-da-Terra"
        food_img3_4.src = "https://i2.wp.com/www.saibatudomt.com.br/wp-content/uploads/2018/04/blog1.png"
        food_desc3_4.innerText = "A farinha de mandioca ganha um toque especial com a banana-da-terra e há quem ainda incremente com carne seca frita."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952284.738864267!2d-64.97077761310251!3d-12.542586149809685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e748370319%3A0xc66268e27d2181fb!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1636377806190!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O estado de Mato Grosso apresenta sensível variedade de climas. Prevalece o tropical super-úmido de monção, com elevada temperatura média anual, superior a 24º C e alta pluviosidade (2.000mm anuais); e o tropical, com chuvas de verão e inverno seco, caracterizado por médias de 23°C no planalto."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Cuiabá (Capital do Mato Grosso) varia em média de R$ 455 à R$ 930 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 7 && fclima == 4) {
        place1txt.innerText = "Mato Grosso"
        statetxt1.innerText = "Mato Grosso, um grande estado no centro-oeste brasileiro, é coberto na maioria pela floresta tropical amazónica, as zonas húmidas e as planícies da savana. A capital, Cuiabá, é um centro de viagens que remonta à corrida ao ouro do século XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimarães possui áreas de caminhada com penhascos em arenito, quedas de água e cavernas. As extensas zonas húmidas do Pantanal albergam diversas espécies selvagens, incluindo araras, caimões e jaguares."
        state_img1.src = "https://hotelmt.com.br/wp-content/uploads/2017/09/113047-5-destinos-imperdiveis-para-turismo-no-mato-grosso.jpg"

        food_name1_1.innerText = "Mojica de Pintado"
        food_img1_1.src = "https://hotelmt.com.br/wp-content/uploads/2020/03/original-2187e32d37ac80325435f96992898246.jpg"
        food_desc1_1.innerText = "Essa é uma das comidas típicas do Mato Grosso mais deliciosas que existem. É uma espécie de caldo com esse enorme pescado, somado ao sabor da mandioca e outros temperos marcantes. É, sem dúvidas, o orgulho da cozinha mato-grossense e o prato é um dos mais elaborados da culinária local."

        food_name1_2.innerText = "Furrundu"
        food_img1_2.src = "https://leiamaisba.com.br/upload/images/2013-04-22/20130422093223_doce.jpg"
        food_desc1_2.innerText = "O furrundu é um doce típico que leva mamão ralado, gengibre, cravo, rapadura e canela. Essa sobremesa é oferecida em quase todos os estabelecimentos, como restaurantes, bares e até em postos de gasolina. "

        food_name1_3.innerText = "Caldo de Piranha"
        food_img1_3.src = "https://paraisodacozinha.com.br/wp-content/uploads/caldo-de-piranha.jpg"
        food_desc1_3.innerText = "O caldo é apreciado por moradores da região, mas qualquer turista tem a oportunidade de experimentar seu sabor único. A sopa é encorpada e os locais afirmam ser um energético natural, famoso por curar aquela ressaca de uma noite agitada."

        food_name1_4.innerText = "Farofa de Banana-da-Terra"
        food_img1_4.src = "https://i2.wp.com/www.saibatudomt.com.br/wp-content/uploads/2018/04/blog1.png"
        food_desc1_4.innerText = "A farinha de mandioca ganha um toque especial com a banana-da-terra e há quem ainda incremente com carne seca frita."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952284.738864267!2d-64.97077761310251!3d-12.542586149809685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e748370319%3A0xc66268e27d2181fb!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1636377806190!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O estado de Mato Grosso apresenta sensível variedade de climas. Prevalece o tropical super-úmido de monção, com elevada temperatura média anual, superior a 24º C e alta pluviosidade (2.000mm anuais); e o tropical, com chuvas de verão e inverno seco, caracterizado por médias de 23°C no planalto."

        travel_desc1.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Cuiabá (Capital do Mato Grosso) varia em média de R$ 455 à R$ 930 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Goiás"
        statetxt2.innerText = "Goiás, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros é uma reserva de montanhas paisagísticas com trilhos, rios, desfiladeiros e quedas de água. Fundadas durante o século XVIII, as cidades do ciclo de ouro de Pirenópolis e Goiás Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas cristãs."
        state_img2.src = "https://i.ytimg.com/vi/5OjKEC8KmWY/maxresdefault.jpg"

        food_name2_1.innerText = "Galinhada"
        food_img2_1.src = "https://i1.wp.com/files.agro20.com.br/uploads/2020/04/Galinhada-1.jpg"
        food_desc2_1.innerText = "O Prato preferido do Goiano é a Galinhada. E não é só arroz com galinha, mas pode ser acompanhada também com milho e o famoso pequi ou guariroba, açafrão, pimenta de cheiro e muita cebolinha verde."

        food_name2_2.innerText = "Empadão"
        food_img2_2.src = "https://t1.rg.ltmcdn.com/pt/images/1/1/9/img_empadao_goiano_2911_orig.jpg"
        food_desc2_2.innerText = "É uma torta salgada típica da região. Um belo prato feito com uma massa fina recheada com frango, queijo minas em cubos, azeitona e linguiça."

        food_name2_3.innerText = "Pamonha"
        food_img2_3.src = "https://uploads.emaisgoias.com.br/2021/01/Captura-de-Tela-2021-01-14-às-13.45.32.png"
        food_desc2_3.innerText = "Em quase toda esquina de Goiânia existe uma Pamonharia. É tradição em Goiás reunir a família para fazer pamonha. Tem Pamonha doce, sal, a moda (geralmente com linguiça, queijo minas, muita cebolinha verde e pimenta). Com frango e catupiry, com creme de pequi, de jiló etc. E ainda tem pamonha frita."

        food_name2_4.innerText = "Peixe na Telha"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2015/05/peixe-na-telha-comunidade-mais-comunidade.jpg"
        food_desc2_4.innerText = "Esse prato esáa sempre presente nos restaurantes e nas casas dos goianos. Na receita tradicional é usado peixe de água doce, de couro e em postas, geralmente Pintado ou Surubim com molho de tomate, açafrão, leite de coco e creme de leite. Acompanha arroz branco e um pirão feito com o caldo da cabeça e da espinha do peixe."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858528.037722338!2d-54.074770566586125!3d-15.900063051386356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935db96386b920f5%3A0x8c6d8f8cd8cf0d3!2zR29pw6Fz!5e0!3m2!1spt-BR!2sbr!4v1636375262710!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O Estado de Goiás possui clima predominante tropical semi-úmido, suas características se apresentam em duas estações distintas, uma de seca (maio a setembro) e outra chuvosa (outubro a abril)."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Goiânia (Capital de Goiás) varia em média de R$ 385 à R$ 750 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Mato Grosso do Sul"
        statetxt3.innerText = "Mato Grosso do Sul é uma das 27 unidades federativas do Brasil. Localiza-se no sul da Região Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goiás e Minas Gerais, São Paulo e Paraná; e dois países sul-americanos: Paraguai e Bolívia."
        state_img3.src = "https://blog.malupires.com.br/wp-content/uploads/2021/07/bonito-mato-grosso-do-sul-pontos-turisticos-2.jpg"

        food_name3_1.innerText = "Chipa"
        food_img3_1.src = "https://aquelemato.org/wp-content/uploads/2018/07/chipa-paraguaia-mato-grosso-do-sul-2.jpg"
        food_desc3_1.innerText = "Essa tradicional receita tem origem na celebração da Sexta-feira Santa, quando, devido ao resguardo religioso, as mulheres preparavam uma quantidade de chipa na véspera para ser consumida no dia seguinte. Atualmente é servida sempre e em qualquer local, sendo uma 'prima' do pão-de-queijo-mineiro, porém com consistência e sabor próprios."

        food_name3_2.innerText = "Doce de Jaracatiá"
        food_img3_2.src = "https://media-cdn.tripadvisor.com/media/photo-s/14/12/e3/5c/sorvete-de-jaracatia.jpg"
        food_desc3_2.innerText = "O jaracatiá ou mamão-de-veado (Jacaratia spinosa), é uma árvore da família do mamoeiro, ainda bastante abundante pois a madeira não tem utilidade comercial (é oca e mole). Seu fruto é comestível, procurado por muitos animais, mas é necessário tirar o leite de sua casca antes de comer, pois pode ser tóxico. Pode-se fazer um delicioso doce com seu fruto e com seu caule."

        food_name3_3.innerText = "Locro"
        food_img3_3.src = "http://portalfaces.com.br/wp-content/uploads/2020/04/4cb258361327b308ae338549d7b5c827.jpg"
        food_desc3_3.innerText = "Essa é a denominação para um prato à base de canjica de milho e vértebras de boi, denominadas como 'puchero'. É um alimento bastante forte, sendo preparado logo durante o carneamento do boi, com a finalidade de fortalecer os peões, empreiteiros e outros trabalhadores das fazendas nas regiões de fronteira entre Brasil e principalmente Paraguai."

        food_name3_4.innerText = "Marmelada"
        food_img3_4.src = "https://www.greenme.com.br/wp-content/uploads/2017/11/marmelada.jpg"
        food_desc3_4.innerText = "O marmelo, fruta que ocorre na região, pode ser consumida diretamente da árvore, mas o doce preparado é um dos mais antigos e tradicionais do Brasil, tanto que o nome “marmelada” é hoje utilizado para designar compotas de sabores diferentes inclusive em outros países."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650744.986605649!2d-59.04165762147003!3d-20.558825377289097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947e91dbe29f7383%3A0x351cd8e9695410ac!2sMato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1636379447700!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima predominante no Estado do Mato Grosso do Sul é o clima tropical, sendo o clima tropical semiúmido o predominante no território do Estado. Este tipo de clima se caracteriza por apresentar verões quentes e chuvosos e inverno seco e pouco frio."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Campo Grande (Capital do Mato Grosso do Sul) varia em média de R$ 485 à R$ 1450 dependendo da companhia aérea e outras variantes como tipo de voo, horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
        
    } else if(fregiao == 8 && fclima == 1) {
        place1txt.innerText = "São Paulo"
        statetxt1.innerText = "São Paulo é uma das 27 unidades federativas do Brasil. Está situado na Região Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paraná a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, além do Oceano Atlântico a sudeste."
        state_img1.src = "https://exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg"

        food_name1_1.innerText = "Virado à Paulista"
        food_img1_1.src = "https://img.itdg.com.br/tdg/images/recipes/000/026/749/355376/355376_original.jpg"
        food_desc1_1.innerText = "É um prato típico do estado brasileiro de São Paulo, onde também é conhecido como Virado à Paulista. Foi criado na época das entradas, bandeiras e monções, no Brasil Colônia. Há várias combinações do prato em torno do básico de bisteca de porco, banana frita, feijão mulatinho virado com farinha de mandioca, arroz, couve e ovo frito."

        food_name1_2.innerText = "Cuscuz à paulista"
        food_img1_2.src = "https://img.itdg.com.br/tdg/images/recipes/000/061/325/325758/325758_original.jpg"
        food_desc1_2.innerText = "Muito popular no Nordeste, o cuscuz tem origem árabe e é uma das mais importantes receitas de São Paulo. É uma refeição simples e muito saborosa, que consiste basicamente em uma massa de milho cozida no vapor. Já no cuscuz à paulista, o prato recebe recheios variados, que podem ser carnes, peixes, frangos ou outras combinações que agradem o paladar."

        food_name1_3.innerText = "Bauru"
        food_img1_3.src = "http://dicas.guiamais.com.br/wp-content/uploads/2012/04/lanche-bauru.jpg"
        food_desc1_3.innerText = "Esta comida paulista foi criada na cidade de Bauru, interior de São Paulo. Ele já faz parte do cardápio de lanchonetes e restaurantes de todo País (em diferentes versões, é claro) e pode ser encontrado Brasil afora."

        food_name1_4.innerText = "Bolovo"
        food_img1_4.src = "https://img.itdg.com.br/tdg/images/recipes/000/199/322/308243/308243_original.jpg"
        food_desc1_4.innerText = "Uma missão quase impossível é encontrar o famoso bolovo fora de São Paulo. O bolovo é simplesmente um bolinho de carne moída recheado com um ovo cozido inteiro."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773123.4374115462!2d-50.880025451378756!3d-22.553250446881403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f58ad%3A0x1e5241e2e17b7c17!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1638976841787!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "São Paulo tem estações com características bem definidas, o que ajuda na hora de escolher o clima e tempo que mais te agrada. A cidade está localizada em uma zona de clima subtropical úmido, com características que definem um inverno frio e seco, enquanto o verão é bem quente e úmido, com enorme incidência de chuva."

        travel_desc1.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço de um voo é acima de R$163, alémde hospedagem e atrações turísticas, e a duração do voo pode variar entre 1h40 e 6h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Minas Gerais"
        statetxt2.innerText = "Minas Gerais, um grande estado continental no sudeste do Brasil, é conhecido por cidades da era colonial que remetem à corrida do ouro no país no século 18. Entre elas estão São João del Rei, Tiradentes e Ouro Preto, a antiga capital, todas com ruas de paralelepípedo, mansões ornamentadas e igrejas barrocas decoradas pelo escultor Aleijadinho.O famoso trem a vapor Maria Fumaça liga Tiradentes a São João del Rei."
        state_img2.src = "https://content.presspage.com/uploads/685/c1920_tiradentesminasgeraisbrazil-2.jpg"

        food_name2_1.innerText = "Frango com Quiabo"
        food_img2_1.src = "https://tecnonoticias.com.br/blogs/cozinhafacil/wp-content/uploads/2020/07/frango-com-quiabo2.jpeg"
        food_desc2_1.innerText = "A mistura desses dois ingredientes rende um dos pratos mais clássicos para os mineiros, feito a partir de um ensopado de frango caipira. Afirma-se que o sabor “original” dessa receita só é possível com a utilização desse tipo de frango, pois o frango industrializado acaba tirando toda a essência do autêntico frango com quiabo."

        food_name2_2.innerText = "Tutu"
        food_img2_2.src = "https://www.visiteobrasil.com.br/galerias/carac8-minas-gerais-tutu-a-mineira/587-112453-culinaria-mineira-tutu-a-mineira-foto-divulgacaogr.jpg"
        food_desc2_2.innerText = "O feijão, um dos ingredientes mais importantes para os mineiros, se transforma no saboroso tutu quando é cozido, temperado, batido e misturado com farinha de milho ou de mandioca. Adquire uma consistência mais pastosa e pode ganhar o adicional de torresmo, bacon ou ovos cozidos."

        food_name2_3.innerText = "Feijão Tropeiro"
        food_img2_3.src = "https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg"
        food_desc2_3.innerText = "Mais uma vez, o feijão estrela uma das receitas mais tradicionais de Minas Gerais, em um prato que surgiu com os tropeiros, que misturavam farinha, carne e ovos ao feijão. O resultado é uma iguaria com sabor único, que está presente em larga escala pelos restaurantes dos mais de 800 municípios mineiros."

        food_name2_4.innerText = "Leitão a Pururuca"
        food_img2_4.src = "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-leitao-pururuca.jpg"
        food_desc2_4.innerText = "Para que se prepare um leitão a pururuca, é necessário empregar muita técnica. O porco deve ser assado com pele e, logo após esse procedimento, deve-se passar gelo em toda sua superfície para, então, jogar óleo muito quente sobre ela. Quando bem feita, o resultado dessa técnica é uma pele fritinha, cheia de bolhas e que fica crocante."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7747774.534855807!2d-49.94785049282104!3d-18.524697480011483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690a165324289%3A0x112170c9379de7b3!2sMinas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1639138637724!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "No Território mineiro o clima que predomina é o tropical de altitude, além de apresentar o tropical. O clima tropical se apresenta nas áreas mais baixas, a temperatura nessa região oscila entre 22 e 23ºC com duas estações bem definidas, com verões chuvosos e invernos secos."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Minas Gerais varia em média de R$ 500 à R$ 850 dependendo da companhia aérea e outras variantes como horário, paradas ou tipo de viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio de Janeiro"
        statetxt3.innerText = "O Rio de Janeiro é um estado no sudeste do Brasil. A sua capital, com o mesmo nome, é conhecida pelas praias, o Pão de Açúcar e a estátua do Cristo Redentor no cimo do morro do Corcovado. O ponto de referência do arquiteto Oscar Niemeyer, o Museu de Arte Contemporânea de Niterói, fica do lado oposto da Baía de Guanabara, em Niterói. Ao longo da costa atlântica do estado, encontra-se Ilha Grande, uma ilha arborizada rodeada de praias, e a cidade colonial de Paraty."
        state_img3.src = "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"

        food_name3_1.innerText = "Feijoada"
        food_img3_1.src = "https://img.cybercook.com.br/imagens/receitas/991/feijoada-carioca.jpeg"
        food_desc3_1.innerText = "A feijoada carioca é conhecida por ingredientes como feijão preto e diversas partes do porco. O prato fica ainda mais gostoso acompanhado de couve refogada caprichada, farofinha feita na hora e arroz branco."

        food_name3_2.innerText = "Bolinho de Bacalhau"
        food_img3_2.src = "https://receitasmais.com.br/wp-content/uploads/2013/03/Bolinho-de-bacalhau.jpg"
        food_desc3_2.innerText = "A massa do bolinho conta com batata e cheiro-verde, que dão aquele toque na textura e no sabor do salgado. Tudo pode ficar ainda mais gostoso se você servir esse aperitivo acompanhado de algumas gotinhas de azeite."

        food_name3_3.innerText = "Biscoito Globo"
        food_img3_3.src = "https://ogimg.infoglobo.com.br/in/19923793-52b-4f7/FT1086A/xglobo.jpg.pagespeed.ic.EG7ao22IEF.jpg"
        food_desc3_3.innerText = "Levinho, crocante e delicioso, o biscoito Globo tem esse nome em homenagem à padaria onde era feito. Nas terras cariocas, você pode encontrá-lo na versão salgada ou doce."

        food_name3_4.innerText = "Filé à Oswaldo Aranha"
        food_img3_4.src = "https://www.papodebar.com/wp-content/uploads/2012/11/file-oswaldo-aranha.jpg"
        food_desc3_4.innerText = "O nome da receita foi dado em homenagem ao político Oswaldo Aranha, que ia sempre a um restaurante na Lapa e pedia o mesmo prato: um filé temperado com alho frito acompanhado de batatas portuguesas, farofa de ovo e arroz soltinho."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786720.626764539!2d-45.16779367556124!3d-22.050767463332168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1639146625233!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima no Rio de Janeiro, é tropical, quente e úmido, com variações locais, devido às diferenças de altitude, vegetação e proximidade do oceano; a temperatura média anual é de 22º centígrados, com médias diárias elevadas no verão (de 30º a 32º); as chuvas variam de 1.200 a 1.800 mm anuais"

        travel_desc3.innerText = "O gasto total de uma viagem seria em cerca de R$ 2.181,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 8 && fclima == 2) {
        place1txt.innerText = "Rio de Janeiro"
        statetxt1.innerText = "O Rio de Janeiro é um estado no sudeste do Brasil. A sua capital, com o mesmo nome, é conhecida pelas praias, o Pão de Açúcar e a estátua do Cristo Redentor no cimo do morro do Corcovado. O ponto de referência do arquiteto Oscar Niemeyer, o Museu de Arte Contemporânea de Niterói, fica do lado oposto da Baía de Guanabara, em Niterói. Ao longo da costa atlântica do estado, encontra-se Ilha Grande, uma ilha arborizada rodeada de praias, e a cidade colonial de Paraty."
        state_img1.src = "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"

        food_name1_1.innerText = "Feijoada"
        food_img1_1.src = "https://img.cybercook.com.br/imagens/receitas/991/feijoada-carioca.jpeg"
        food_desc1_1.innerText = "A feijoada carioca é conhecida por ingredientes como feijão preto e diversas partes do porco. O prato fica ainda mais gostoso acompanhado de couve refogada caprichada, farofinha feita na hora e arroz branco."

        food_name1_2.innerText = "Bolinho de Bacalhau"
        food_img1_2.src = "https://receitasmais.com.br/wp-content/uploads/2013/03/Bolinho-de-bacalhau.jpg"
        food_desc1_2.innerText = "A massa do bolinho conta com batata e cheiro-verde, que dão aquele toque na textura e no sabor do salgado. Tudo pode ficar ainda mais gostoso se você servir esse aperitivo acompanhado de algumas gotinhas de azeite."

        food_name1_3.innerText = "Biscoito Globo"
        food_img1_3.src = "https://ogimg.infoglobo.com.br/in/19923793-52b-4f7/FT1086A/xglobo.jpg.pagespeed.ic.EG7ao22IEF.jpg"
        food_desc1_3.innerText = "Levinho, crocante e delicioso, o biscoito Globo tem esse nome em homenagem à padaria onde era feito. Nas terras cariocas, você pode encontrá-lo na versão salgada ou doce."

        food_name1_4.innerText = "Filé à Oswaldo Aranha"
        food_img1_4.src = "https://www.papodebar.com/wp-content/uploads/2012/11/file-oswaldo-aranha.jpg"
        food_desc1_4.innerText = "O nome da receita foi dado em homenagem ao político Oswaldo Aranha, que ia sempre a um restaurante na Lapa e pedia o mesmo prato: um filé temperado com alho frito acompanhado de batatas portuguesas, farofa de ovo e arroz soltinho."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786720.626764539!2d-45.16779367556124!3d-22.050767463332168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1639146625233!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima no Rio de Janeiro, é tropical, quente e úmido, com variações locais, devido às diferenças de altitude, vegetação e proximidade do oceano; a temperatura média anual é de 22º centígrados, mesmo assim, seu inverno pode contar com temperaturas abaixo de 20ºC. As chuvas variam de 1.200 a 1.800 mm anuais"

        travel_desc1.innerText = "O gasto total de uma viagem seria em cerca de R$ 2.181,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "São Paulo"
        statetxt2.innerText = "São Paulo é uma das 27 unidades federativas do Brasil. Está situado na Região Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paraná a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, além do Oceano Atlântico a sudeste."
        state_img2.src = "https://exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg"

        food_name2_1.innerText = "Virado à Paulista"
        food_img2_1.src = "https://img.itdg.com.br/tdg/images/recipes/000/026/749/355376/355376_original.jpg"
        food_desc2_1.innerText = "É um prato típico do estado brasileiro de São Paulo, onde também é conhecido como Virado à Paulista. Foi criado na época das entradas, bandeiras e monções, no Brasil Colônia. Há várias combinações do prato em torno do básico de bisteca de porco, banana frita, feijão mulatinho virado com farinha de mandioca, arroz, couve e ovo frito."

        food_name2_2.innerText = "Cuscuz à paulista"
        food_img2_2.src = "https://img.itdg.com.br/tdg/images/recipes/000/061/325/325758/325758_original.jpg"
        food_desc2_2.innerText = "Muito popular no Nordeste, o cuscuz tem origem árabe e é uma das mais importantes receitas de São Paulo. É uma refeição simples e muito saborosa, que consiste basicamente em uma massa de milho cozida no vapor. Já no cuscuz à paulista, o prato recebe recheios variados, que podem ser carnes, peixes, frangos ou outras combinações que agradem o paladar."

        food_name2_3.innerText = "Bauru"
        food_img2_3.src = "http://dicas.guiamais.com.br/wp-content/uploads/2012/04/lanche-bauru.jpg"
        food_desc2_3.innerText = "Esta comida paulista foi criada na cidade de Bauru, interior de São Paulo. Ele já faz parte do cardápio de lanchonetes e restaurantes de todo País (em diferentes versões, é claro) e pode ser encontrado Brasil afora."

        food_name2_4.innerText = "Bolovo"
        food_img2_4.src = "https://img.itdg.com.br/tdg/images/recipes/000/199/322/308243/308243_original.jpg"
        food_desc2_4.innerText = "Uma missão quase impossível é encontrar o famoso bolovo fora de São Paulo. O bolovo é simplesmente um bolinho de carne moída recheado com um ovo cozido inteiro."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773123.4374115462!2d-50.880025451378756!3d-22.553250446881403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f58ad%3A0x1e5241e2e17b7c17!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1638976841787!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "São Paulo tem estações com características bem definidas, o que ajuda na hora de escolher o clima e tempo que mais te agrada. A cidade está localizada em uma zona de clima subtropical úmido, com características que definem um inverno frio e seco, que em regiões ao sul do estado, a temperatura pode chegar a 18ºC em média, com enorme incidência de chuva."

        travel_desc2.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço de um voo é acima de R$163, alémde hospedagem e atrações turísticas, e a duração do voo pode variar entre 1h40 e 6h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Espírito Santo"
        statetxt3.innerText = "O Espírito Santo, estado da região Sudeste do Brasil, é conhecido por suas praias tropicais e áreas naturais montanhosas preservadas. Fundada em 1551, Vitória, capital e cidade portuária, tem um pequeno centro da era colonial. Do outro lado da estreita baía de Vitória, fica Vila Velha, com a movimentada Praia da Costa e o Convento da Penha, construção do século XVI que fica no alto de um penhasco e oferece uma vista panorâmica."
        state_img3.src = "https://caminhagente.com.br/wp-content/uploads/2019/07/IMG_7937-1-1024x768.jpg"

        food_name3_1.innerText = "Moqueca Capixaba"
        food_img3_1.src = "https://jornal140.com/wp-content/uploads/2019/11/Moqueca-Capixaba.png"
        food_desc3_1.innerText = "A disputa do prato com a moqueca baiana existe, mas de uma forma bem-humorada. Porém, a moqueca capixaba não leva azeite de dendê e leite de coco. E outra diferença é que a sua preparação é feita apenas nas panelas de barro, criadas artesanalmente pelas paneleiras de Goiabeiras."

        food_name3_2.innerText = "Torta Capixaba"
        food_img3_2.src = "https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/03/e9914dea-torta-capixaba-de-bacalhau-_-tm-bacalhau-_-gislaine-oliveira-_-baixa-2.jpg"
        food_desc3_2.innerText = "Esse prato é o prato oficial da Semana Santa no Espírito Santo. A origem dele ultrapassa 400 anos e envolve as tradições das comunidades litorâneas e vilas de pescadores. O prato leva muitos frutos do mar desfiados e cozidos: siri, caranguejo, camarão, ostra, sururu, badejo e bacalhau."

        food_name3_3.innerText = "Quibebe de Abóbora"
        food_img3_3.src = "https://cdn.panelinha.com.br/receita/1555347218472-CP-2019-29-01_6544.jpg"
        food_desc3_3.innerText = "O quibebe de abóbora é um purê feito com a fruta e temperado com alho, cebola, salsa e cebolinha, além de óleo de girassol, sal e açúcar. O acompanhamento é com costelinha de porco ou torresmo. Esses sabores, quando se misturam, formam um prato exótico e de sabor único."

        food_name3_4.innerText = "Camarão no Coco"
        food_img3_4.src = "https://midias.agazeta.com.br/2020/02/11/camarao-no-coco-famoso-prato-do-restaurante-atlantica-183317.jpg"
        food_desc3_4.innerText = "Um dos pratos mais exóticos e bonitos do Espírito Santo é o Camarão no coco. Ele leva água de coco e camarão como base, mas também tem salsa, leite de coco, sal e pimenta. É servido com batata palha artesanal e arroz branco."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7701014.136922567!2d-39.873300689731224!3d-19.53041333665115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7069579646359%3A0x4e1bd5243c50f799!2sEsp%C3%ADrito%20Santo!5e0!3m2!1spt-BR!2sbr!4v1636367622677!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Estado do Espírito Santo é tropical úmido, com temperaturas médias anuais de 23°C e volume de precipitação superior a 1.400 mm por ano, especialmente concentrada no verão."

        travel_desc3.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Vitória (Capital do Espírito Santo) varia em média de R$ 400 à R$ 700 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 8 && fclima == 3) {
        place1txt.innerText = "Espírito Santo"
        statetxt1.innerText = "O Espírito Santo, estado da região Sudeste do Brasil, é conhecido por suas praias tropicais e áreas naturais montanhosas preservadas. Fundada em 1551, Vitória, capital e cidade portuária, tem um pequeno centro da era colonial. Do outro lado da estreita baía de Vitória, fica Vila Velha, com a movimentada Praia da Costa e o Convento da Penha, construção do século XVI que fica no alto de um penhasco e oferece uma vista panorâmica."
        state_img1.src = "https://caminhagente.com.br/wp-content/uploads/2019/07/IMG_7937-1-1024x768.jpg"

        food_name1_1.innerText = "Moqueca Capixaba"
        food_img1_1.src = "https://jornal140.com/wp-content/uploads/2019/11/Moqueca-Capixaba.png"
        food_desc1_1.innerText = "A disputa do prato com a moqueca baiana existe, mas de uma forma bem-humorada. Porém, a moqueca capixaba não leva azeite de dendê e leite de coco. E outra diferença é que a sua preparação é feita apenas nas panelas de barro, criadas artesanalmente pelas paneleiras de Goiabeiras."

        food_name1_2.innerText = "Torta Capixaba"
        food_img1_2.src = "https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/03/e9914dea-torta-capixaba-de-bacalhau-_-tm-bacalhau-_-gislaine-oliveira-_-baixa-2.jpg"
        food_desc1_2.innerText = "Esse prato é o prato oficial da Semana Santa no Espírito Santo. A origem dele ultrapassa 400 anos e envolve as tradições das comunidades litorâneas e vilas de pescadores. O prato leva muitos frutos do mar desfiados e cozidos: siri, caranguejo, camarão, ostra, sururu, badejo e bacalhau."

        food_name1_3.innerText = "Quibebe de Abóbora"
        food_img1_3.src = "https://cdn.panelinha.com.br/receita/1555347218472-CP-2019-29-01_6544.jpg"
        food_desc1_3.innerText = "O quibebe de abóbora é um purê feito com a fruta e temperado com alho, cebola, salsa e cebolinha, além de óleo de girassol, sal e açúcar. O acompanhamento é com costelinha de porco ou torresmo. Esses sabores, quando se misturam, formam um prato exótico e de sabor único."

        food_name1_4.innerText = "Camarão no Coco"
        food_img1_4.src = "https://midias.agazeta.com.br/2020/02/11/camarao-no-coco-famoso-prato-do-restaurante-atlantica-183317.jpg"
        food_desc1_4.innerText = "Um dos pratos mais exóticos e bonitos do Espírito Santo é o Camarão no coco. Ele leva água de coco e camarão como base, mas também tem salsa, leite de coco, sal e pimenta. É servido com batata palha artesanal e arroz branco."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7701014.136922567!2d-39.873300689731224!3d-19.53041333665115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7069579646359%3A0x4e1bd5243c50f799!2sEsp%C3%ADrito%20Santo!5e0!3m2!1spt-BR!2sbr!4v1636367622677!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima do Estado do Espírito Santo é tropical úmido, com temperaturas médias anuais de 23°C e volume de precipitação superior a 1.400 mm por ano, especialmente concentrada no verão."

        travel_desc1.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Vitória (Capital do Espírito Santo) varia em média de R$ 400 à R$ 700 dependendo da companhia aérea e outras variantes como horário ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "São Paulo"
        statetxt2.innerText = "São Paulo é uma das 27 unidades federativas do Brasil. Está situado na Região Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paraná a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, além do Oceano Atlântico a sudeste."
        state_img2.src = "https://exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg"

        food_name2_1.innerText = "Virado à Paulista"
        food_img2_1.src = "https://img.itdg.com.br/tdg/images/recipes/000/026/749/355376/355376_original.jpg"
        food_desc2_1.innerText = "É um prato típico do estado brasileiro de São Paulo, onde também é conhecido como Virado à Paulista. Foi criado na época das entradas, bandeiras e monções, no Brasil Colônia. Há várias combinações do prato em torno do básico de bisteca de porco, banana frita, feijão mulatinho virado com farinha de mandioca, arroz, couve e ovo frito."

        food_name2_2.innerText = "Cuscuz à paulista"
        food_img2_2.src = "https://img.itdg.com.br/tdg/images/recipes/000/061/325/325758/325758_original.jpg"
        food_desc2_2.innerText = "Muito popular no Nordeste, o cuscuz tem origem árabe e é uma das mais importantes receitas de São Paulo. É uma refeição simples e muito saborosa, que consiste basicamente em uma massa de milho cozida no vapor. Já no cuscuz à paulista, o prato recebe recheios variados, que podem ser carnes, peixes, frangos ou outras combinações que agradem o paladar."

        food_name2_3.innerText = "Bauru"
        food_img2_3.src = "http://dicas.guiamais.com.br/wp-content/uploads/2012/04/lanche-bauru.jpg"
        food_desc2_3.innerText = "Esta comida paulista foi criada na cidade de Bauru, interior de São Paulo. Ele já faz parte do cardápio de lanchonetes e restaurantes de todo País (em diferentes versões, é claro) e pode ser encontrado Brasil afora."

        food_name2_4.innerText = "Bolovo"
        food_img2_4.src = "https://img.itdg.com.br/tdg/images/recipes/000/199/322/308243/308243_original.jpg"
        food_desc2_4.innerText = "Uma missão quase impossível é encontrar o famoso bolovo fora de São Paulo. O bolovo é simplesmente um bolinho de carne moída recheado com um ovo cozido inteiro."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773123.4374115462!2d-50.880025451378756!3d-22.553250446881403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f58ad%3A0x1e5241e2e17b7c17!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1638976841787!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "São Paulo tem estações com características bem definidas, o que ajuda na hora de escolher o clima e tempo que mais te agrada. A cidade está localizada em uma zona de clima subtropical úmido, com características que definem um inverno frio e seco, que em regiões ao sul do estado, a temperatura pode chegar a 18ºC em média, com enorme incidência de chuva."

        travel_desc2.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço de um voo é acima de R$163, alémde hospedagem e atrações turísticas, e a duração do voo pode variar entre 1h40 e 6h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio de Janeiro"
        statetxt3.innerText = "O Rio de Janeiro é um estado no sudeste do Brasil. A sua capital, com o mesmo nome, é conhecida pelas praias, o Pão de Açúcar e a estátua do Cristo Redentor no cimo do morro do Corcovado. O ponto de referência do arquiteto Oscar Niemeyer, o Museu de Arte Contemporânea de Niterói, fica do lado oposto da Baía de Guanabara, em Niterói. Ao longo da costa atlântica do estado, encontra-se Ilha Grande, uma ilha arborizada rodeada de praias, e a cidade colonial de Paraty."
        state_img3.src = "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"

        food_name3_1.innerText = "Feijoada"
        food_img3_1.src = "https://img.cybercook.com.br/imagens/receitas/991/feijoada-carioca.jpeg"
        food_desc3_1.innerText = "A feijoada carioca é conhecida por ingredientes como feijão preto e diversas partes do porco. O prato fica ainda mais gostoso acompanhado de couve refogada caprichada, farofinha feita na hora e arroz branco."

        food_name3_2.innerText = "Bolinho de Bacalhau"
        food_img3_2.src = "https://receitasmais.com.br/wp-content/uploads/2013/03/Bolinho-de-bacalhau.jpg"
        food_desc3_2.innerText = "A massa do bolinho conta com batata e cheiro-verde, que dão aquele toque na textura e no sabor do salgado. Tudo pode ficar ainda mais gostoso se você servir esse aperitivo acompanhado de algumas gotinhas de azeite."

        food_name3_3.innerText = "Biscoito Globo"
        food_img3_3.src = "https://ogimg.infoglobo.com.br/in/19923793-52b-4f7/FT1086A/xglobo.jpg.pagespeed.ic.EG7ao22IEF.jpg"
        food_desc3_3.innerText = "Levinho, crocante e delicioso, o biscoito Globo tem esse nome em homenagem à padaria onde era feito. Nas terras cariocas, você pode encontrá-lo na versão salgada ou doce."

        food_name3_4.innerText = "Filé à Oswaldo Aranha"
        food_img3_4.src = "https://www.papodebar.com/wp-content/uploads/2012/11/file-oswaldo-aranha.jpg"
        food_desc3_4.innerText = "O nome da receita foi dado em homenagem ao político Oswaldo Aranha, que ia sempre a um restaurante na Lapa e pedia o mesmo prato: um filé temperado com alho frito acompanhado de batatas portuguesas, farofa de ovo e arroz soltinho."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786720.626764539!2d-45.16779367556124!3d-22.050767463332168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1639146625233!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima no Rio de Janeiro, é tropical, quente e úmido, com variações locais, devido às diferenças de altitude, vegetação e proximidade do oceano; a temperatura média anual é de 22º centígrados, mesmo assim, seu inverno pode contar com temperaturas abaixo de 20ºC. As chuvas variam de 1.200 a 1.800 mm anuais"

        travel_desc3.innerText = "O gasto total de uma viagem seria em cerca de R$ 2.181,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
        
    } else if(fregiao == 8 && fclima == 4) {
        place1txt.innerText = "São Paulo"
        statetxt1.innerText = "São Paulo é uma das 27 unidades federativas do Brasil. Está situado na Região Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paraná a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, além do Oceano Atlântico a sudeste."
        state_img1.src = "https://exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg"

        food_name1_1.innerText = "Virado à Paulista"
        food_img1_1.src = "https://img.itdg.com.br/tdg/images/recipes/000/026/749/355376/355376_original.jpg"
        food_desc1_1.innerText = "É um prato típico do estado brasileiro de São Paulo, onde também é conhecido como Virado à Paulista. Foi criado na época das entradas, bandeiras e monções, no Brasil Colônia. Há várias combinações do prato em torno do básico de bisteca de porco, banana frita, feijão mulatinho virado com farinha de mandioca, arroz, couve e ovo frito."

        food_name1_2.innerText = "Cuscuz à paulista"
        food_img1_2.src = "https://img.itdg.com.br/tdg/images/recipes/000/061/325/325758/325758_original.jpg"
        food_desc1_2.innerText = "Muito popular no Nordeste, o cuscuz tem origem árabe e é uma das mais importantes receitas de São Paulo. É uma refeição simples e muito saborosa, que consiste basicamente em uma massa de milho cozida no vapor. Já no cuscuz à paulista, o prato recebe recheios variados, que podem ser carnes, peixes, frangos ou outras combinações que agradem o paladar."

        food_name1_3.innerText = "Bauru"
        food_img1_3.src = "http://dicas.guiamais.com.br/wp-content/uploads/2012/04/lanche-bauru.jpg"
        food_desc1_3.innerText = "Esta comida paulista foi criada na cidade de Bauru, interior de São Paulo. Ele já faz parte do cardápio de lanchonetes e restaurantes de todo País (em diferentes versões, é claro) e pode ser encontrado Brasil afora."

        food_name1_4.innerText = "Bolovo"
        food_img1_4.src = "https://img.itdg.com.br/tdg/images/recipes/000/199/322/308243/308243_original.jpg"
        food_desc1_4.innerText = "Uma missão quase impossível é encontrar o famoso bolovo fora de São Paulo. O bolovo é simplesmente um bolinho de carne moída recheado com um ovo cozido inteiro."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773123.4374115462!2d-50.880025451378756!3d-22.553250446881403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f58ad%3A0x1e5241e2e17b7c17!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1638976841787!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "São Paulo tem estações com características bem definidas, o que ajuda na hora de escolher o clima e tempo que mais te agrada. A cidade está localizada em uma zona de clima subtropical úmido, com características que definem um inverno frio e seco, enquanto o verão é bem quente e úmido, com enorme incidência de chuva."

        travel_desc1.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço de um voo é acima de R$163, alémde hospedagem e atrações turísticas, e a duração do voo pode variar entre 1h40 e 6h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Minas Gerais"
        statetxt2.innerText = "Minas Gerais, um grande estado continental no sudeste do Brasil, é conhecido por cidades da era colonial que remetem à corrida do ouro no país no século 18. Entre elas estão São João del Rei, Tiradentes e Ouro Preto, a antiga capital, todas com ruas de paralelepípedo, mansões ornamentadas e igrejas barrocas decoradas pelo escultor Aleijadinho.O famoso trem a vapor Maria Fumaça liga Tiradentes a São João del Rei."
        state_img2.src = "https://content.presspage.com/uploads/685/c1920_tiradentesminasgeraisbrazil-2.jpg"

        food_name2_1.innerText = "Frango com Quiabo"
        food_img2_1.src = "https://tecnonoticias.com.br/blogs/cozinhafacil/wp-content/uploads/2020/07/frango-com-quiabo2.jpeg"
        food_desc2_1.innerText = "A mistura desses dois ingredientes rende um dos pratos mais clássicos para os mineiros, feito a partir de um ensopado de frango caipira. Afirma-se que o sabor “original” dessa receita só é possível com a utilização desse tipo de frango, pois o frango industrializado acaba tirando toda a essência do autêntico frango com quiabo."

        food_name2_2.innerText = "Tutu"
        food_img2_2.src = "https://www.visiteobrasil.com.br/galerias/carac8-minas-gerais-tutu-a-mineira/587-112453-culinaria-mineira-tutu-a-mineira-foto-divulgacaogr.jpg"
        food_desc2_2.innerText = "O feijão, um dos ingredientes mais importantes para os mineiros, se transforma no saboroso tutu quando é cozido, temperado, batido e misturado com farinha de milho ou de mandioca. Adquire uma consistência mais pastosa e pode ganhar o adicional de torresmo, bacon ou ovos cozidos."

        food_name2_3.innerText = "Feijão Tropeiro"
        food_img2_3.src = "https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg"
        food_desc2_3.innerText = "Mais uma vez, o feijão estrela uma das receitas mais tradicionais de Minas Gerais, em um prato que surgiu com os tropeiros, que misturavam farinha, carne e ovos ao feijão. O resultado é uma iguaria com sabor único, que está presente em larga escala pelos restaurantes dos mais de 800 municípios mineiros."

        food_name2_4.innerText = "Leitão a Pururuca"
        food_img2_4.src = "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-leitao-pururuca.jpg"
        food_desc2_4.innerText = "Para que se prepare um leitão a pururuca, é necessário empregar muita técnica. O porco deve ser assado com pele e, logo após esse procedimento, deve-se passar gelo em toda sua superfície para, então, jogar óleo muito quente sobre ela. Quando bem feita, o resultado dessa técnica é uma pele fritinha, cheia de bolhas e que fica crocante."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7747774.534855807!2d-49.94785049282104!3d-18.524697480011483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690a165324289%3A0x112170c9379de7b3!2sMinas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1639138637724!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "No Território mineiro o clima que predomina é o tropical de altitude, além de apresentar o tropical. O clima tropical se apresenta nas áreas mais baixas, a temperatura nessa região oscila entre 22 e 23ºC com duas estações bem definidas, com verões chuvosos e invernos secos."

        travel_desc2.innerText = "O preço de uma passagem de ida e volta partindo de São Paulo até Minas Gerais varia em média de R$ 500 à R$ 850 dependendo da companhia aérea e outras variantes como horário, paradas ou tipo de viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio de Janeiro"
        statetxt3.innerText = "O Rio de Janeiro é um estado no sudeste do Brasil. A sua capital, com o mesmo nome, é conhecida pelas praias, o Pão de Açúcar e a estátua do Cristo Redentor no cimo do morro do Corcovado. O ponto de referência do arquiteto Oscar Niemeyer, o Museu de Arte Contemporânea de Niterói, fica do lado oposto da Baía de Guanabara, em Niterói. Ao longo da costa atlântica do estado, encontra-se Ilha Grande, uma ilha arborizada rodeada de praias, e a cidade colonial de Paraty."
        state_img3.src = "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"

        food_name3_1.innerText = "Feijoada"
        food_img3_1.src = "https://img.cybercook.com.br/imagens/receitas/991/feijoada-carioca.jpeg"
        food_desc3_1.innerText = "A feijoada carioca é conhecida por ingredientes como feijão preto e diversas partes do porco. O prato fica ainda mais gostoso acompanhado de couve refogada caprichada, farofinha feita na hora e arroz branco."

        food_name3_2.innerText = "Bolinho de Bacalhau"
        food_img3_2.src = "https://receitasmais.com.br/wp-content/uploads/2013/03/Bolinho-de-bacalhau.jpg"
        food_desc3_2.innerText = "A massa do bolinho conta com batata e cheiro-verde, que dão aquele toque na textura e no sabor do salgado. Tudo pode ficar ainda mais gostoso se você servir esse aperitivo acompanhado de algumas gotinhas de azeite."

        food_name3_3.innerText = "Biscoito Globo"
        food_img3_3.src = "https://ogimg.infoglobo.com.br/in/19923793-52b-4f7/FT1086A/xglobo.jpg.pagespeed.ic.EG7ao22IEF.jpg"
        food_desc3_3.innerText = "Levinho, crocante e delicioso, o biscoito Globo tem esse nome em homenagem à padaria onde era feito. Nas terras cariocas, você pode encontrá-lo na versão salgada ou doce."

        food_name3_4.innerText = "Filé à Oswaldo Aranha"
        food_img3_4.src = "https://www.papodebar.com/wp-content/uploads/2012/11/file-oswaldo-aranha.jpg"
        food_desc3_4.innerText = "O nome da receita foi dado em homenagem ao político Oswaldo Aranha, que ia sempre a um restaurante na Lapa e pedia o mesmo prato: um filé temperado com alho frito acompanhado de batatas portuguesas, farofa de ovo e arroz soltinho."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786720.626764539!2d-45.16779367556124!3d-22.050767463332168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1639146625233!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima no Rio de Janeiro, é tropical, quente e úmido, com variações locais, devido às diferenças de altitude, vegetação e proximidade do oceano; a temperatura média anual é de 22º centígrados, com médias diárias elevadas no verão (de 30º a 32º); as chuvas variam de 1.200 a 1.800 mm anuais"

        travel_desc3.innerText = "O gasto total de uma viagem seria em cerca de R$ 2.181,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 9 && fclima == 1) {
        place1txt.innerText = "Santa Catarina"
        statetxt1.innerText = "Santa Catarina é um estado na região sul do Brasil. Com uma longa costa com o Atlântico e muitas ilhas, ela é conhecida por suas praias e montanhas. Florianópolis, a capital, tem um mercado público tradicional com bares, restaurantes e barracas de comida, além de um museu histórico instalado em um palácio do governo colonial do século 19. Florianópolis está basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte."
        state_img1.src = "http://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"

        food_name1_1.innerText = "Polenta no Fio"
        food_img1_1.src = "https://cafeviagem.com/wp-content/uploads/2020/09/receita-polenta-serra-gaucha-4.jpg"
        food_desc1_1.innerText = "A polenta é uma refeição trazida pelos italianos e que ficou bastante popular no sul do país em função dos colonos vindos de lá e se instalaram no estado. Diferente da maioria dos demais locais do Brasil, no sul a polenta é mais firme, cozida por mais tempo. Inclusive, ganhou esse nome pois dizem que ela pode ser cortada com um fio de algodão."

        food_name1_2.innerText = "Pirão de Farinha de Mandioca"
        food_img1_2.src = "https://media.gazetadopovo.com.br/bomgourmet/2017/08/pirao-nacional-5e6438d0.jpg"
        food_desc1_2.innerText = "A cultura cabocla deixou as primeiras contribuições tanto de ingredientes quanto de técnicas para a culinária catarinense, um deles foi o costume de comer mandioca. O delicioso pirão de farinha de mandioca é um tradicional acompanhamento de pratos com frutos do mar no estado, que é o encontro dessa herança indígena com a açoriana."

        food_name1_3.innerText = "Joelho de Porco (Eisbein)"
        food_img1_3.src = "https://receitasnotadez.com.br/wp-content/uploads/2020/03/512356000-612x612-1.jpg"
        food_desc1_3.innerText = "O joelho de porco é um prato em que essa parte da perna dianteira do animal é servido como o ingrediente principal, assado por horas, e acompanhado de especiarias. É tradicionalmente apresentado com chucrute. Por sua popularidade, essa refeição é facilmente encontrada nos restaurantes locais."

        food_name1_4.innerText = "Churrasco e Chimarrão"
        food_img1_4.src = "https://i.pinimg.com/originals/fd/04/30/fd0430fc04625472a73ae994ea228343.jpg"
        food_desc1_4.innerText = "Em virtude da proximidade com o Rio Grande do Sul, a culinária catarinense também recebeu forte influência gaúcha. Portanto é comum encontrar ótimas churrascarias espalhadas pelo estado. Além disso, uma das bebidas preferidas do povo da região é o chimarrão, também herança dos vizinhos."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619414.3323212015!2d-53.32679246287408!3d-27.637388274056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1639143958280!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima do estado é muito influenciado pelas massas de ar polares e intertropicais, a temperatura média das regiões litorâneas é de 18°C a 20°C. Na costa do Estado, as temperaturas são mais amenas, a capital Florianópolis, por exemplo, tem variações entre 20°C e 29°C no verão."

        travel_desc1.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço de um voo é acima de R$562 (ida e volta), e a duração do voo pode variar entre 1h40 e 4h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Paraná"
        statetxt2.innerText = "Paraná é um estado no sul do Brasil que alberga as Cataratas do Iguaçu, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Iguaçu, uma floresta subtropical com diversas espécies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quilómetros a este, perto das praias atlânticas de Guaratuba e do grande porto de Paranaguá, fica a frondosa capital do estado, Curitiba."
        state_img2.src = "https://www.temporadalivre.com/blog-media/posts/cover/10083/os-principais-pontos-turisticos-do-parana-9124315e.jpg"

        food_name2_1.innerText = "Barreado"
        food_img2_1.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/barreado.png"
        food_desc2_1.innerText = "O barreado segue o ritual de cozinhar a carne por muitas horas numa panela de barro lacrada com farinha. Era preparado pelos caboclos e pescadores durante as festividades do carnaval, ou servir os tropeiros de passagem pela região, ou ainda para alimentar quem participava dos mutirões para construção de espaços públicos."

        food_name2_2.innerText = "Carne de Onça"
        food_img2_2.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/carnedeonca.png"
        food_desc2_2.innerText = "O emblemático prato curitibano faz sucesso e desperta muita curiosidade pelo nome, mas ao contrário do que sugere é preparado com carne crua bovina e não de felino. A origem do nome é desconhecida, provavelmente foi atribuída pelo hálito resultante da ingestão da carne com temperos e cebola crua utilizada no preparo."

        food_name2_3.innerText = "Pachola"
        food_img2_3.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pachola.png"
        food_desc2_3.innerText = "O nome é peculiar, porém o preparo da Pachola é muito simples: 'arroz solto com frango refogado, que leva diversos condimentos'. O prato é servido anualmente no sábado seguinte à sexta-feira da Paixão."

        food_name2_4.innerText = "Pierogi"
        food_img2_4.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pierogi.png"
        food_desc2_4.innerText = "O pequeno pastel, em formato de meia-lua, que lembra o ravióli italiano, é muito comum no Paraná. Chamado de pierogi, pirogue, pierog, perohê ou varenike (são muitas as denominações e variações) comumente é servido cozido, frito ou assado e recheado com ricota e batata."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432471.978817971!2d-55.816375603025236!3d-24.549937469674937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db0b9430b8629d%3A0xe893fd5063cef061!2zUGFyYW7DoQ!5e0!3m2!1spt-BR!2sbr!4v1639145496685!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do Paraná encontra-se dividido em subtropical e tropical. O clima tropical ocorre na bacia do Paraná e no litoral. O subtropical Cfb, com verões suaves, possui grande distribuição anual de chuvas (1 200 mm) e médias térmicas por volta dos 17º C por ano."

        travel_desc2.innerText = "O gasto total de uma viagem confortável de quatro dias seria em cerca de R$ 1.800,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio Grande do Sul"
        statetxt3.innerText = "Rio Grande do Sul é o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Gaúcha alberga a região vinícola do Vale dos Vinhedos e inclui cidades turísticas de estilo alemão como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, é um grande porto com estruturas clássicas como o Mercado Público e a Catedral Metropolitana, no centro histórico."
        state_img3.src = "https://mapadomundo.org/wp-content/uploads/2016/12/Missoes_iStock.jpg"

        food_name3_1.innerText = "Tainha Assada"
        food_img3_1.src = "https://ceoagro.com.br/wp-content/uploads/2019/07/tainha-assada1.jpg"
        food_desc3_1.innerText = "Essa é uma receita bastante famosa e consumida principalmente nas festividades para Nossa Senhora dos Navegantes e na Festa do Mar, que ocorrem no estado. Normalmente ela é feita na brasa, presa em uma espécie de bambu-taquara."

        food_name3_2.innerText = "Galeto na Brasa"
        food_img3_2.src = "https://exame.com/wp-content/uploads/2020/12/Galetos-1.jpg"
        food_desc3_2.innerText = "O prato, que teve forte influência italiana, é servido em várias galeterias pelo estado todo. Sempre assado na brasa, depois de ter passado várias horas marinando em um tempero especial. Normalmente os restaurantes servem o galeto acompanhado de uma boa sopa de capeletti, salada de batata e até mesmo polenta frita."

        food_name3_3.innerText = "Pinhão"
        food_img3_3.src = "https://www.jornaldocomercio.com/_midias/jpg/2021/05/07/pinhao_6847dbca_af4e_11eb_b1a8_eec3a079c8c5-9311452.jpg"
        food_desc3_3.innerText = "O Rio Grande do Sul é um dos maiores produtores de pinhão. Além disso, os gaúchos amam esse ingrediente. Mesmo sendo consumido em outras partes da região sul, o pinhão também é um prato muito característico do Rio Grande."

        food_name3_4.innerText = "Entrevero"
        food_img3_4.src = "https://fuiporaiblog.com/wp-content/uploads/2020/04/entrevero.jpg"
        food_desc3_4.innerText = "O entrevero é uma delícia e muito consumido em outras partes da região sul. O prato pode ser feito com vários ingredientes, como carne de porco, coração de frango, bacon e até mesmo com pinhão. A receita é basicamente uma mistura de carnes cozidas com alguns legumes, servido com acompanhamentos como arroz branco e purê de batatas."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7051933.010636368!2d-58.16318989122311!3d-30.341664782596514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1639147318696!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "Devido à sua posição geográfica, o estado apresenta grandes diferenças em relação ao Brasil. A latitude reforça as influências das massas de ar oriundas da região Polar e das zonas Tropical Continental e Atlântica. As temperaturas apresentam grande variação sazonal, com verões quentes e invernos bastante rigorosos, com a ocorrência de geadas e precipitação eventual de neve. As temperaturas médias variam entre 15° e 18°C, com máximas de 40°C."

        travel_desc3.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço com quatro diárias é por volta de R$89, fora atrações turísticas que você poderá encontrar. A duração do voo pode variar entre 1h43 e 8h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 9 && fclima == 2) {
        place1txt.innerText = "Rio Grande do Sul"
        statetxt1.innerText = "Rio Grande do Sul é o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Gaúcha alberga a região vinícola do Vale dos Vinhedos e inclui cidades turísticas de estilo alemão como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, é um grande porto com estruturas clássicas como o Mercado Público e a Catedral Metropolitana, no centro histórico."
        state_img1.src = "https://mapadomundo.org/wp-content/uploads/2016/12/Missoes_iStock.jpg"

        food_name1_1.innerText = "Tainha Assada"
        food_img1_1.src = "https://ceoagro.com.br/wp-content/uploads/2019/07/tainha-assada1.jpg"
        food_desc1_1.innerText = "Essa é uma receita bastante famosa e consumida principalmente nas festividades para Nossa Senhora dos Navegantes e na Festa do Mar, que ocorrem no estado. Normalmente ela é feita na brasa, presa em uma espécie de bambu-taquara."

        food_name1_2.innerText = "Galeto na Brasa"
        food_img1_2.src = "https://exame.com/wp-content/uploads/2020/12/Galetos-1.jpg"
        food_desc1_2.innerText = "O prato, que teve forte influência italiana, é servido em várias galeterias pelo estado todo. Sempre assado na brasa, depois de ter passado várias horas marinando em um tempero especial. Normalmente os restaurantes servem o galeto acompanhado de uma boa sopa de capeletti, salada de batata e até mesmo polenta frita."

        food_name1_3.innerText = "Pinhão"
        food_img1_3.src = "https://www.jornaldocomercio.com/_midias/jpg/2021/05/07/pinhao_6847dbca_af4e_11eb_b1a8_eec3a079c8c5-9311452.jpg"
        food_desc1_3.innerText = "O Rio Grande do Sul é um dos maiores produtores de pinhão. Além disso, os gaúchos amam esse ingrediente. Mesmo sendo consumido em outras partes da região sul, o pinhão também é um prato muito característico do Rio Grande."

        food_name1_4.innerText = "Entrevero"
        food_img1_4.src = "https://fuiporaiblog.com/wp-content/uploads/2020/04/entrevero.jpg"
        food_desc1_4.innerText = "O entrevero é uma delícia e muito consumido em outras partes da região sul. O prato pode ser feito com vários ingredientes, como carne de porco, coração de frango, bacon e até mesmo com pinhão. A receita é basicamente uma mistura de carnes cozidas com alguns legumes, servido com acompanhamentos como arroz branco e purê de batatas."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7051933.010636368!2d-58.16318989122311!3d-30.341664782596514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1639147318696!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Devido à sua posição geográfica, o estado apresenta grandes diferenças em relação ao Brasil. A latitude reforça as influências das massas de ar oriundas da região Polar e das zonas Tropical Continental e Atlântica. As temperaturas apresentam grande variação sazonal, com verões quentes e invernos bastante rigorosos, com a ocorrência de geadas e precipitação eventual de neve. As temperaturas médias variam entre 15° e 18°C, com mínimas de até -10°C."

        travel_desc1.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço com quatro diárias é por volta de R$89, fora atrações turísticas que você poderá encontrar. A duração do voo pode variar entre 1h43 e 8h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Paraná"
        statetxt2.innerText = "Paraná é um estado no sul do Brasil que alberga as Cataratas do Iguaçu, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Iguaçu, uma floresta subtropical com diversas espécies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quilómetros a este, perto das praias atlânticas de Guaratuba e do grande porto de Paranaguá, fica a frondosa capital do estado, Curitiba."
        state_img2.src = "https://www.temporadalivre.com/blog-media/posts/cover/10083/os-principais-pontos-turisticos-do-parana-9124315e.jpg"

        food_name2_1.innerText = "Barreado"
        food_img2_1.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/barreado.png"
        food_desc2_1.innerText = "O barreado segue o ritual de cozinhar a carne por muitas horas numa panela de barro lacrada com farinha. Era preparado pelos caboclos e pescadores durante as festividades do carnaval, ou servir os tropeiros de passagem pela região, ou ainda para alimentar quem participava dos mutirões para construção de espaços públicos."

        food_name2_2.innerText = "Carne de Onça"
        food_img2_2.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/carnedeonca.png"
        food_desc2_2.innerText = "O emblemático prato curitibano faz sucesso e desperta muita curiosidade pelo nome, mas ao contrário do que sugere é preparado com carne crua bovina e não de felino. A origem do nome é desconhecida, provavelmente foi atribuída pelo hálito resultante da ingestão da carne com temperos e cebola crua utilizada no preparo."

        food_name2_3.innerText = "Pachola"
        food_img2_3.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pachola.png"
        food_desc2_3.innerText = "O nome é peculiar, porém o preparo da Pachola é muito simples: 'arroz solto com frango refogado, que leva diversos condimentos'. O prato é servido anualmente no sábado seguinte à sexta-feira da Paixão."

        food_name2_4.innerText = "Pierogi"
        food_img2_4.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pierogi.png"
        food_desc2_4.innerText = "O pequeno pastel, em formato de meia-lua, que lembra o ravióli italiano, é muito comum no Paraná. Chamado de pierogi, pirogue, pierog, perohê ou varenike (são muitas as denominações e variações) comumente é servido cozido, frito ou assado e recheado com ricota e batata."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432471.978817971!2d-55.816375603025236!3d-24.549937469674937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db0b9430b8629d%3A0xe893fd5063cef061!2zUGFyYW7DoQ!5e0!3m2!1spt-BR!2sbr!4v1639145496685!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do Paraná encontra-se dividido em subtropical e tropical. O clima tropical ocorre na bacia do Paraná e no litoral. O subtropical Cfb, com verões suaves, possui grande distribuição anual de chuvas (1 200 mm) e médias térmicas por volta dos 17º C por ano."

        travel_desc2.innerText = "O gasto total de uma viagem confortável de quatro dias seria em cerca de R$ 1.800,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Santa Catarina"
        statetxt3.innerText = "Santa Catarina é um estado na região sul do Brasil. Com uma longa costa com o Atlântico e muitas ilhas, ela é conhecida por suas praias e montanhas. Florianópolis, a capital, tem um mercado público tradicional com bares, restaurantes e barracas de comida, além de um museu histórico instalado em um palácio do governo colonial do século 19. Florianópolis está basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte."
        state_img3.src = "http://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"

        food_name3_1.innerText = "Polenta no Fio"
        food_img3_1.src = "https://cafeviagem.com/wp-content/uploads/2020/09/receita-polenta-serra-gaucha-4.jpg"
        food_desc3_1.innerText = "A polenta é uma refeição trazida pelos italianos e que ficou bastante popular no sul do país em função dos colonos vindos de lá e se instalaram no estado. Diferente da maioria dos demais locais do Brasil, no sul a polenta é mais firme, cozida por mais tempo. Inclusive, ganhou esse nome pois dizem que ela pode ser cortada com um fio de algodão."

        food_name3_2.innerText = "Pirão de Farinha de Mandioca"
        food_img3_2.src = "https://media.gazetadopovo.com.br/bomgourmet/2017/08/pirao-nacional-5e6438d0.jpg"
        food_desc3_2.innerText = "A cultura cabocla deixou as primeiras contribuições tanto de ingredientes quanto de técnicas para a culinária catarinense, um deles foi o costume de comer mandioca. O delicioso pirão de farinha de mandioca é um tradicional acompanhamento de pratos com frutos do mar no estado, que é o encontro dessa herança indígena com a açoriana."

        food_name3_3.innerText = "Joelho de Porco (Eisbein)"
        food_img3_3.src = "https://receitasnotadez.com.br/wp-content/uploads/2020/03/512356000-612x612-1.jpg"
        food_desc3_3.innerText = "O joelho de porco é um prato em que essa parte da perna dianteira do animal é servido como o ingrediente principal, assado por horas, e acompanhado de especiarias. É tradicionalmente apresentado com chucrute. Por sua popularidade, essa refeição é facilmente encontrada nos restaurantes locais."

        food_name3_4.innerText = "Churrasco e Chimarrão"
        food_img3_4.src = "https://i.pinimg.com/originals/fd/04/30/fd0430fc04625472a73ae994ea228343.jpg"
        food_desc3_4.innerText = "Em virtude da proximidade com o Rio Grande do Sul, a culinária catarinense também recebeu forte influência gaúcha. Portanto é comum encontrar ótimas churrascarias espalhadas pelo estado. Além disso, uma das bebidas preferidas do povo da região é o chimarrão, também herança dos vizinhos."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619414.3323212015!2d-53.32679246287408!3d-27.637388274056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1639143958280!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do estado é muito influenciado pelas massas de ar polares e intertropicais, a temperatura média das regiões litorâneas é de 18°C a 20°C. Na costa do Estado, as temperaturas são mais amenas, a capital Florianópolis, por exemplo, tem variações entre 20°C e 29°C no verão."

        travel_desc3.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço de um voo é acima de R$562 (ida e volta), e a duração do voo pode variar entre 1h40 e 4h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 9 && fclima == 3) {
        place1txt.innerText = "Rio Grande do Sul"
        statetxt1.innerText = "Rio Grande do Sul é o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Gaúcha alberga a região vinícola do Vale dos Vinhedos e inclui cidades turísticas de estilo alemão como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, é um grande porto com estruturas clássicas como o Mercado Público e a Catedral Metropolitana, no centro histórico."
        state_img1.src = "https://mapadomundo.org/wp-content/uploads/2016/12/Missoes_iStock.jpg"

        food_name1_1.innerText = "Tainha Assada"
        food_img1_1.src = "https://ceoagro.com.br/wp-content/uploads/2019/07/tainha-assada1.jpg"
        food_desc1_1.innerText = "Essa é uma receita bastante famosa e consumida principalmente nas festividades para Nossa Senhora dos Navegantes e na Festa do Mar, que ocorrem no estado. Normalmente ela é feita na brasa, presa em uma espécie de bambu-taquara."

        food_name1_2.innerText = "Galeto na Brasa"
        food_img1_2.src = "https://exame.com/wp-content/uploads/2020/12/Galetos-1.jpg"
        food_desc1_2.innerText = "O prato, que teve forte influência italiana, é servido em várias galeterias pelo estado todo. Sempre assado na brasa, depois de ter passado várias horas marinando em um tempero especial. Normalmente os restaurantes servem o galeto acompanhado de uma boa sopa de capeletti, salada de batata e até mesmo polenta frita."

        food_name1_3.innerText = "Pinhão"
        food_img1_3.src = "https://www.jornaldocomercio.com/_midias/jpg/2021/05/07/pinhao_6847dbca_af4e_11eb_b1a8_eec3a079c8c5-9311452.jpg"
        food_desc1_3.innerText = "O Rio Grande do Sul é um dos maiores produtores de pinhão. Além disso, os gaúchos amam esse ingrediente. Mesmo sendo consumido em outras partes da região sul, o pinhão também é um prato muito característico do Rio Grande."

        food_name1_4.innerText = "Entrevero"
        food_img1_4.src = "https://fuiporaiblog.com/wp-content/uploads/2020/04/entrevero.jpg"
        food_desc1_4.innerText = "O entrevero é uma delícia e muito consumido em outras partes da região sul. O prato pode ser feito com vários ingredientes, como carne de porco, coração de frango, bacon e até mesmo com pinhão. A receita é basicamente uma mistura de carnes cozidas com alguns legumes, servido com acompanhamentos como arroz branco e purê de batatas."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7051933.010636368!2d-58.16318989122311!3d-30.341664782596514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1639147318696!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Devido à sua posição geográfica, o estado apresenta grandes diferenças em relação ao Brasil. A latitude reforça as influências das massas de ar oriundas da região Polar e das zonas Tropical Continental e Atlântica. As temperaturas apresentam grande variação sazonal, com verões quentes e invernos bastante rigorosos, com a ocorrência de geadas e precipitação eventual de neve. As temperaturas médias variam entre 15° e 18°C, com mínimas de até -10°C."

        travel_desc1.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço com quatro diárias é por volta de R$89, fora atrações turísticas que você poderá encontrar. A duração do voo pode variar entre 1h43 e 8h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Santa Catarina"
        statetxt2.innerText = "Santa Catarina é um estado na região sul do Brasil. Com uma longa costa com o Atlântico e muitas ilhas, ela é conhecida por suas praias e montanhas. Florianópolis, a capital, tem um mercado público tradicional com bares, restaurantes e barracas de comida, além de um museu histórico instalado em um palácio do governo colonial do século 19. Florianópolis está basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte."
        state_img2.src = "http://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"

        food_name2_1.innerText = "Polenta no Fio"
        food_img2_1.src = "https://cafeviagem.com/wp-content/uploads/2020/09/receita-polenta-serra-gaucha-4.jpg"
        food_desc2_1.innerText = "A polenta é uma refeição trazida pelos italianos e que ficou bastante popular no sul do país em função dos colonos vindos de lá e se instalaram no estado. Diferente da maioria dos demais locais do Brasil, no sul a polenta é mais firme, cozida por mais tempo. Inclusive, ganhou esse nome pois dizem que ela pode ser cortada com um fio de algodão."

        food_name2_2.innerText = "Pirão de Farinha de Mandioca"
        food_img2_2.src = "https://media.gazetadopovo.com.br/bomgourmet/2017/08/pirao-nacional-5e6438d0.jpg"
        food_desc2_2.innerText = "A cultura cabocla deixou as primeiras contribuições tanto de ingredientes quanto de técnicas para a culinária catarinense, um deles foi o costume de comer mandioca. O delicioso pirão de farinha de mandioca é um tradicional acompanhamento de pratos com frutos do mar no estado, que é o encontro dessa herança indígena com a açoriana."

        food_name2_3.innerText = "Joelho de Porco (Eisbein)"
        food_img2_3.src = "https://receitasnotadez.com.br/wp-content/uploads/2020/03/512356000-612x612-1.jpg"
        food_desc2_3.innerText = "O joelho de porco é um prato em que essa parte da perna dianteira do animal é servido como o ingrediente principal, assado por horas, e acompanhado de especiarias. É tradicionalmente apresentado com chucrute. Por sua popularidade, essa refeição é facilmente encontrada nos restaurantes locais."

        food_name2_4.innerText = "Churrasco e Chimarrão"
        food_img2_4.src = "https://i.pinimg.com/originals/fd/04/30/fd0430fc04625472a73ae994ea228343.jpg"
        food_desc2_4.innerText = "Em virtude da proximidade com o Rio Grande do Sul, a culinária catarinense também recebeu forte influência gaúcha. Portanto é comum encontrar ótimas churrascarias espalhadas pelo estado. Além disso, uma das bebidas preferidas do povo da região é o chimarrão, também herança dos vizinhos."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619414.3323212015!2d-53.32679246287408!3d-27.637388274056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1639143958280!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do estado é muito influenciado pelas massas de ar polares e intertropicais, a temperatura média das regiões litorâneas é de 18°C a 20°C. Na costa do Estado, as temperaturas são mais amenas, a capital Florianópolis, por exemplo, tem variações entre 20°C e 29°C no verão."

        travel_desc2.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço de um voo é acima de R$562 (ida e volta), e a duração do voo pode variar entre 1h40 e 4h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Paraná"
        statetxt3.innerText = "Paraná é um estado no sul do Brasil que alberga as Cataratas do Iguaçu, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Iguaçu, uma floresta subtropical com diversas espécies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quilómetros a este, perto das praias atlânticas de Guaratuba e do grande porto de Paranaguá, fica a frondosa capital do estado, Curitiba."
        state_img3.src = "https://www.temporadalivre.com/blog-media/posts/cover/10083/os-principais-pontos-turisticos-do-parana-9124315e.jpg"

        food_name3_1.innerText = "Barreado"
        food_img3_1.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/barreado.png"
        food_desc3_1.innerText = "O barreado segue o ritual de cozinhar a carne por muitas horas numa panela de barro lacrada com farinha. Era preparado pelos caboclos e pescadores durante as festividades do carnaval, ou servir os tropeiros de passagem pela região, ou ainda para alimentar quem participava dos mutirões para construção de espaços públicos."

        food_name3_2.innerText = "Carne de Onça"
        food_img3_2.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/carnedeonca.png"
        food_desc3_2.innerText = "O emblemático prato curitibano faz sucesso e desperta muita curiosidade pelo nome, mas ao contrário do que sugere é preparado com carne crua bovina e não de felino. A origem do nome é desconhecida, provavelmente foi atribuída pelo hálito resultante da ingestão da carne com temperos e cebola crua utilizada no preparo."

        food_name3_3.innerText = "Pachola"
        food_img3_3.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pachola.png"
        food_desc3_3.innerText = "O nome é peculiar, porém o preparo da Pachola é muito simples: 'arroz solto com frango refogado, que leva diversos condimentos'. O prato é servido anualmente no sábado seguinte à sexta-feira da Paixão."

        food_name3_4.innerText = "Pierogi"
        food_img3_4.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pierogi.png"
        food_desc3_4.innerText = "O pequeno pastel, em formato de meia-lua, que lembra o ravióli italiano, é muito comum no Paraná. Chamado de pierogi, pirogue, pierog, perohê ou varenike (são muitas as denominações e variações) comumente é servido cozido, frito ou assado e recheado com ricota e batata."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432471.978817971!2d-55.816375603025236!3d-24.549937469674937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db0b9430b8629d%3A0xe893fd5063cef061!2zUGFyYW7DoQ!5e0!3m2!1spt-BR!2sbr!4v1639145496685!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Paraná encontra-se dividido em subtropical e tropical. O clima tropical ocorre na bacia do Paraná e no litoral. O subtropical Cfb, com verões suaves, possui grande distribuição anual de chuvas (1 200 mm) e médias térmicas por volta dos 17º C por ano."

        travel_desc3.innerText = "O gasto total de uma viagem confortável de quatro dias seria em cerca de R$ 1.800,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 9 && fclima == 4) {
        place1txt.innerText = "Paraná"
        statetxt1.innerText = "Paraná é um estado no sul do Brasil que alberga as Cataratas do Iguaçu, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Iguaçu, uma floresta subtropical com diversas espécies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quilómetros a este, perto das praias atlânticas de Guaratuba e do grande porto de Paranaguá, fica a frondosa capital do estado, Curitiba."
        state_img1.src = "https://www.temporadalivre.com/blog-media/posts/cover/10083/os-principais-pontos-turisticos-do-parana-9124315e.jpg"

        food_name1_1.innerText = "Barreado"
        food_img1_1.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/barreado.png"
        food_desc1_1.innerText = "O barreado segue o ritual de cozinhar a carne por muitas horas numa panela de barro lacrada com farinha. Era preparado pelos caboclos e pescadores durante as festividades do carnaval, ou servir os tropeiros de passagem pela região, ou ainda para alimentar quem participava dos mutirões para construção de espaços públicos."

        food_name1_2.innerText = "Carne de Onça"
        food_img1_2.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/carnedeonca.png"
        food_desc1_2.innerText = "O emblemático prato curitibano faz sucesso e desperta muita curiosidade pelo nome, mas ao contrário do que sugere é preparado com carne crua bovina e não de felino. A origem do nome é desconhecida, provavelmente foi atribuída pelo hálito resultante da ingestão da carne com temperos e cebola crua utilizada no preparo."

        food_name1_3.innerText = "Pachola"
        food_img1_3.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pachola.png"
        food_desc1_3.innerText = "O nome é peculiar, porém o preparo da Pachola é muito simples: 'arroz solto com frango refogado, que leva diversos condimentos'. O prato é servido anualmente no sábado seguinte à sexta-feira da Paixão."

        food_name1_4.innerText = "Pierogi"
        food_img1_4.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pierogi.png"
        food_desc1_4.innerText = "O pequeno pastel, em formato de meia-lua, que lembra o ravióli italiano, é muito comum no Paraná. Chamado de pierogi, pirogue, pierog, perohê ou varenike (são muitas as denominações e variações) comumente é servido cozido, frito ou assado e recheado com ricota e batata."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432471.978817971!2d-55.816375603025236!3d-24.549937469674937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db0b9430b8629d%3A0xe893fd5063cef061!2zUGFyYW7DoQ!5e0!3m2!1spt-BR!2sbr!4v1639145496685!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima do Paraná encontra-se dividido em subtropical e tropical. O clima tropical ocorre na bacia do Paraná e no litoral. O subtropical Cfb, com verões suaves, possui grande distribuição anual de chuvas (1 200 mm) e médias térmicas por volta dos 17º C por ano."

        travel_desc1.innerText = "O gasto total de uma viagem confortável de quatro dias seria em cerca de R$ 1.800,00 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Santa Catarina"
        statetxt2.innerText = "Santa Catarina é um estado na região sul do Brasil. Com uma longa costa com o Atlântico e muitas ilhas, ela é conhecida por suas praias e montanhas. Florianópolis, a capital, tem um mercado público tradicional com bares, restaurantes e barracas de comida, além de um museu histórico instalado em um palácio do governo colonial do século 19. Florianópolis está basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte."
        state_img2.src = "http://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"

        food_name2_1.innerText = "Polenta no Fio"
        food_img2_1.src = "https://cafeviagem.com/wp-content/uploads/2020/09/receita-polenta-serra-gaucha-4.jpg"
        food_desc2_1.innerText = "A polenta é uma refeição trazida pelos italianos e que ficou bastante popular no sul do país em função dos colonos vindos de lá e se instalaram no estado. Diferente da maioria dos demais locais do Brasil, no sul a polenta é mais firme, cozida por mais tempo. Inclusive, ganhou esse nome pois dizem que ela pode ser cortada com um fio de algodão."

        food_name2_2.innerText = "Pirão de Farinha de Mandioca"
        food_img2_2.src = "https://media.gazetadopovo.com.br/bomgourmet/2017/08/pirao-nacional-5e6438d0.jpg"
        food_desc2_2.innerText = "A cultura cabocla deixou as primeiras contribuições tanto de ingredientes quanto de técnicas para a culinária catarinense, um deles foi o costume de comer mandioca. O delicioso pirão de farinha de mandioca é um tradicional acompanhamento de pratos com frutos do mar no estado, que é o encontro dessa herança indígena com a açoriana."

        food_name2_3.innerText = "Joelho de Porco (Eisbein)"
        food_img2_3.src = "https://receitasnotadez.com.br/wp-content/uploads/2020/03/512356000-612x612-1.jpg"
        food_desc2_3.innerText = "O joelho de porco é um prato em que essa parte da perna dianteira do animal é servido como o ingrediente principal, assado por horas, e acompanhado de especiarias. É tradicionalmente apresentado com chucrute. Por sua popularidade, essa refeição é facilmente encontrada nos restaurantes locais."

        food_name2_4.innerText = "Churrasco e Chimarrão"
        food_img2_4.src = "https://i.pinimg.com/originals/fd/04/30/fd0430fc04625472a73ae994ea228343.jpg"
        food_desc2_4.innerText = "Em virtude da proximidade com o Rio Grande do Sul, a culinária catarinense também recebeu forte influência gaúcha. Portanto é comum encontrar ótimas churrascarias espalhadas pelo estado. Além disso, uma das bebidas preferidas do povo da região é o chimarrão, também herança dos vizinhos."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619414.3323212015!2d-53.32679246287408!3d-27.637388274056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1639143958280!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do estado é muito influenciado pelas massas de ar polares e intertropicais, a temperatura média das regiões litorâneas é de 18°C a 20°C. Na costa do Estado, as temperaturas são mais amenas, a capital Florianópolis, por exemplo, tem variações entre 20°C e 29°C no verão."

        travel_desc2.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço de um voo é acima de R$562 (ida e volta), e a duração do voo pode variar entre 1h40 e 4h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio Grande do Sul"
        statetxt3.innerText = "Rio Grande do Sul é o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Gaúcha alberga a região vinícola do Vale dos Vinhedos e inclui cidades turísticas de estilo alemão como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, é um grande porto com estruturas clássicas como o Mercado Público e a Catedral Metropolitana, no centro histórico."
        state_img3.src = "https://mapadomundo.org/wp-content/uploads/2016/12/Missoes_iStock.jpg"

        food_name3_1.innerText = "Tainha Assada"
        food_img3_1.src = "https://ceoagro.com.br/wp-content/uploads/2019/07/tainha-assada1.jpg"
        food_desc3_1.innerText = "Essa é uma receita bastante famosa e consumida principalmente nas festividades para Nossa Senhora dos Navegantes e na Festa do Mar, que ocorrem no estado. Normalmente ela é feita na brasa, presa em uma espécie de bambu-taquara."

        food_name3_2.innerText = "Galeto na Brasa"
        food_img3_2.src = "https://exame.com/wp-content/uploads/2020/12/Galetos-1.jpg"
        food_desc1_2.innerText = "O prato, que teve forte influência italiana, é servido em várias galeterias pelo estado todo. Sempre assado na brasa, depois de ter passado várias horas marinando em um tempero especial. Normalmente os restaurantes servem o galeto acompanhado de uma boa sopa de capeletti, salada de batata e até mesmo polenta frita."

        food_name3_3.innerText = "Pinhão"
        food_img3_3.src = "https://www.jornaldocomercio.com/_midias/jpg/2021/05/07/pinhao_6847dbca_af4e_11eb_b1a8_eec3a079c8c5-9311452.jpg"
        food_desc3_3.innerText = "O Rio Grande do Sul é um dos maiores produtores de pinhão. Além disso, os gaúchos amam esse ingrediente. Mesmo sendo consumido em outras partes da região sul, o pinhão também é um prato muito característico do Rio Grande."

        food_name3_4.innerText = "Entrevero"
        food_img3_4.src = "https://fuiporaiblog.com/wp-content/uploads/2020/04/entrevero.jpg"
        food_desc3_4.innerText = "O entrevero é uma delícia e muito consumido em outras partes da região sul. O prato pode ser feito com vários ingredientes, como carne de porco, coração de frango, bacon e até mesmo com pinhão. A receita é basicamente uma mistura de carnes cozidas com alguns legumes, servido com acompanhamentos como arroz branco e purê de batatas."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7051933.010636368!2d-58.16318989122311!3d-30.341664782596514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1639147318696!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "Devido à sua posição geográfica, o estado apresenta grandes diferenças em relação ao Brasil. A latitude reforça as influências das massas de ar oriundas da região Polar e das zonas Tropical Continental e Atlântica. As temperaturas apresentam grande variação sazonal, com verões quentes e invernos bastante rigorosos, com a ocorrência de geadas e precipitação eventual de neve. As temperaturas médias variam entre 15° e 18°C, com mínimas de até -10°C."

        travel_desc3.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço com quatro diárias é por volta de R$89, fora atrações turísticas que você poderá encontrar. A duração do voo pode variar entre 1h43 e 8h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
    }  
}

function setNextPicture() {
    if(currentQuestionIndex == 0) {
        image.src="https://o.quizlet.com/R83wCCnwxgQylxWG3-vYrg_b.png"
    } else if(currentQuestionIndex == 1) {
        image.src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3JlZGVmaW5lZm91cnNlYXNvbnMtMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=="
    } else if(currentQuestionIndex == 2) {
        image.src="https://st8.cannypic.com/thumbs/40/408827_632_canny_pic.jpg"
    }
}

const options = [
    {
        question: "Qual região do Brasil você prefere?",
        options: [
            {text: 'Norte', value: 5},
            {text: 'Nordeste', value: 6},
            {text: 'Centro-Oeste', value: 7},
            {text: 'Sudeste', value: 8},
            {text: 'Sul', value: 9}
        ]
    },
    {
        question: "Qual tipo de clima você prefere?",
        options: [
            {text: 'Quente', value: 1},
            {text: 'Frio', value: 2},
            {text: 'Úmido', value: 3},
            {text: 'Seco', value: 4}
        ]
    },
    {
        question: "Que tipo de transporte você prefere?",
        options: [
            {text: 'Ônibus', value: 10},
            {text: 'Carro', value: 11},
            {text: 'Avião', value: 12},
            {text: 'Barco', value: 13}
        ]
    }
]