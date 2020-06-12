const cards = document.querySelectorAll('.memory-card');
let hasFlipped = false;
let firstCard , secondCard;
let lockboard = false;
function flipCard()
{
 if(lockboard)
 {
   return;
 }
 if(this===firstCard) return;
  this.classList.add('flip');
  if(!hasFlipped)
  {
    hasFlipped = true;
    firstCard = this;
  return;}


    secondCard = this;
    checkForMatch();




}


function disableCards()
{

  firstCard.removeEventListener('click' , flipCard);
  secondCard.removeEventListener('click' , flipCard);
  resetBoard();
}

function checkForMatch()
{


      if(firstCard.dataset.name === secondCard.dataset.name)
      {
      disableCards();

      }else{

      unflipCards()
      }

}

function unflipCards()
{ lockboard = true;
  setTimeout(() => {

    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  } , 500);

}

function resetBoard()
{

  [lockboard , hasFlipped] = [false , false];
  [firstCard , secondCard] = [null , null];
}

(function shuffleCards()
{

  cards.forEach(card =>{


    let randomPos = Math.floor(Math.random()*12);
    card.style.order = randomPos;
  })
})();
cards.forEach(card => card.addEventListener('click' , flipCard))
