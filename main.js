const button = document.getElementById("searchBtn");

button.addEventListener("click", () =>{

        fetch("http://localhost:3000/favoriteMovies")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayMovies(data)
        })

        .catch(error => console.error("Error in fetching movies", error)) 
});


function displayMovies(movies){
        const movieContainer = document.getElementById("movieDisplayDiv");

        movieContainer.innerHTML = "";

     movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Genres:</strong> ${movie.genre.join(', ')}</p>
            <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
        `;
        movieContainer.appendChild(movieElement);
    });

    
};

const addMovieButton = document.getElementById("addMovieBtn");

addMovieButton.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value.split(',').map(item => item.trim());  
    const cast = document.getElementById("cast").value.split(',').map(item => item.trim());

    const newMovie = {title: title,
                     director: director,
                     year: year,
                     genre: genre,
                     cast: cast,
    };

    fetch("http://localhost:3000/favoriteMovies", {

            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(newMovie),
    })

        .then(response => response.json())
        .then(data => {
            console.log("Movie Added!", data)
        })
        
        .catch(error => console.error("Error in adding movie:", error));
});


const deleteButton = document.getElementById("deleteBtn");
const deleteForm = document.getElementById("deleteForm");

    deleteButton.addEventListener("click", () => {

        deleteMovie(title);
    })

    function deleteMovie(title) {
        fetch("http://localhost:3000/favoriteMovies", {
            method: "DELETE",  
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title })  
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);  
            fetchMovies();  
        })
        .catch(error => console.error("Error in deleting movie:", error));
    }
    
    
    function fetchMovies() {
        fetch("http://localhost:3000/favoriteMovies")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displayMovies(data);  
            })
            .catch(error => console.error("Error in fetching movies", error));
    }
    

