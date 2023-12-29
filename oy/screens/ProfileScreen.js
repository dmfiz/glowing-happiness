import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Logout
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    height: 60,
    width: 300,
    backgroundColor: "#F44336",
    elevation: 2,
    shadowColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
    borderRadius: 10,
  },
});
