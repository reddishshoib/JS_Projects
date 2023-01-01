const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
]

cardArray.sort(() => 0.5-Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardChosen  = []
let cardChosenIds = []
let cardsWon = []


function createBoard(){
    for(let i=0;i< cardArray.length ;i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i.toString())
        card.addEventListener('click', flicCard)
        gridDisplay.appendChild(card)
    }
}


function flicCard() {
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)

    if (cardChosen.length === 2){
        setTimeout( checkMatch, 500 )
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    if (optionOneId === optionTwoId)
    {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("You have click the SAME IMAGE")

    }else if (cardChosen[0] === cardChosen[1]){
        alert("You Found a Match|")
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',flicCard)
        cards[optionTwoId].removeEventListener('click',flicCard)
        cardsWon.push(cardChosen)
    } else {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
    }
    cardChosen = []
    cardChosenIds = []

    resultDisplay.textContent = cardsWon.length.toString()
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all'
    }
}
createBoard()
