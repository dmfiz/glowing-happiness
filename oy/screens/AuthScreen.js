import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function AuthScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 40 }}>Organize yourself</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Notes")}>
        <View style={styles.loginButton}>
          <Text style={{ fontSize: 20 }}>Login</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ghostwhite",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  loginButton: {
    height: 50,
    width: 300,
    backgroundColor: "mistyrose",
    elevation: 2,
    shadowColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
