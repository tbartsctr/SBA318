const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening to port: ${port}`);
    });


    const favoriteMovies = [
        { title: "Interstellar",
          director: "Christopher Nolan",
          year: "2014",
          genre: ["Sci-Fi", "Adventure"],
          cast: ["Matthew McConaughey", "Matt Damon", "Anne Hathaway", "Jessica Chastain", "Michael Caine,", "Casey Affleck"]
        },
        
        { title: "Boy",
          director: "Taika Waititi",
          year: "2010",
          genre: ["Drama", "Coming of age", "Comedy"],
          cast: ["James Rolleston", "Taika Waititi", "Te Aho Eketone-Whitu", "RickyLee Waipuka-Russell",]
        },

        { title: "The Grand Budapest Hotel",
          director: "Wes Anderson",
          year: "2014",
          genre: ["Adventure", "Comedy"],
          cast: ["Ralph Fiennes", "Mathieu Amalric", "Willem Dafoe", "Adrien Brody", "Jeff Goldblum", "Léa Seydoux", "Owen Wilson", "Jason Schwartzman", "Edward Norton"]
        },

        { title: "Blood Diamond",
          director: "Edward Zwick",
          year: "2006",
          genre: ["Political Thriller", "Thriller", "Adventure", "Drama"],
          cast: ["Leonardo DiCaprio", "Jennifer Connelly", "Djimon Hounsou", "David Harewood", "Michael Sheen", "Arnold Vosloo", "Stephen Collins"]
        },

        { title: "The Prestige",
          director: "Christopher Nolan",
          year: "2006",
          genre: ["Period Drama", "Thriller", "Mystery", "Sci-Fi", "Drama"],
          cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson", "Michael Caine", "Rebecca Hall", "David Bowie"]
        },

        { title: "1917",
          director: "Sam Mendes",
          year: "2019",
          genre: ["Period Drama", "War Epic", "War", "Action", "Thriller", "Drama"],
          cast: ["Dean-Charles Chapman", "George MacKay", "Colin Firth", "Mark Strong"]
        },

        { title: "Midnight in Paris",
          director: "Woody Allen",
          year: "2011",
          genre: ["Romantic Comedy", "Comedy", "Fantasy", "Romance"],
          cast: ["Owen Wilson", "Rachel McAdams", "Michael Sheen", "Kathy Bates", "Tom Hiddleston", "Kurt Fuller"]
        },

        { title: "Django: Unchained",
          director: "Quentin Tarantino",
          year: "2012",
          genre: ["Dark Comedy", "Period Drama", "Western", "Western Epic", "Comedy", "Drama"],
          cast: ["Jamie Foxx", "Leonardo DiCaprio", "Christoph Waltz", "Kerry Washington", "Samuel L. Jackson", "Walton Goggins"]
        },

        { title: "Dune: Part Two",
          director: "Denis Villeneuve",
          year: "2024",
          genre: ["Action Epic", "Epic", "Sci-Fi", "Action", "Adventure"],
          cast: ["Timothée Chalamet", "Rebecca Ferguson", "Florence Pugh", "Josh Brolin", "Zendaya", "Léa Seydoux", "Christopher Walken", "Austin Butler", "Javier Bardem", "Dave Bautista", "Stellan Skarsgård"]
        },

        { title: "Bladerunner 2049",
          director: "Denis Villeneuve",
          year: "2017",
          genre: ["Action Epic", "Sci-Fi", "Action", "Mystery", "Dystopian Sci-Fi"],
          cast: ["Harrison Ford", "Ryan Gosling", "Ana De Armas", "Dave Bautista", "Robin Wright", "Jared Leto"]
        },

        { title: "La La Land",
          director: "Damien Chazelle",
          year: "2016",
          genre: ["Musical", " Comedy", "Drama", "Romance"],
          cast: ["Ryan Gosling", "Emma Stone"]
        },

];

app.get('/movies', (req, res) => {
    res.json(favoriteMovies);
});


const button = document.getElementById("searchBtn");

button.addEventListener("click", function(){

    

})