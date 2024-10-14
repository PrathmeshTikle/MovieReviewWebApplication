const apiKey = 'de099182457e81bb9972edcdfed16556'; // Replace with your actual API key from TMDb

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

async function MovieApi(movieName) {
    const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieName)}`;
    const response =  await fetch(apiURL)

    if (response.status==404){
        document.querySelector('.outcome').style.display="none";
    }
    else{
    var data = await response.json()
    console.log(data)
    //console.log(data.results[0].vote_average)
    document.querySelector('.movie-name').innerHTML = data.results[0].original_title
    document.querySelector('.movie-date').innerHTML = data.results[0].release_date
    document.querySelector('.movie-rating').innerHTML = data.results[0].vote_average
    document.querySelector('.movie-lang').innerHTML = data.results[0].original_language
    document.querySelector('.movie-poster').src = "https://image.tmdb.org/t/p/w500/"+data.results[0].poster_path

    document.querySelector('.outcome').style.display="block";
    }
    
}

searchBtn.addEventListener("click",()=>{
    MovieApi(searchBox.value);
})
