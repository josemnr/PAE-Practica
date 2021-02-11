let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const boxTemplate = document.getElementById('box--container').innerHTML;
const boxContainer = document.getElementById('box--container');
const searcherInput = document.getElementById('searcher__input');
const searcherButton = document.getElementById('searcher__button');
const template = Handlebars.compile(boxTemplate);
searcherButton.onclick = function () {
    let url = 'http://newsapi.org/v2/everything?' +
        `q=${searcherInput.value}&` +
        `from=${date}&` +
        'sortBy=popularity&' +
        'apiKey=2f2ef6f079f6471c9e88edf4e0d4d2e4';
    let req = new Request(url);
    fetch(req)
        .then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        document.getElementById('box--container').innerHTML = template({
            news: data.articles,
        });
    });
    boxContainer.style.display = "flex";
};
