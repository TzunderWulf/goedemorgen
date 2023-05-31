import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Button 
        text='Button' 
        icon='arrow-right'
        onPress={() => {console.log('wow u clicked blue')}} />
      <Button 
        text='Button' 
        color='secondary'
        onPress={() => {console.log('wow u clicked orange')}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
