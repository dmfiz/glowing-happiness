import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

function NoteScreen({ route, navigation }) {
  const { title, content } = route.params;

  const isTitle = title ? title : "New Note Title";
  const isContent = content ? content : "New Note";
  return (
    <View>
      <Text style={{ fontSize: 25 }}>{isTitle}</Text>
      <Text style={{ fontSize: 16 }}>{isContent}</Text>
    </View>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({});
