import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Grid from "../components/Grid";

const windowHeight = Dimensions.get("window").height;
const gridHeight = windowHeight - 115;

const NotesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.main}>
        <Grid navigation={navigation} />
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: 60,
    width: "100%",
    backgroundColor: "lightsteelblue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "navy",
    height: 0,
    width: "100%",
  },
  main: {
    height: gridHeight,
    backgroundColor: "ghostwhite",
    width: "100%",
  },
});

export default NotesScreen;
