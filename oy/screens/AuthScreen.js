import { StatusBar } from "expo-status-bar";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

function AuthScreen({ navigation }) {
  const onPressLogin = () => {
    // Do something about login operation
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
  };
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        source={require("../assets/oy_logo_transparent.png")}
        style={{ height: 450, width: "100%" }}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Notes")}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Notes")}>
        <Text style={{ fontSize: 14, color: "black" }}>Signup</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  inputView: {
    width: 300,
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  loginButton: {
    height: 60,
    width: 300,
    backgroundColor: "#ff9e22",
    elevation: 2,
    shadowColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
    borderRadius: 10,
  },
  signupButton: {
    height: 60,
    width: 300,
    backgroundColor: "#6002ee",
    elevation: 2,
    shadowColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 10,
  },
});
