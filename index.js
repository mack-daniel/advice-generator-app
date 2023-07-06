const fetchButton = document.getElementById("fetch-api");
const textContent = document.getElementById("text-content");
const adviceNumber = document.getElementById("advice-number");

async function logMovies() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const movies = await response.json();
  console.log(movies);
  adviceNumber.textContent = `${movies.slip.id}`;
  textContent.textContent = `"${movies.slip.advice}"`;
}

fetchButton.addEventListener("click", () => {
  logMovies();
});
