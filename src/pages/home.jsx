import React from 'react';
import Search from "../components/Search";
import { fetchGot } from "../services/getGotCharacter";


export default function HomePage() {

  const getGotCharacter = async (query) => {
    const response = await fetchGot(query);
    const results = await response.JSON();
    console.log(response);

  }

  return (
      <div>
        <Search getGotCharacter={getGotCharacter} />
      </div>
    )
}
