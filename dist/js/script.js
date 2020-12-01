
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
        this.pathImg = "https://image.tmdb.org/t/p";
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

        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            console.log(data[i].overview);
        }
        
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgbGV0IGNvbm5leGlvbiA9IG5ldyBNb3ZpZURCKCk7XHJcbiAgICBjb25uZXhpb24ucmVxdWV0ZURlcm5pZXJGaWxtKCk7XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG5jbGFzcyBNb3ZpZURCe1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgTW92aWVEQlwiKTtcclxuICAgICAgICB0aGlzLmFwaUtleSA9IFwiOGU3YjIwNmZiOWU0YmQ3NmMyOWZkNzg1MWY0M2RmYWNcIjtcclxuICAgICAgICB0aGlzLmxhbmd1ZSA9IFwiZnItQ0FcIjtcclxuICAgICAgICB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIjtcclxuICAgICAgICB0aGlzLnBhdGhJbWcgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wXCI7XHJcbiAgICAgICAgdGhpcy50b3RhbEZpbG0gPSA4O1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWV0ZURlcm5pZXJGaWxtKCl7XHJcblxyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91ckRlcm5pZXJGaWxtLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJlcXVldGUub3BlbihcIkdFVFwiLCB0aGlzLmJhc2VVUkwgK1wiL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9XCIrIHRoaXMuYXBpS2V5ICtcIiZsYW5ndWFnZT1cIit0aGlzLmxhbmd1ZStcIiZwYWdlPTFcIilcclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldG91ckRlcm5pZXJGaWxtKGV2dCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXRvdXJEZXJuaWVyRmlsbVwiKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZ0LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgdGhpcy5hZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmZmljaGVyRGVybmllckZpbG0oZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhZmZpY2hlckRlcm5pZXJGaWxtc1wiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbaV0udGl0bGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2ldLm92ZXJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
