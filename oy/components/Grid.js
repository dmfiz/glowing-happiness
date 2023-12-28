import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";

const windowWidth = Dimensions.get("window").width;
const gap = 10;
const itemsPerRow = 2;
const noteWidth = windowWidth / itemsPerRow - gap * (itemsPerRow + 1);

const Grid = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  const items = [
    {
      key: 1,
      title: "Note 1",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "red",
    },
    {
      key: 2,
      title: "Note 2",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "green",
    },
    {
      key: 3,
      title: "Note 3",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "mistyrose",
    },
    {
      key: 4,
      title: "Note 4",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "yellow",
    },
    {
      key: 5,
      title: "Note 5",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "orange",
    },
    {
      key: 6,
      title: "Note 6",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "brown",
    },
    {
      key: 7,
      title: "Note 7",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "mistyrose",
    },
    {
      key: 8,
      title: "Note 8",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "pink",
    },
    {
      key: 9,
      title: "Note 9",
      content: "This is a simple note about not forgetting to be awesome.",
      backgroundColor: "bisque",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.notesContainer}>
      {items.map((item) => (
        <TouchableOpacity
          style={styles.touchSingleNote}
          onPress={() =>
            navigation.navigate("Note", {
              item: item,
            })
          }
        >
          <Animated.View
            sharedTransitionTag={`note-${item.key}`}
            key={item.key}
            style={styles.singleNote}
          >
            <Text style={{ fontSize: 25 }}>{item.title}</Text>
            <Text style={{ fontSize: 16 }}>{item.content}</Text>
          </Animated.View>
        </TouchableOpacity>
      ))}
      <View
        style={{
          ...styles.singleNote,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Note", {
              title: "",
              content: "",
            })
          }
        >
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            Add new note
          </Text>
          <Text style={{ fontSize: 25, textAlign: "center" }}>+</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  notesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  singleNote: {
    backgroundColor: "mistyrose",
    marginHorizontal: 10,
    marginTop: 24,
    padding: 10,
    paddingBottom: 25,
    width: noteWidth,
    elevation: 2,
    shadowColor: "#000000",
    borderRadius: 10,
  },
  touchSingleNote: {},
});

export default Grid;
