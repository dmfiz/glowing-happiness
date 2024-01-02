import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeInLeft,
  useSharedValue,
  SharedTransition,
} from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

function NoteScreen({ route, navigation }) {
  const { item } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [bgColor, setBgColor] = useState(item.backgroundColor);

  const windowHeight = Dimensions.get("window").height;
  const noteHeight = windowHeight - 100;

  const isTitle = item.title ? item.title : "New Note Title";
  const isContent = item.content ? item.content : "New Note";
  return (
    <Animated.View
      style={{
        ...styles.noteContainer,
        backgroundColor: item.backgroundColor,
      }}
      sharedTransitionTag={`note-${item.key}`}
    >
      <View style={styles.buttonContainer}>
        {/* BACK BUTTON */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.rightButtonContainer}>
          {/* COLOR BUTTON */}
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <MaterialIcons name="palette" size={24} color="black" />
          </TouchableOpacity>
          {/* DELETE BUTTON */}
          <TouchableOpacity>
            <MaterialIcons name="delete" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.noteTitle}
        placeholder={title}
        onChangeText={(text) => setTitle(text)}
        value={title}
        multiline={true}
      />

      <TextInput
        style={styles.noteContent}
        placeholder={content}
        onChangeText={(text) => setContent(text)}
        value={content}
        multiline={true}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        statusBarTranslucent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.blurOverlay}>
          <View style={styles.modalContainer}>
            <Text>TEST</Text>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Animated.View>
  );
}

export default NoteScreen;

const styles = StyleSheet.create({
  noteContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 5,
    marginRight: 10,
  },
  rightButtonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  noteTitle: {
    fontSize: 30,
    marginTop: 5,
    marginBottom: 10,
  },
  noteContent: {
    fontSize: 20,
    paddingLeft: 5,
  },
  blurOverlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
  },
  modalContainer: {
    position: "absolute",
    top: 80,
    right: 35,
    zIndex: 110,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 160,
    width: 60,
  },
});
