// nav section
const hearts = document.getElementsByClassName('fa-heart');
for(const heart of hearts){
    heart.addEventListener('click', function(){
       const loveCounter = document.getElementById('get-love')
        let currentNumber = parseInt(loveCounter.innerText);
        loveCounter.innerText = currentNumber + 1;
    })
}

const addAlert = document.getElementsByClassName('btn-success');
for(const al of addAlert){
    al.addEventListener('click', function(){
        alert(al.dataset.alert);
        const getCoin = document.getElementById('coin');
        getInnerCoin = parseInt(getCoin.innerText);
         if(getInnerCoin < 20){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই । কল করতে কম পক্ষে ২০ কয়েন লাগবে')
        return;
        }
        getCoin.innerText = getInnerCoin - 20;
    })
}


const callBtn = document.getElementsByClassName('btn-success');
const historyList = document.getElementById('history-list');
const clearBtn = document.getElementById('clear-history');


for(btn of callBtn){
    btn.addEventListener('click', function(){
        const parent = this.closest('.flex.flex-col');
       const name = parent.querySelector('.nam').innerText;
       const number = parent.querySelector('.number').innerText;
        

        const now = new Date();
        const time = now.toLocaleTimeString();

        const li = document.createElement('li');
        li.className = 'flex justify-between bg-gray-100 p-2 rounded mt-3';

        li.innerHTML = `
          <span class = "font-medium">
                 ${name} - ${number}</span>
                 <span class = "text-gray-500 text-sm ">${time}</span>
        `;

        historyList.appendChild(li);
    })
}

clearBtn.addEventListener('click', function(){
    historyList.innerHTML = '';
})


const copyAll = document.getElementsByClassName('btn-active');
for(copy of copyAll){
      copy.addEventListener('click', function(){
        if(this.classList.contains('copy-btn')){
            const number = this.closest('.flex.flex-col').querySelector('.number').innerText;
            navigator.clipboard.writeText(number);
            alert(`"${number}" নাম্বার টি কপি করা হয়েছে`);
        
          const copyCounter = document.getElementById('count');
        finalCount = parseInt(copyCounter.innerText);
        copyCounter.innerText = finalCount + 1;}
      })
}