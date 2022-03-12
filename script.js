"use strict";
const URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=124b078b3a77d5719ea1f5da1969d540"
const imgPath = 'https://image.tmdb.org/t/p/w500'
const searchURL = "https://api.themoviedb.org/3/search/movie?&api_key=124b078b3a77d5719ea1f5da1969d540&query="

// API Key - 124b078b3a77d5719ea1f5da1969d540
const container = document.querySelector('main');
const res = async function (API) {
  const data1 = await fetch(API);
  const data = await data1.json();
  const resources = data.results;
  console.log(resources);
  document.querySelector('main').innerHTML=''
  resources.forEach(element => {
    const html = `<div class="movie">
    <img src=${imgPath + element.poster_path} alt="${element.original_title}" />
    <div class="name">
      <h3 class="heading">${element.original_title}</h3>
      <span class="${getClass(element.vote_average)}">${(element.vote_average).toFixed(1)}</span>
    </div>
    <div class="review">
     ${element.overview}
    </div>
  </div>`
  container.insertAdjacentHTML("beforeend", html);
  });
};
res(URL);

const getClass = function(vote){
  if (vote>=8){
    return 'green'}
 else if (vote>5 && vote<8) {
 return 'orange'
} else {
  return 'red'
}
}

const form = document.querySelector('#form');
const search = document.querySelector('#search');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const searchTerm = search.value;
if (searchTerm && searchTerm !== ''){
  console.log(searchURL + searchTerm)
  res(searchURL + searchTerm)
  search.value = ''
}else {
  window.location.reload()
}
})
