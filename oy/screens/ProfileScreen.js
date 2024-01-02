import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { MaterialIcons } from "@expo/vector-icons";

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
      <View style={styles.profileContainer}>
        <Text style={styles.profileHeadline}>Profile Settings</Text>
        <View style={styles.buttonContainer}>
          {/* PROFILE PICTURE */}
          <TouchableOpacity style={[styles.profileButton, styles.shadow]}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Profile Picture
            </Text>
          </TouchableOpacity>
          {/* CHANGE NAME */}
          <TouchableOpacity style={[styles.profileButton, styles.shadow]}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Change Name
            </Text>
          </TouchableOpacity>
          {/* CHANGE EMAIL */}
          <TouchableOpacity style={[styles.profileButton, styles.shadow]}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Change Email
            </Text>
          </TouchableOpacity>
          {/* LOGOUT BUTTON */}
          <TouchableOpacity
            style={[styles.logoutButton, styles.shadow]}
            onPress={handleLogout}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#9FA8DA",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    height: 450,
    width: 300,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    paddingTop: 20,
    borderRadius: 15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeadline: {
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    paddingBottom: 15,
  },
  profileButton: {
    height: 50,
    width: 200,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 0.5,
  },
  logoutButton: {
    height: 50,
    width: 200,
    backgroundColor: "#EF5350",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 0.5,
  },
});
