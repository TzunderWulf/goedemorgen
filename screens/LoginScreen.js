import { View, Text, StyleSheet } from "react-native";

import Button from '../components/Button'

export default function LoginScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Button 
        text='Inloggen'
        icon='arrow-right'
        onPress={() => { navigation.navigate('Home') }} />
      <Button 
        text='Registreren'
        icon='arrow-right'
        onPress={() => { navigation.navigate('Register') }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});