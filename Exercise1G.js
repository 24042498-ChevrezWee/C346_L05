import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [ut, setUt] = useState('Admin');
  const [un, setUn] = useState('');
  const [pw, setPw] = useState('');

  return (
    <View style={styles.container}>
        <Text>User Type:</Text>
        <Picker onValueChange={(value) => setUt(value)}>
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="Guest" value="Guest" />
        </Picker>

        <Text>User Name:</Text>
        <TextInput style={styles.input} onChangeText={(text) => setUn(text)} />

        <Text>Password:</Text>
        <TextInput style={styles.input} onChangeText={(text) => setPw(text)} />

        <TouchableOpacity onPress={() =>
            {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw == correctPassword) {
                    mymessage = 'Welcome ' + ut + ' ' + un;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }
        }>
            <Text>LOG IN</Text>
        </TouchableOpacity>
        <Text>{pw}</Text>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: (StatusBar.currentHeight || 0) + 16,
  },
  input: {
    borderWidth: 1,
  },
});
