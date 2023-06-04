import { View, StyleSheet } from "react-native";

import TopBar from "../components/TopBar";

export default function SettingsScreen({ navigation }) {
  return(
    <View>
      <TopBar 
        screenTitle='Instellingen'
        onPress={() => { navigation.goBack() }}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});