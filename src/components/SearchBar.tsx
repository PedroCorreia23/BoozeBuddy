// src/components/SearchBar.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Enter drink name or ingredient"
        value={query}
        onChangeText={setQuery}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Search" onPress={() => onSearch(query)} />
    </View>
  );
};

export default SearchBar;
