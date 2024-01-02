import { useState } from "react";
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
import { login } from "../utils/login";
import { emailVerification } from "../utils/emailVerification";
import { colors } from "../theme/colors";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showEmailMessage, setShowEmailMessage] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await login(email, password);
      if (user) {
        if (!user.emailVerified) {
          setShowEmailMessage(true);
          await emailVerification();

          setLoading(false);
        }
      }
    } catch (error) {
      setLoading(false);
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Invalid email or password. Please try again.");
      } else if (error.code === "auth/too-many-requests") {
        alert("Too many unsuccessful login attempts. Please try again later.");
      } else {
        alert("Sign-in error: ", error.message);
      }
    }
  };

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

      {/* FORGOT PASSWORD */}
      <TouchableOpacity onPress={() => navigation.navigate("Tabs")}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* LOADER OR SIGNUP BUTTON */}
      {loading ? (
        <ActivityIndicator
          animating={loading}
          color="black"
          size="large"
          style={styles.activityIndicator}
        />
      ) : (
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            Login
          </Text>
        </TouchableOpacity>
      )}

      {/* SIGNUP Redirect */}
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={{ fontSize: 14, color: "black" }}>
          New here? Register here
        </Text>
      </TouchableOpacity>
      {showEmailMessage ? (
        <Text style={{ color: "red", paddingVertical: 5 }}>
          Email verification required. Please check your email inbox and follow
          the instructions to verify your email address.
        </Text>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
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
    backgroundColor: colors.highlight,
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
