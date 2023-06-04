import { StyleSheet, Text, View } from 'react-native';

import AppRoutes from './navigation/AppRoutes';

export default function App() {
  return (
    <AppRoutes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: '#233D4D',
    height: '20%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 30,
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
});
