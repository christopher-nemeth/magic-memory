const setsUrl = 'https://api.magicthegathering.io/v1/sets'
const cardsUrl = 'https://api.magicthegathering.io/v1/cards'
let setNamesList = document.querySelector('.set-names')
let randomCardDiv = document.querySelector('.random-card')
let cardAnswerDiv = document.querySelector('.card-answer')
let cardName
let cardManaCost
let cardType
let cardRarity
let cardText
let cardImage

getSetsData()

function getSetsData() {
  fetch(setsUrl)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < 1; i++) {
        let setName = document.createElement('li')
        setName.textContent = data.sets[i].name
        setNamesList.appendChild(setName)
        setName.addEventListener('click', () => getCardsData(event))
      }
    })
}

function getCardsData(event) {
  fetch(cardsUrl)
    .then(response => response.json())
    .then(data => {
      let cardData = data.cards[randomCard(data.cards.length)]
      return cardData
    })
    .then(cardData => appendRandomCard(cardData, event))
}

function appendRandomCard(data, event) {
  cardAnswerDiv.innerHTML = ''
  for (let i = 0; i < 1; i++) {
    if (event.target.textContent === data.setName) {
      cardName = data.name
      let cardInformation = `
          <h3 id="card-name">${cardName}</h3>
          <button class="image-button">Reveal the Answer!</button>
        `
      randomCardDiv.innerHTML = cardInformation
      document.querySelector('.image-button').addEventListener('click', () => showCard(event, data))
    }
  }
}

function showCard(event, data) {
  let showCardButton = document.querySelector('.image-button')
  cardImage = data.imageUrl
  cardManaCost = data.manaCost
  cardType = data.type
  cardRarity = data.rarity
  cardText = data.text
  let cardImageHtml = `
      <div id="card-image"><img src="${cardImage}" /></div>
      <div class="card-info"><h3>Mana Cost: </h3><span class="card-cost">${cardManaCost}</span></div>
      <div class="card-info"><h3>Type: </h3><span class="card-type">${cardType}</span></div>
      <div class="card-info"><h3>Rarity: </h3><span class="card-rarity">${cardRarity}</span></div>
      <div class="card-info"><h3 class="card-text">Text: </h3><span class="card-text">${cardText}</span></div>
  `
  cardAnswerDiv.innerHTML = cardImageHtml
}

function randomCard(number, event) {
  return Math.floor(Math.random() * number)
}