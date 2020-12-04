
document.addEventListener("DOMContentLoaded", function(){

    let connexion = new MovieDB();

    if(document.location.pathname.search("fiche-film.html")>0){
        let params = new URL(document.location).searchParams;
        connexion.requeteInfoFilm(params.get("id"));
    }
    else{
        connexion.requeteDernierFilm();
    }

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
            image.alt = data.title;



           article.querySelector("a").href = "fiche-film.html?id=" + data[i].id;

            section.appendChild(article);
            console.log(image);

            //console.log(data[i].title);
            //console.log(data[i].overview);
        }
        
    }










    requeteInfoFilm(movieID){

        let requete = new XMLHttpRequest();
        requete.addEventListener("loadend", this.retourRequeteInfoFilm.bind(this));
        requete.open("GET", this.baseURL +"/movie/" + movieID + "?api_key="+ this.apiKey +"&language="+this.langue+"&page=1");

        requete.send();

    }

    retourRequeteInfoFilm(evt){
        console.log("retourRequeteInfoFilm");
        let target = evt.currentTarget;
        let data = JSON.parse(target.responseText);
        console.log(data);
        this.afficherInfoFilm(data);
    }

    afficherInfoFilm(data){
        console.log("afficherInfoFilm");

        //requeteActeur();  (l'appeler dans les infos du film comme ça si il y a un problème avec le film les acteur ne vont pas s'afficher)
        document.querySelector("h1").innerHTML = data.title;

        //
        // let image = document.querySelector('img');
        // image.src = this.pathImg + "w300" + data.poster_path;
        // image.alt = data.title;


        //let section = document. querySelector(".liste-films");

        //console.log(section);

        // for (let i = 0; i < this.totalFilm; i++) {
        //
        //     let article = document.querySelector(".template .film").cloneNode(true);
        //
        //     article.querySelector('h2').innerHTML = data[i].title;
        //
        //
        //
        //
        //     if(data[i].overview !== ""){
        //         article.querySelector('.description').innerHTML = data[i].overview;
        //     }
        //     else{
        //         article.querySelector('.description').innerHTML = "Aucune description disponible";
        //     }
        //
        //
        //     let image =  article.querySelector('img');
        //     image.src = this.pathImg + "w300" + data[i].poster_path;
        //     image.alt = data.title;
        //
        //
        //
        //     article.querySelector("a").href = "fiche-film.html?id=" + data[i].id;
        //
        //     section.appendChild(article);
        //     console.log(image);
        //
        //     //console.log(data[i].title);
        //     //console.log(data[i].overview);
        // }

    }



    requeteActeur(){
        //requete vers Get credits(movie db)
    }

    retourRequeteActeur(){
        //faire attention .results (dans la valeur data)
        //faire attention JSON.parse;
    }

    afficheActeur(){
        //boucle for et clone de div.acteur
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbGV0IGNvbm5leGlvbiA9IG5ldyBNb3ZpZURCKCk7XHJcblxyXG4gICAgaWYoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUuc2VhcmNoKFwiZmljaGUtZmlsbS5odG1sXCIpPjApe1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uKS5zZWFyY2hQYXJhbXM7XHJcbiAgICAgICAgY29ubmV4aW9uLnJlcXVldGVJbmZvRmlsbShwYXJhbXMuZ2V0KFwiaWRcIikpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgICBjb25uZXhpb24ucmVxdWV0ZURlcm5pZXJGaWxtKCk7XHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5jbGFzcyBNb3ZpZURCe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgTW92aWVEQlwiKTtcclxuICAgICAgICB0aGlzLmFwaUtleSA9IFwiOGU3YjIwNmZiOWU0YmQ3NmMyOWZkNzg1MWY0M2RmYWNcIjtcclxuICAgICAgICB0aGlzLmxhbmd1ZSA9IFwiZnItQ0FcIjtcclxuICAgICAgICB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIjtcclxuICAgICAgICB0aGlzLnBhdGhJbWcgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL1wiO1xyXG4gICAgICAgIHRoaXMudG90YWxGaWxtID0gODtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVldGVEZXJuaWVyRmlsbSgpe1xyXG5cclxuICAgICAgICBsZXQgcmVxdWV0ZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVldGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJEZXJuaWVyRmlsbS5iaW5kKHRoaXMpKTtcclxuICAgICAgICByZXF1ZXRlLm9wZW4oXCJHRVRcIiwgdGhpcy5iYXNlVVJMICtcIi9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PVwiKyB0aGlzLmFwaUtleSArXCImbGFuZ3VhZ2U9XCIrdGhpcy5sYW5ndWUrXCImcGFnZT0xXCIpXHJcbiAgICAgICAgcmVxdWV0ZS5zZW5kKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXRvdXJEZXJuaWVyRmlsbShldnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0b3VyRGVybmllckZpbG1cIik7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2dC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0YXJnZXQucmVzcG9uc2VUZXh0KS5yZXN1bHRzO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuYWZmaWNoZXJEZXJuaWVyRmlsbShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWZmaWNoZXJEZXJuaWVyRmlsbXNcIik7XHJcblxyXG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuIHF1ZXJ5U2VsZWN0b3IoXCIubGlzdGUtZmlsbXNcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlY3Rpb24pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxGaWxtOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wbGF0ZSAuZmlsbVwiKS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2gyJykuaW5uZXJIVE1MID0gZGF0YVtpXS50aXRsZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKGRhdGFbaV0ub3ZlcnZpZXcgIT09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkYXRhW2ldLm92ZXJ2aWV3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IFwiQXVjdW5lIGRlc2NyaXB0aW9uIGRpc3BvbmlibGVcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBpbWFnZSA9ICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLnBhdGhJbWcgKyBcInczMDBcIiArIGRhdGFbaV0ucG9zdGVyX3BhdGg7XHJcbiAgICAgICAgICAgIGltYWdlLmFsdCA9IGRhdGEudGl0bGU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiYVwiKS5ocmVmID0gXCJmaWNoZS1maWxtLmh0bWw/aWQ9XCIgKyBkYXRhW2ldLmlkO1xyXG5cclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhW2ldLnRpdGxlKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhW2ldLm92ZXJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmVxdWV0ZUluZm9GaWxtKG1vdmllSUQpe1xyXG5cclxuICAgICAgICBsZXQgcmVxdWV0ZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVldGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJSZXF1ZXRlSW5mb0ZpbG0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIHRoaXMuYmFzZVVSTCArXCIvbW92aWUvXCIgKyBtb3ZpZUlEICsgXCI/YXBpX2tleT1cIisgdGhpcy5hcGlLZXkgK1wiJmxhbmd1YWdlPVwiK3RoaXMubGFuZ3VlK1wiJnBhZ2U9MVwiKTtcclxuXHJcbiAgICAgICAgcmVxdWV0ZS5zZW5kKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldG91clJlcXVldGVJbmZvRmlsbShldnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0b3VyUmVxdWV0ZUluZm9GaWxtXCIpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGFyZ2V0LnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5hZmZpY2hlckluZm9GaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVySW5mb0ZpbG0oZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZmZpY2hlckluZm9GaWxtXCIpO1xyXG5cclxuICAgICAgICAvL3JlcXVldGVBY3RldXIoKTsgIChsJ2FwcGVsZXIgZGFucyBsZXMgaW5mb3MgZHUgZmlsbSBjb21tZSDDp2Egc2kgaWwgeSBhIHVuIHByb2Jsw6htZSBhdmVjIGxlIGZpbG0gbGVzIGFjdGV1ciBuZSB2b250IHBhcyBzJ2FmZmljaGVyKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKS5pbm5lckhUTUwgPSBkYXRhLnRpdGxlO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGxldCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgIC8vIGltYWdlLnNyYyA9IHRoaXMucGF0aEltZyArIFwidzMwMFwiICsgZGF0YS5wb3N0ZXJfcGF0aDtcclxuICAgICAgICAvLyBpbWFnZS5hbHQgPSBkYXRhLnRpdGxlO1xyXG5cclxuXHJcbiAgICAgICAgLy9sZXQgc2VjdGlvbiA9IGRvY3VtZW50LiBxdWVyeVNlbGVjdG9yKFwiLmxpc3RlLWZpbG1zXCIpO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHNlY3Rpb24pO1xyXG5cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWxGaWxtOyBpKyspIHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGxhdGUgLmZpbG1cIikuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGFydGljbGUucXVlcnlTZWxlY3RvcignaDInKS5pbm5lckhUTUwgPSBkYXRhW2ldLnRpdGxlO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGlmKGRhdGFbaV0ub3ZlcnZpZXcgIT09IFwiXCIpe1xyXG4gICAgICAgIC8vICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkYXRhW2ldLm92ZXJ2aWV3O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IFwiQXVjdW5lIGRlc2NyaXB0aW9uIGRpc3BvbmlibGVcIjtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IGltYWdlID0gIGFydGljbGUucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICAgICAgLy8gICAgIGltYWdlLnNyYyA9IHRoaXMucGF0aEltZyArIFwidzMwMFwiICsgZGF0YVtpXS5wb3N0ZXJfcGF0aDtcclxuICAgICAgICAvLyAgICAgaW1hZ2UuYWx0ID0gZGF0YS50aXRsZTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiYVwiKS5ocmVmID0gXCJmaWNoZS1maWxtLmh0bWw/aWQ9XCIgKyBkYXRhW2ldLmlkO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYXJ0aWNsZSk7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGltYWdlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGRhdGFbaV0udGl0bGUpO1xyXG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKGRhdGFbaV0ub3ZlcnZpZXcpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXF1ZXRlQWN0ZXVyKCl7XHJcbiAgICAgICAgLy9yZXF1ZXRlIHZlcnMgR2V0IGNyZWRpdHMobW92aWUgZGIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0b3VyUmVxdWV0ZUFjdGV1cigpe1xyXG4gICAgICAgIC8vZmFpcmUgYXR0ZW50aW9uIC5yZXN1bHRzIChkYW5zIGxhIHZhbGV1ciBkYXRhKVxyXG4gICAgICAgIC8vZmFpcmUgYXR0ZW50aW9uIEpTT04ucGFyc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWZmaWNoZUFjdGV1cigpe1xyXG4gICAgICAgIC8vYm91Y2xlIGZvciBldCBjbG9uZSBkZSBkaXYuYWN0ZXVyXHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
