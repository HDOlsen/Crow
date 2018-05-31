//The Crow fetch
 
movies = []

fetch('http://www.omdbapi.com/?s=crow&apikey=c4496bfa')
  .then(function(response){
      return response.json() 
  })
  .then(function(myJson){
    console.log(myJson)
    var moviesArray = myJson.Search
    console.log(moviesArray)
    let movies = moviesArray.filter(function(movie){
      if(moviesArray.indexOf(movie) < 4){
          return movie
  }
  })
    console.log(movies)

  function populateMovie() {
      console.log("Clicked")
      // using for each loop
      movies.forEach(function(film){
        console.log("testing loop")
        let crowItem = `<img src='${film.Poster}' />
        <h4>
        ${film.Title}
        </h4>
        <p>
          ${film.Year} 
        </p>
        <p>
          ${film.imdbID}
        </p>
        `
        let randomDiv = $("#randomID")
        // crow.innerHTML += crowItem
        randomDiv.append(crowItem)
      })}
    console.log(movies)
    let btnAdd = $("#addCrow")
    btnAdd.click(function(){
      populateMovie()
    })
    })
  
       