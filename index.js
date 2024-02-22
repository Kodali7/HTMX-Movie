document.addEventListener("htmx:afterRequest", function (event) {
    var response = event.detail.xhr.response;
    let data = JSON.parse(response);
  
    let movie=data;
    returnText(movie);
  });
  

function returnText(movie) {
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
  target.innerHTML = content;
}
