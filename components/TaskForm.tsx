import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface TaskFormProps {
  handleSubmit: (newTask: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ handleSubmit }) => {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleChange = (text: string) => {
    setNewTask(text);
  };

  const onSubmit = () => {
    if (!newTask.trim()) return;
    handleSubmit(newTask);
    setNewTask("");
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        value={newTask}
        onChangeText={handleChange}
        placeholder="Enter a new task..."
        style={styles.input}
        ref={inputRef}
        onSubmitEditing={onSubmit}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    marginRight: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TaskForm;
