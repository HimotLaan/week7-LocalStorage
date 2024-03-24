const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseDate = document.querySelector('.userInputReleaseDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieReleaseDateToDisplay = document.querySelector('.favoriteMovieDate');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let dateInStorage = localStorage.getItem('date');

if(titleInStorage && imageUrlInStorage && dateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `url('${imageUrlInStorage})`;
    movieReleaseDateToDisplay.textContent = dateInStorage;
}



btn.addEventListener('click', ()=> {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieDateInput = movieReleaseDate.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('date', movieDateInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieReleaseDateToDisplay.textContent = movieDateInput;
    container.style.backgroundImage = `linear-gradient(rgba(53, 53, 101, 0.614), rgba(69, 44, 44, 0.555)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseDate.value = '';
});