import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>User Type:</Text>
        <Picker onValueChange={(value) => console.log(value)}>
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="Guest" value="Guest" />
        </Picker>

        <Text>Password:</Text>
        <TextInput style={styles.input} />

        <Button onPress={() => Alert.alert("Welcome!")} title="LOG IN" />

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
