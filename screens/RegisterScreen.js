import { View, StyleSheet } from "react-native";

import Button from "../components/Button";

export default function RegisterScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Button 
        text='Inloggen'
        icon='arrow-right'
        onPress={() => { navigation.navigate('Login') }} />
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