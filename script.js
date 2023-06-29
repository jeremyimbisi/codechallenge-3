// Function to make GET request to retrieve film data
function getFilmData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.log(error));
  }
  
  // Function to update movie details on the page
  function updateMovieDetails(movie) {
    const movieTitle = document.getElementById('movie-title');
    const moviePoster = document.getElementById('movie-poster');
    const movieRuntime = document.getElementById('movie-runtime');
    const movieShowtime = document.getElementById('movie-showtime');
    const ticketsAvailable = document.getElementById('tickets-available');
    const buyTicketBtn = document.getElementById('buy-ticket');

    movieTitle.textContent = movie.title;
    moviePoster.src = movie.poster;
    movieRuntime.textContent = movie.runtime + ' mins';
    movieShowtime.textContent = movie.showtime;
    const availableTickets = movie.capacity - movie.tickets_sold;
    ticketsAvailable.textContent = availableTickets;
    buyTicketBtn.disabled = availableTickets === 0;
}