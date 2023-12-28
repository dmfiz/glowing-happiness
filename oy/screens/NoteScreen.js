import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Animated, { FadeInLeft, useSharedValue } from "react-native-reanimated";

function NoteScreen({ route, navigation }) {
  const { item } = route.params;

  const isTitle = item.title ? item.title : "New Note Title";
  const isContent = item.content ? item.content : "New Note";
  return (
    <Animated.View sharedTransitionTag={`note-${item.key}`}>
      <Animated.Text
        entering={FadeInLeft.duration(500).delay(400)}
        style={{ fontSize: 25 }}
      >
        {isTitle}
      </Animated.Text>
      <Animated.Text
        entering={FadeInLeft.duration(500).delay(600)}
        style={{ fontSize: 16 }}
      >
        {isContent}
      </Animated.Text>
    </Animated.View>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({});
