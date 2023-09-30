import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setName(name);
  };

  const renderScreen = () => {
    if (isLoggedIn) {
      return <HomeScreen name={name} style={styles.container} />;
    } else {
      return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default App;


