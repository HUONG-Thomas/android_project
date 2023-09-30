import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const HomeScreen = ({ name }) => {
    {
        const [userName, setUserName] = useState('');
        const [count, setCount] = useState('');
        const [pressTimes, setPress] = useState('');

        useEffect(() => {
            GetUserCount();
            setPress(0);
        }, []);

        const GetAllUsers = async () => {
            try {
            const response = await fetch('https://873b-2a01-e0a-9b8-67b0-b1e7-254-9187-c8c2.eu.ngrok.io/User');

            if (response.ok) {
                const users = await response.json();
                Alert.alert('All Users', JSON.stringify(users));
            } else {
                const errorData = await response.json();
                Alert.alert('Error:', errorData.message);
            }
            } catch (error) {
                Alert.alert('Network error');
            }
        };

        const GetUserByName = async () => {
            try {
            const response = await fetch(`https://873b-2a01-e0a-9b8-67b0-b1e7-254-9187-c8c2.eu.ngrok.io/User/name?name=${userName}`, {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
            });
        
            if (response.ok) {
                const user = await response.json();
                Alert.alert("User:", JSON.stringify(user));
            } else {
                const errorData = await response.json();
                Alert.alert('Error:', errorData.message);
            }
            } catch (error) {
                Alert.alert('Network error');
            }
        };

        const GetUserCount = async () => {
            try {
                const response = await fetch(`https://873b-2a01-e0a-9b8-67b0-b1e7-254-9187-c8c2.eu.ngrok.io/User/count?name=${name}`);

                if (response.ok) {
                    const countValue = await response.json();
                    setCount(countValue); 
                } else {
                    const errorData = await response.json();
                    Alert.alert('Error:', errorData.message);
                }
            } catch (error) {
                    Alert.alert('Network error');
                }
        };

        const IncrementCounter = () => {
            setCount(count + 1);
            setPress(pressTimes + 1);
        };

        const SaveCounter = async() => {
            try {
                const response = await fetch('https://6ba6-2a01-e0a-9b8-67b0-b1e7-254-9187-c8c2.eu.ngrok.io/User/count', {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, counter: count }),
                  });
                  if (response.ok) {
                    Alert.alert('Count saved successfully!');
                  } else {
                    const errorData = await response.json();
                    Alert.alert('Error:', errorData.message);
                  }
                } catch (error) {
                  Alert.alert('Network error');
                }   
        };

        return (
            <View>
                <Text>Welcome {name} !</Text>
                
                <TextInput
                style={styles.input}
                placeholder="Search by name"
                value={userName}
                onChangeText={setUserName}
                />
                <Button title="Get user by name" onPress={GetUserByName}></Button>
                <Button title="Get All Users" onPress={GetAllUsers} />

                <Text>Your current count : {count}</Text>
                <Button title="Increment counter !" onPress={IncrementCounter} />
                <Text>You clicked : {pressTimes} times !</Text>
                <Button title="Save counter value" onPress={SaveCounter}></Button>

            </View>
        );
    };
}


const styles = StyleSheet.create({
    text: {
      textAlign : 'center'
    }
  });

export default HomeScreen;
