import React, { useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import MasonryList from "reanimated-masonry-list";

import { colors } from "../theme/colors";

const windowWidth = Dimensions.get("window").width;
const gap = 10;
const itemsPerRow = 2;
const noteWidth = windowWidth / itemsPerRow - gap * (itemsPerRow + 1);

const items = [
  {
    key: 1,
    title: "Note 1",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    backgroundColor: colors.watermelon,
  },
  {
    key: 2,
    title: "Note 2",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    backgroundColor: colors.softPurple,
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
    backgroundColor: colors.takao,
  },
  {
    key: 5,
    title: "Note 5",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    backgroundColor: colors.ultramarinBlue,
  },
  {
    key: 6,
    title: "Note 6",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    backgroundColor: colors.malachite,
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
    backgroundColor: null,
  },
  {
    key: 9,
    title: "Note 9",
    content: "This is a simple note about not forgetting to be awesome.",
    backgroundColor: colors.softPurple,
  },
];

const Grid = ({ navigation }) => {
  const [notes, setNotes] = useState([items]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Note", {
            item: item,
          })
        }
        style={styles.shadow}
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

  return (
    <MasonryList
      data={items}
      keyExtractor={(item) => item.key}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

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
  touchSingleNote: {},
});

export default Grid;

{
  /*}

    <GestureHandlerRootView style={{ flex: 1 }}>
      <DraggableFlatList
        data={notes}
        onDragEnd={({ notes }) => setNotes(notes)}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
    </GestureHandlerRootView>

    const renderItem = ({ item, drag }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity onLongPress={drag} style={styles.singleNote}>
          <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };



    <ScrollView contentContainerStyle={styles.notesContainer}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={styles.touchSingleNote}
          onPress={() =>
            navigation.navigate("Note", {
              item: item,
            })
          }
        >
          <Animated.View
            sharedTransitionTag={`note-${item.key}`}
            style={styles.singleNote}
          >
            <Text style={{ fontSize: 25 }}>{item.title}</Text>
            <Text style={{ fontSize: 16 }}>{item.content}</Text>
          </Animated.View>
        </TouchableOpacity>
      ))}
    
    </ScrollView>
        */
}
