// src/components/ResultsList.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Drink {
  id: number;
  name: string;
  recipe: string;
}

interface ResultsListProps {
  results: Drink[];
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  return (
    <View>
      {results.map(drink => (
        <View key={drink.id} style={styles.resultItem}>
          <Text style={styles.drinkName}>{drink.name}</Text>
          <Text>{drink.recipe}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  resultItem: {
    marginBottom: 10,
  },
  drinkName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResultsList;
