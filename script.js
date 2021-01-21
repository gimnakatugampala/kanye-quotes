const content = document.querySelector('.content');
const mainEl = document.getElementById('main')


function getQuote(){
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => {
        const quotes = data.quote;
        content.textContent = quotes;
    })
    .catch(err => console.log(err))
}

getQuote()

mainEl.style.display = 'none';

setTimeout(() => mainEl.style.display = 'block',2000)