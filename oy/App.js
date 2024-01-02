import {
  createStaticNavigation,
  NavigationContainer,
  StackActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import NotesScreen from "./screens/NotesScreen";
import NoteScreen from "./screens/NoteScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import SplashScreen from "./screens/SplashScreen";
import TasksScreen from "./screens/TasksScreen";
import { FIREBASE_APP } from "./firebaseConfig";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NotesStack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 15,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          height: 80,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Notes"
        component={NotesNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabView}>
              <MaterialIcons
                name="wysiwyg"
                size={30}
                color={focused ? "black" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "black" : "#748c94",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Notes
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabView}>
              <MaterialIcons
                name="ballot"
                size={30}
                color={focused ? "black" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "black" : "#748c94",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Tasks
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabView}>
              <MaterialIcons
                name="person"
                size={30}
                color={focused ? "black" : "#748c94"}
              />
              <Text
                style={{
                  color: focused ? "black" : "#748c94",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function NotesNavigation() {
  return (
    <NotesStack.Navigator initialRouteName="Notes">
      <Stack.Screen
        name="NotesGrid"
        component={NotesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Note"
        component={NoteScreen}
        options={{
          headerShown: false,
        }}
      />
    </NotesStack.Navigator>
  );
}

{
  /* 
<MaterialIcons name="list" size={24} color="black" /> 
<MaterialIcons name="list-alt" size={24} color="black" />
<MaterialIcons name="login" size={24} color="black" />
<MaterialIcons name="logout" size={24} color="black" />
<MaterialIcons name="menu" size={24} color="black" />
<MaterialIcons name="person-outline" size={24} color="black" />
<MaterialIcons name="receipt-long" size={24} color="black" />

*/
}
const firebase = FIREBASE_APP;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

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
  tabText: {},
  tabView: {
    justifyContent: "center",
    alignItems: "center",
  },
});
