import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Button({ text, color='primary', icon, onPress }) {
  return(
    <TouchableOpacity onPress={onPress} style={[styles.button, styles[color]]}>
      <Text style={[styles.buttonText, styles[color]]}>{text}</Text>
      {icon && (
        <FontAwesome name={icon} size={24} color="white" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  primary: {
    backgroundColor: '#233D4D',
    color: '#EFEFEF',
  },
  secondary: {
    backgroundColor: '#FE7F2D',
    color: '#0E0E0E',
  }
})