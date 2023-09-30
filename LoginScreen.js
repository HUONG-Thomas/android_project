import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View>
      <TextInput style={styles.text}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput style={styles.text}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign : 'center'
  },
});

export default LoginScreen;
