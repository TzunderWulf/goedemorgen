import { View, TextInput, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function InputField({ label, password, inputType }) {
  return(
    <View style={styles.inputField}>
      <Text style={styles.label}>{ label }</Text>
      <TextInput
        style={styles.input}
        placeholder={label}
        secureTextEntry={password}
        keyboardType={inputType}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    width: '100%',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    paddingVertical: 15,
    paddingStart: 15,
    fontSize: 20,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#233D4D',
    backgroundColor: '#EFEFEF',
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
});