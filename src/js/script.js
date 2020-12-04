
document.addEventListener("DOMContentLoaded", function(){

    let connexion = new MovieDB();
    connexion.requeteDernierFilm();

})



class MovieDB{

    constructor(){
        console.log("new MovieDB");
        this.apiKey = "8e7b206fb9e4bd76c29fd7851f43dfac";
        this.langue = "fr-CA";
        this.baseURL = "https://api.themoviedb.org/3";
        this.pathImg = "https://image.tmdb.org/t/p/";
        this.totalFilm = 8;


    }

    requeteDernierFilm(){

        let requete = new XMLHttpRequest();
        requete.addEventListener("loadend", this.retourDernierFilm.bind(this));
        requete.open("GET", this.baseURL +"/movie/now_playing?api_key="+ this.apiKey +"&language="+this.langue+"&page=1")
        requete.send();

    }


    retourDernierFilm(evt){
        console.log("retourDernierFilm");
        let target = evt.currentTarget;
        let data = JSON.parse(target.responseText).results;
        console.log(data);
        this.afficherDernierFilm(data);
    }

    afficherDernierFilm(data){
        console.log("afficherDernierFilms");

        let section = document. querySelector(".liste-films");

        console.log(section);

        for (let i = 0; i < this.totalFilm; i++) {

            let article = document.querySelector(".template .film").cloneNode(true);

            article.querySelector('h2').innerHTML = data[i].title;




            if(data[i].overview !== ""){
                article.querySelector('.description').innerHTML = data[i].overview;
            }
            else{
                article.querySelector('.description').innerHTML = "Aucune description disponible";
            }


            let image =  article.querySelector('img');
            image.src = this.pathImg + "w300" + data[i].poster_path;


            section.appendChild(article);
            console.log(image);

            //console.log(data[i].title);
            //console.log(data[i].overview);
        }
        
    }
}