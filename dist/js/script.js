
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbGV0IGNvbm5leGlvbiA9IG5ldyBNb3ZpZURCKCk7XHJcbiAgICBjb25uZXhpb24ucmVxdWV0ZURlcm5pZXJGaWxtKCk7XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5jbGFzcyBNb3ZpZURCe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgTW92aWVEQlwiKTtcclxuICAgICAgICB0aGlzLmFwaUtleSA9IFwiOGU3YjIwNmZiOWU0YmQ3NmMyOWZkNzg1MWY0M2RmYWNcIjtcclxuICAgICAgICB0aGlzLmxhbmd1ZSA9IFwiZnItQ0FcIjtcclxuICAgICAgICB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIjtcclxuICAgICAgICB0aGlzLnBhdGhJbWcgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL1wiO1xyXG4gICAgICAgIHRoaXMudG90YWxGaWxtID0gODtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVldGVEZXJuaWVyRmlsbSgpe1xyXG5cclxuICAgICAgICBsZXQgcmVxdWV0ZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVldGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJEZXJuaWVyRmlsbS5iaW5kKHRoaXMpKTtcclxuICAgICAgICByZXF1ZXRlLm9wZW4oXCJHRVRcIiwgdGhpcy5iYXNlVVJMICtcIi9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PVwiKyB0aGlzLmFwaUtleSArXCImbGFuZ3VhZ2U9XCIrdGhpcy5sYW5ndWUrXCImcGFnZT0xXCIpXHJcbiAgICAgICAgcmVxdWV0ZS5zZW5kKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXRvdXJEZXJuaWVyRmlsbShldnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0b3VyRGVybmllckZpbG1cIik7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0YXJnZXQucmVzcG9uc2VUZXh0KS5yZXN1bHRzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuYWZmaWNoZXJEZXJuaWVyRmlsbShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWZmaWNoZXJEZXJuaWVyRmlsbXNcIik7XHJcblxyXG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuIHF1ZXJ5U2VsZWN0b3IoXCIubGlzdGUtZmlsbXNcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlY3Rpb24pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxGaWxtOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wbGF0ZSAuZmlsbVwiKS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2gyJykuaW5uZXJIVE1MID0gZGF0YVtpXS50aXRsZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKGRhdGFbaV0ub3ZlcnZpZXcgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkYXRhW2ldLm92ZXJ2aWV3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IFwiQXVjdW5lIGRlc2NyaXB0aW9uIGRpc3BvbmlibGVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBpbWFnZSA9ICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLnBhdGhJbWcgKyBcInczMDBcIiArIGRhdGFbaV0ucG9zdGVyX3BhdGg7XHJcblxyXG5cclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhW2ldLnRpdGxlKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhW2ldLm92ZXJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
