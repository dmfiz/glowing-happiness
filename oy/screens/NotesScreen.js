import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FIREBASE_AUTH, FIREBASE_DB } from "../firebaseConfig";
import {
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import MasonryList from "reanimated-masonry-list";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";
import Animated from "react-native-reanimated";
import { useState } from "react";

const windowHeight = Dimensions.get("window").height;
const gridHeight = windowHeight - 110;
const windowWidth = Dimensions.get("window").width;
const gap = 10;
const itemsPerRow = 2;
const noteWidth = windowWidth / itemsPerRow - gap * (itemsPerRow + 1);

const NotesScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const loadNotesList = async () => {
    const q = query(
      collection(FIREBASE_DB, "notes"),
      where("userId", "==", FIREBASE_AUTH.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    let qNotes = [];
    querySnapshot.forEach((doc) => {
      let note = doc.data();
      note.id = doc.id;

      qNotes.push(note);
    });
    setNotes(qNotes);
    setLoading(false);
  };

  if (loading) {
    loadNotesList();
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.shadow}
        onPress={() =>
          navigation.navigate("Note", {
            item: item,
          })
        }
      >
        <Animated.View
          style={{
            ...styles.singleNote,
            backgroundColor: item.backgroundColor,
          }}
          sharedTransitionTag={`note-${item.key}`}
        >
          <Animated.Text
            style={{
              fontSize: 24,
              textAlign: "center",
              borderBottomColor: "black",
              borderBottomWidth: 0.5,
              borderStyle: "solid",
              marginBottom: 4,
            }}
          >
            {item.title}
          </Animated.Text>
          <Animated.Text style={{ fontSize: 18 }}>{item.content}</Animated.Text>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const showNotesList = () => {
    return (
      <MasonryList
        data={notes}
        keyExtractor={(item) => item.key}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        extraData={notes}
      />
    );
  };

  const emptyNote = {
    title: "",
    content: "",
    backgroundColor: colors.lightgray,
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        {loading ? (
          <ActivityIndicator
            animating={loading}
            color="black"
            size="large"
            style={styles.activityIndicator}
          />
        ) : (
          showNotesList()
        )}

        <Animated.View
          style={[{ position: "absolute", bottom: 100, right: 5 }]}
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Note", {
                item: emptyNote,
              })
            }
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
    width: "100%",
    height: "100%",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
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
  singleNote: {
    marginHorizontal: 10,
    marginTop: 24,
    padding: 10,
    paddingBottom: 25,
    width: noteWidth,
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 0.5,
  },
});

export default NotesScreen;
