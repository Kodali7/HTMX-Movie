// const myApi = '';
// const movieTitles = ['Interstellar', 'Spider-Man'];
// const urlBase = 'http://www.omdbapi.com/?apikey=' + myApi + '&t=';
// const info = document.getElementById('movie-info');

// for (let element of movieTitles) {
//     const updated = urlBase + encodeURIComponent(element); //encode is for proper format

//     fetch(updated) //used to get details of updated in JSON
//         .then(response => response.json()) //takes response and converts response in JSON format
//         .then(data => {
//             info.outerHTML += `
//                 <div>
//                     <h1>${data.Title}</h1>
//                     <p><strong>Plot:</strong> ${data.Plot}</p>
//                     <p><strong>Director:</strong> ${data.Director}</p>
//                     <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
//                 </div>
//             `;
//         })
//         .catch(error => console.error("There was a problem: " + error));
// };

function returnText(movie){
    var target = document.getElementById("new");
    const content = `
        <div>
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="Movie Poster">
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
        </div>
    `;
    console.log(content);
    target.innerHTML = content;
}

document.addEventListener('htmx:afterRequest', function(event){
    var response = event.detail.xhr.response;
    let data = JSON.parse(response);

    let movie=data.movie;
    returnText(movie);
});
