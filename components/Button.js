import { View, Text, StyleSheet } from "react-native";

export default function Button({ text, color, icon }) {
  return(
    <View style={[styles.button, styles[{color}]]}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    paddingVertical: '15px',
    paddingHorizontal: '30px', 
    borderRadius: '10px',
  },
  buttonText: {
    fontSize: '20px',
  },
  primary: {
    backgroundColor: '#233D4D',
  },
  secondary: {
    backgroundColor: '#FE7F2D',
  }
});