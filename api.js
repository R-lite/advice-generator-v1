const adviceNumb = document.querySelector('.advice-numb span');
const adviceBody = document.querySelector('.advice-body span');
const dice = document.querySelector('.dice');

const getApiData = ()=>{
    fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response => {
        const {id, advice} = response.slip;
        adviceNumb.innerHTML = id;
        adviceBody.innerHTML = advice;
    })   //
    .catch(err => err)
}


dice.addEventListener('click', getApiData());