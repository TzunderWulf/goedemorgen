import { ScrollView, StyleSheet, View } from 'react-native';

import TopBar from '../components/TopBar';
import TabButton from '../components/TabButton';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <TopBar 
        goBack={false}
        username='Mevrouw de Jong'
      />
      <View style={styles.tabButtons}>
        <View>
          <TabButton 
            fullWidth={true}
            text='Berichten'
            icon='comments' 
            onPress={() => { navigation.navigate('Messages') }} />
        </View>
        <View style={styles.rowButton}>
          <TabButton 
            text='Mijn Profiel'
            icon='user'
            onPress={() => { navigation.navigate('Profile') }} />
          <TabButton 
            text='Hulp nodig?'
            icon='question-circle'
            onPress={() => { navigation.navigate('Help') }} />
        </View>
        <View>
          <TabButton 
            fullWidth={true}
            text='Instellingen'
            icon='gear'
            onPress={() => { navigation.navigate('Settings') }} />
        </View>
        <View>
          <TabButton 
            fullWidth={true}
            text='Mijn Buurt'
            icon='group'
            onPress={() => { navigation.navigate('Community') }} />
        </View>
      </View>
    </ScrollView>
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
