import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { CardProps } from '@vodolazskikh/share-react-rnative.types.card';

export function Card({ name, id, image }: CardProps) {
  return (
    <View>
      <Text style={styles.text}>
        {name}
      </Text>
      <Image
        source={{ uri: image, width: 50, height: 50 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {},
});
