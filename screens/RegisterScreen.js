import { View, StyleSheet } from "react-native";

import Button from "../components/Button";
import InputField from "../components/InputField";

export default function RegisterScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <InputField 
        label='Telefoonnummer' 
        inputType='phone-pad' />
      <InputField 
        label='Naam' />
      <InputField 
        label='Wachtwoord' 
        password={true} />
      <InputField 
        label='Wachtwoord bevestigen' 
        password={true} />
      <Button 
        text='Account aanmaken'
        icon='arrow-right'
        onPress={() => { navigation.navigate('Login') }} />
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