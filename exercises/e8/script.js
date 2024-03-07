// random cat facts api https://github.com/wh-iterabb-it/meowfacts

const api_url = 'https://meowfacts.herokuapp.com/';
async function getCatFact() {
    const response = await fetch(api_url);
    const data = await response.json();
    $(`body`).append(`<h1>Random Cat Fact: </h1>`);
    $(`body`).append(`<p>` + data.data[0] + `</p>`);
    console.log(data);
    console.log(response);
}

getCatFact();