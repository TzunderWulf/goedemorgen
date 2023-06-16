import { View, Text, StyleSheet } from "react-native";

import TopBar from "../components/TopBar";

export default function CommunityScreen({ navigation }) {
  return(
    <View>
      <TopBar 
        screenTitle='Mijn buurt'
        onPress={() => { navigation.goBack() }}
      />
    </View>
  );
};

const styles = StyleSheet.create({

});