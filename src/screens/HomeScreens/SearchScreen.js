import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [filteredHistory, setFilteredHistory] = useState([]);

  useEffect(() => {
    setSearchHistory([]);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredHistory(searchHistory);
    } else {
      setFilteredHistory(
        searchHistory.filter(item =>
          item.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    }
  }, [searchQuery, searchHistory]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') return;

    if (!searchHistory.includes(searchQuery)) {
      const newHistory = [searchQuery, ...searchHistory];
      setSearchHistory(newHistory);
    }

    console.log('Searching for:', searchQuery);
  };

  const removeFromHistory = itemToRemove => {
    const newHistory = searchHistory.filter(item => item !== itemToRemove);
    setSearchHistory(newHistory);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>
        GOOD MORNING <Text style={styles.bold}>Rabecca!</Text>
      </Text>

      <View style={styles.searchBarContainer}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.searchTitle}>SEARCH</Text>
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor="#ccc"
          style={styles.input}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <Icon name="search" size={20} color="#ccc" />
      </View>

      {searchHistory.length > 0 && (
        <Text style={styles.sectionTitle}>Recent Searches</Text>
      )}

      <FlatList
        data={filteredHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.recentRow}>
            <Icon name="search" size={18} color="#ccc" />
            <Text style={styles.recentText}>{item}</Text>
            <TouchableOpacity
              style={{ marginLeft: 'auto' }}
              onPress={() => removeFromHistory(item)}
            >
              <Icon name="close" size={18} color="#999" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No recent searches</Text>
        }
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A24',
    padding: 16,
  },
  header: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
    letterSpacing: 2,
  },
  bold: {
    fontFamily: 'Poppins-Regular',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchTitle: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    letterSpacing: 2,
    fontFamily: 'Poppins-Medium',
  },
  inputWrapper: {
    backgroundColor: '#1E2A38',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 16,
    marginBottom: 20,
  },
  input: {
    marginLeft: 10,
    color: '#fff',
    flex: 1,
  },
  recentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1E2A38',
  },
  recentText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
    flex: 1,
  },
  sectionTitle: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});
