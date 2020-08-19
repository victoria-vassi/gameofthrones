const baseUrl = "https://anapioficeandfire.com/api/characters/"
const query = {
}

export async function fetchGot(character) {
  return fetch(baseUrl)
  .then(response => response.JSON())
    .then(data => console.log(data))
}
