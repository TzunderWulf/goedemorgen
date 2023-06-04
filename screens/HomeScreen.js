import { StyleSheet, View } from 'react-native';

import TopBar from './components/TopBar';
import TabButton from './components/TabButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TopBar 
        goBack={false}
        username='Mevrouw de Jong'
      />
      <View style={styles.tabButtons}>
        <View>
          <TabButton 
            fullWidth={true}
            text='Berichten'
            icon='comments' />
        </View>
        <View style={styles.rowButton}>
          <TabButton 
            text='Mijn Profiel'
            icon='user' />
          <TabButton 
            text='Hulp nodig?'
            icon='question-circle' />
        </View>
        <View>
          <TabButton 
            fullWidth={true}
            text='Instellingen'
            icon='gear' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabButtons: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  rowButton: {
    flexDirection: 'row',
  },
});
