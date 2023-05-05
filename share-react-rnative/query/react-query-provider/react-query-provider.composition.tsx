import React from 'react';
import { ReactQueryProvider } from './react-query-provider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'

export const BasicReactQueryProvider = () => {
  return (
    <ReactQueryProvider>
      <Characters />
    </ReactQueryProvider>
  );
}

const Characters = () => {
  const query = useQuery<{ results: { id: number, name: string, image: string }[] }>({
    queryKey: ['characters-demo'], queryFn: () =>
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => res.data),
  })

  return (
    <div>
      {query.data?.results.map((character) => (
        <div key={character.id} style={{ display: 'flex', alignItems: 'center', padding: 4 }}>
          <img src={character.image} alt={character.name} style={{ width: 50, marginRight: 4 }} />
          {character.name}</div>
      ))}
    </div>
  )
}
