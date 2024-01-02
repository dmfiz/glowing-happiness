import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import Grid from "../components/Grid";
import { Ionicons } from "@expo/vector-icons";

const windowHeight = Dimensions.get("window").height;
const gridHeight = windowHeight;

const NotesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Grid navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80CBC4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  main: {
    height: gridHeight,

    width: "100%",
  },
});

export default NotesScreen;
