import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TopBar({goBack = true, screenTitle, onPress}) {
  return (
    <View style={styles.topBar}>
      { goBack ? 
        (
          <View style={styles.goBackBar}>
            <TouchableOpacity onPress={onPress}>
              <FontAwesome name='arrow-left' color='white' size={30} />
            </TouchableOpacity>
            <Text style={[styles.topBarText, styles.goBackBarText]}>{screenTitle}</Text>
          </View>
        ) : 
        (
          <View>
            <Text style={styles.topBarText}>👋 Goedemorgen!</Text>
            <Text style={styles.topBarSubText}>Mevrouw de Jong</Text>
          </View>
        )
      }

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
    paddingTop: 50,
  },
  goBackBar: {
    flexDirection: 'row',
    alignItems: 'center',
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
  goBackBarText: {
    textAlign: 'center',
    width: '85%',
  },
});