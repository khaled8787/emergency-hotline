// nav section
const hearts = document.getElementsByClassName('fa-heart');
for(const heart of hearts){
    heart.addEventListener('click', function(){
       const loveCounter = document.getElementById('get-love')
        let currentNumber = parseInt(loveCounter.innerText);
        loveCounter.innerText = currentNumber + 1;
    })
}