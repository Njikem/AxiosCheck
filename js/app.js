
function successfunction(response){
    for(i=0; i<response.length; i++){
    container = document.querySelector(`#container`);

    container.insertAdjacentHTML(`beforeend`, `<div id="check" >
        <h3>${response[`data`][i][`title`]}</h3>
        <p>${response[`data`][i][`body`]}</p>
    </div>`
    
);
}
}

function failurefunction(error){

    container = document.querySelector(`#container`);
    container[`innerHTML`] = `<P> Please something went wrong, try again</P>`;
    
}

axios.request()({
    url: `https://jsonplaceholder.typicode.com/posts`,
    
    
}).then(successfunction).catch(failurefunction);


    