import { StatusBar } from "expo-status-bar";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { colors } from "../theme/colors";

function SplashScreen({ navigation }) {
  //State for ActivityIndicator animation
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          navigation.replace("Tabs");
        } else {
          // User is signed out
          navigation.replace("Login");
        }
      });
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        sharedTransitionTag={"splash-logo"}
        source={require("../assets/oy_logo_transparent.png")}
        style={{ height: 450, width: "100%" }}
      />
      <ActivityIndicator
        animating={loading}
        color="black"
        size="large"
        style={styles.activityIndicator}
      />
    </SafeAreaView>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightgray,
    paddingTop: Platform.OS === "android" ? 50 : 0,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});
