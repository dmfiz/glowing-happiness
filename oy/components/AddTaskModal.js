import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddTaskModal(props) {
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          value={task}
          onChangeText={setTask}
        />
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button
          title="Add Task"
          onPress={() => {
            props.addTask(task);
            setTask("");
            props.onClose();
          }}
        />
        <Button title="Cancel" onPress={props.onClose} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    height: 50,
    color: "black",
  },
  inputView: {
    width: 300,
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    height: 60,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  addTaskButton: {
    height: 60,
    width: 150,
    backgroundColor: "#ff9e22",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
    borderRadius: 10,
  },
  cancelButton: {
    height: 60,
    width: 150,
    backgroundColor: "#ff9e22",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 15,
    borderRadius: 10,
  },
});
