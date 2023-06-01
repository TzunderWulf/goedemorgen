import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.topBar}>
      <Text style={styles.topBarText}>👋 Goedemorgen!</Text>
      <Text style={styles.topBarSubText}>Mevrouw de Jong</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#233D4D',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  topBarText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#EFEFEF',
  },
  topBarSubText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#EFEFEF',
  },  
});