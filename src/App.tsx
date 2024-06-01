import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';

interface Drink {
  id: number;
  name: string;
  recipe: string;
}

const App: React.FC = () => {
  const [results, setResults] = useState<Drink[]>([]);

  const searchDrinks = async (query: string) => {
    try {
      const response = await axios.get(`http://192.168.1.88:3000/drinks?name=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching drinks:', error); // Log the full error
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <SearchBar onSearch={searchDrinks} />
        <ResultsList results={results} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
