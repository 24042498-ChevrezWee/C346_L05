import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text>Password:</Text>
        <TextInput style={styles.input} />

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
