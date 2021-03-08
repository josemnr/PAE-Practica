let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const boxTemplate = document.getElementById('box--container').innerHTML;
const boxContainer = document.getElementById('box--container');
const searcherInput = document.getElementById('searcher__input');
const searcherButton = document.getElementById('searcher__button');
const template = Handlebars.compile(boxTemplate);
searcherButton.onclick = function () {
    let url = `http://localhost:3000/?topic=${searcherInput.value}`;
    let req = new Request(url);
    fetch(req)
        .then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        document.getElementById('box--container').innerHTML = template({
            news: data.articles,
        });
        boxContainer.style.display = "flex";
    });
};
