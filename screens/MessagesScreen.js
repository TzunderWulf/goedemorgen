import { View, Text, StyleSheet } from "react-native";

import TopBar from "../components/TopBar";

export default function MessagesScreen({ navigation }) {
  return(
    <View>
      <TopBar 
        screenTitle='Berichten'
        onPress={() => { navigation.goBack() }}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});