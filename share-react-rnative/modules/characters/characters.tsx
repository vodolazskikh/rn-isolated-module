import { useQuery } from '@tanstack/react-query';
import Card from '@vodolazskikh/share-react-rnative.ui-kit.card';
import axios from 'axios';
import React from 'react';
import { View } from 'react-native';

export function Characters() {
  const query = useQuery<{ results: { id: number, name: string, image: string }[] }>({
    queryKey: ['characters'], queryFn: () =>
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((res) => res.data),
  })

  return (
    <View>
      {query.data?.results.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </View>
  );
}
