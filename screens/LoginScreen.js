import { View, StyleSheet } from "react-native";

import Button from '../components/Button';
import InputField from "../components/InputField";

export default function LoginScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <InputField 
        label='Telefoonnummer'
        inputType='phone-pad' />
      <InputField 
        label='Wachtwoord' 
        password={true} />
      <Button 
        text='Inloggen'
        icon='arrow-right'
        onPress={() => { navigation.navigate('Home') }} />
      <Button 
        text='Nog geen account?'
        icon='arrow-right'
        onPress={() => { navigation.navigate('Register') }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '40%',
    paddingHorizontal: '5%',
    backgroundColor: '#FE7F2D',
  },
});