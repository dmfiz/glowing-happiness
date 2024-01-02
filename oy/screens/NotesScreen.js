import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Grid from "../components/Grid";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import Animated from "react-native-reanimated";

const windowHeight = Dimensions.get("window").height;
const gridHeight = windowHeight - 110;

const NotesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Grid navigation={navigation} />
        <Animated.View
          style={[{ position: "absolute", bottom: 100, right: 20 }]}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Note", {})}
            style={{
              padding: 6,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="add-circle" size={64} color="black" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  main: {
    height: gridHeight,

    width: "100%",
  },
});

export default NotesScreen;
