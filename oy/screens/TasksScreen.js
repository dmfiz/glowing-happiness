import React, { useState } from "react";
import {
  ActivityIndicator,
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
} from "firebase/firestore";
import AddTaskModal from "../components/AddTaskModal";

function TasksScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
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
        <Text>Tasks</Text>
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
      <TouchableOpacity
        style={styles.addTaskButton}
        onPress={() => setShowModal(true)}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          Add Task
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default TasksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignItems: "center",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  addTaskButton: {
    height: 60,
    width: 300,
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
