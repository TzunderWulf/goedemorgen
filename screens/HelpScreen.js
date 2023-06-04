import { View, StyleSheet } from "react-native";

import TopBar from "../components/TopBar";

export default function HelpScreen({ navigation}) {
  return(
    <View>
      <TopBar 
        screenTitle='Hulp nodig?'
        onPress={() => { navigation.goBack() }}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});