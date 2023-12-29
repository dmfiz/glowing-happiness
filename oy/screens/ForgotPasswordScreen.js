import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import Animated from "react-native-reanimated";
import { useState } from "react";

function ForgotPasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = () => {
    sendPasswordResetEmail(FIREBASE_AUTH, email)
      .then(() => {
        setMessage("Password reset email sent");
        navigation.replace("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        sharedTransitionTag={"splash-logo"}
        source={require("../assets/oy_logo_transparent.png")}
        style={{ height: 450, width: "100%" }}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>

      {/* LOGIN BUTTON */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleResetPassword}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Reset Password
        </Text>
      </TouchableOpacity>

      {/* SIGNUP Redirect */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ fontSize: 14, color: "black" }}>Not sure? Go back</Text>
      </TouchableOpacity>
      {message ? <Text style={{ fontSize: 14 }}>{message}</Text> : <></>}
    </SafeAreaView>
  );
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  forgot: {
    fontSize: 12,
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
