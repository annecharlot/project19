const httpOptions = {
  //headers: {'X-Mashape-Key': '716c4727fd007e70558aa0fdd77b7d54'}
};

const MovieModel = function () {

  let observers = [];
  let watchedMovies = [];
  let mustSeeMovies = [];
  let type = "";
  let filter = "";

  /*if(localStorage.getItem('watchedMovies')){
    watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
  }*/

  this.setFilter = function(searchFilter){
    var replaced = searchFilter.split(' ').join('+');
    filter = replaced;
  };

  this.getFilter = function(){
    return filter;
  };

  this.getMovieId = function(){
    return this.movieId;
  };


  this.getAllWatchedMovies = function() {
    return watchedMovies;
  };

  this.getAllMustSeeMovies = function() {
    console.log(mustSeeMovies);

    return mustSeeMovies;
  };

  this.addToWatchedMovies = function(newMovie){
    for (let movie of watchedMovies){
      if (movie.id === newMovie.id){
        watchedMovies.splice(watchedMovies.indexOf(movie), 1)
      }
    }
    watchedMovies.push(newMovie);

    
    /*localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies))*/

    this.notifyObserver();
};

this.addToMustSeeMovies = function(newMovie){
  for (let movie of mustSeeMovies){
    if (movie.id === newMovie.id){
      mustSeeMovies.splice(mustSeeMovies.indexOf(movie), 1)
    }
  }
  mustSeeMovies.push(newMovie);

  /*localStorage.setItem('mustSeeMovies', JSON.stringify(mustSeeMovies))*/

  this.notifyObserver();
};

this.removeFromWatchedMovies = function(the_movie){
  for (let movie of watchedMovies){
    if (movie.id === the_movie.id){
      watchedMovies.splice(watchedMovies.indexOf(movie), 1)
    }
  }
  /*localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies))*/
  this.notifyObserver()
}

this.removeFromMustSeeMovies = function(the_movie){
  for (let movie of mustSeeMovies){
    if (movie.id === the_movie.id){
      mustSeeMovies.splice(mustSeeMovies.indexOf(movie), 1)
    }
  }
  /*localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies))*/
  this.notifyObserver()
}

  // API Calls

  this.getAllMovies = function (filter) {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=716c4727fd007e70558aa0fdd77b7d54&query=${filter}`
    return fetch(url, httpOptions)
      .then(processResponse)
      .then(data => data.results)
      .catch(handleError)
  };

  this.getMovie = function (id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=716c4727fd007e70558aa0fdd77b7d54`
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  };
	
  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  };
  
  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  };

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };


  this.notifyObserver = function(changeDetails){
		for(var i=0; i<observers.length; i++) {
      observers[i].update(changeDetails);
		}	
  }

}
export const modelInstance = new MovieModel();
