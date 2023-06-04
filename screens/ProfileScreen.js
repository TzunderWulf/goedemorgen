import { View, StyleSheet } from "react-native";

import TopBar from "../components/TopBar";

export default function ProfileScreen({ navigation }) {
  return(
    <View>
      <TopBar 
        screenTitle='Mijn Profiel'
        onPress={() => { navigation.goBack() }}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});