
export const getAllCharacters = async () =>  {
  const getGot = await fetch("https://anapioficeandfire.com/api/characters/");
  const getBody = await getGot.json();
  return getBody
}

