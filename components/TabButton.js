import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Button({ text, icon, onPress, fullWidth }) {
  return(
    <TouchableOpacity onPress={onPress} style={[styles.button, fullWidth && styles.fullWidth]}>
      {icon && (
        <FontAwesome name={icon} size={50} color="white" />
      )}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '40%',
    aspectRatio: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#233D4D',
    margin: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EFEFEF',
  },
  fullWidth: {
    width: '80%',
    aspectRatio: 300 / 150,
  }
})