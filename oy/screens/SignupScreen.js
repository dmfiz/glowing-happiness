import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated from "react-native-reanimated";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { signup } from "../utils/signup";
import { saveUserData } from "../utils/saveUserData";

function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (password === confirmPassword) {
      setLoading(true);
      try {
        const user = await signup(email, password);
        if (user) {
          const id = user.uid;
          await saveUserData(id, name);
        }
      } catch (error) {
        setLoading(false);
        if (error.code === "auth/email-already-in-use") {
          alert("Email already in use. Please choose a different email.");
        } else if (error.code === "auth/weak-password") {
          alert("Weak password. Please choose a stronger password.");
        } else {
          alert("Signup error: " + error.message);
        }
      }
    } else {
      alert("Passwords don`t match.");
    }
  };

  const onPressLogin = () => {
    // Do something about login operation
  };
  const onPressForgotPassword = () => {};
  const onPressSignUp = () => {
    // Do something about signup operation
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        sharedTransitionTag={"splash-logo"}
        source={require("../assets/oy_logo_transparent.png")}
        style={{ height: 350, width: "100%" }}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </View>

      {/* LOADER OR SIGNUP BUTTON */}
      {loading ? (
        <ActivityIndicator
          animating={loading}
          color="black"
          size="large"
          style={styles.activityIndicator}
        />
      ) : (
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Signup
          </Text>
        </TouchableOpacity>
      )}

      {/* LOGIN Redirect */}

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ fontSize: 14, color: "black" }}>
          Already have an account? Login here
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
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
  signupButton: {
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
});
