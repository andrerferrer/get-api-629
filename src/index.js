
// fetch the url
// console log the response information


// ALWAYS START WITH THIS
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
  //     console.log(data);
  //   });

const getAPI = (movieName) => {
  const url = `http://www.omdbapi.com/?apikey=adf1f2d7&s=${movieName}`;
  
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const movies = data.Search;
      movies.forEach((movie) => {
        const movieHTML = `
          <li>
            <p>${movie.Title}</p>
            <img src="${movie.Poster}">
          </li> 
        `;
        const ul = document.querySelector('#results');
        ul.insertAdjacentHTML('beforeend', movieHTML);
      })
    });

}

const form = document.getElementById('search-movies');
console.log(form);
form.addEventListener('submit', (event) => {
  // prevent default behavior of the event
  event.preventDefault(); // stop the page from reloading
  const input = document.getElementById('keyword');
  console.log(input);
  const movieName = input.value;
  console.log(movieName);
  
  // before getting the api
  // clear the ul
  const ul = document.getElementById('results');
  ul.innerHTML = '';

  getAPI(movieName);
});