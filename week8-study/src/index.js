const $ = require('jquery');

const app = $('#app');
app.append(`<div id="count">0</div>`);
app.append(`<button id="btn-up">up</button>`);
app.append(`<button id="btn-down">down</button>`);

const model = {
    count : 0
}

$("#btn-up").on('click',function () {
   $("#count").text(++model.count);
});
$("#btn-down").on('click',function () {
   $("#count").text(--model.count);
});
