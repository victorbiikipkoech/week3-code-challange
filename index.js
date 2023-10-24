document.addEventListener("DOMContentLoaded", function () {
    // Your movie data
    const movies = {
      // ... (Your movie data here)
    };
  
    // Get the ul#films element
    const filmsList = document.getElementById("films");
  
    // Remove the placeholder li element (if it exists)
    const placeholderLi = filmsList.querySelector(".placeholder");
    if (placeholderLi) {
      filmsList.removeChild(placeholderLi);
    }
  
    // Populate the ul#films with movie details
    movies.films.forEach((movie) => {
      // Create a new li element
      const filmItem = document.createElement("li");
      filmItem.classList.add("film", "item"); // Add classes to the li element
  
      // Set the text content for the li element
      filmItem.textContent = movie.title;
  
      // Add a click event listener to show movie details when clicked
      filmItem.addEventListener("click", function () {
        // Calculate the number of available tickets
        const availableTickets = movie.capacity - movie.tickets_sold;
  
        // Update the HTML elements with movie details (same code as before)
        posterElement.src = movie.poster;
        titleElement.textContent = movie.title;
        runtimeElement.textContent = `${movie.runtime} minutes`;
        showtimeElement.textContent = `Showtime: ${movie.showtime}`;
        availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;
      });
  
      // Append the li element to the ul#films
      filmsList.appendChild(filmItem);
    });
  });
  