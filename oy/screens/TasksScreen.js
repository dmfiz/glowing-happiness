import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeInLeft, useSharedValue } from "react-native-reanimated";
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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AddTaskModal from "../components/AddTaskModal";

function TasksScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = async (task) => {
    const docRef = await addDoc(collection(FIREBASE_DB, "tasks"), {
      text: task,
      completed: false,
      userId: FIREBASE_AUTH.currentUser.uid,
    });

    console.log(docRef);
  };

  const loadTaskList = async () => {
    const q = query(
      collection(FIREBASE_DB, "tasks"),
      where("userId", "==", FIREBASE_AUTH.currentUser.uid)
    );

    const querySnapshot = await getDocs(q);
    let tasks = [];
    querySnapshot.forEach((doc) => {
      let task = doc.data();
      task.id = doc.id;
      tasks.push(task);
    });
    console.log(tasks);
    setTasks(tasks);
    setLoading(false);
  };

  if (loading) {
    loadTaskList();
  }

  const checkTaskItem = (item, isChecked) => {};

  const renderTaskItem = ({ item, drag }) => {
    return (
      <ScaleDecorator>
        <BouncyCheckbox
          isChecked={item.completed}
          size={35}
          fillColor="black"
          unfillColor="#FFFFFF"
          text={item.text}
          iconStyle={{ borderColor: "red" }}
          onPress={(isChecked) => {
            checkTaskItem(item, isChecked);
          }}
          onLongPress={drag}
          margin={3}
        />
      </ScaleDecorator>
    );
  };

  const showTaskList = () => {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <DraggableFlatList
          data={tasks}
          onDragEnd={({ tasks }) => setTasks(tasks)}
          keyExtractor={(item) => item.id}
          renderItem={renderTaskItem}
        />
      </GestureHandlerRootView>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          animating={loading}
          color="black"
          size="large"
          style={styles.activityIndicator}
        />
      ) : (
        showTaskList()
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <AddTaskModal
          onClose={() => setShowModal(false)}
          addTask={(task) => addTask(task)}
        />
      </Modal>

      {/* ADD BUTTON */}
      <Animated.View style={{ position: "absolute", bottom: 100, right: 20 }}>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
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
    </SafeAreaView>
  );
}

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "mistyrose",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  addTaskButton: {
    flexDirection: "row",
    gap: 10,
    height: 50,
    width: 140,
    backgroundColor: "#ff9e22",
    elevation: 2,
    shadowColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
    borderRadius: 10,
  },
});
