import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface TaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  handleToggle: (taskId: number) => void;
  handleDelete: (taskId: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, handleToggle, handleDelete }) => {
  return (
    <View style={styles.task}>
      <View style={styles.taskContent}>
        <TouchableOpacity onPress={() => handleToggle(task.id)}>
          <FontAwesome
            name={task.completed ? "check-circle" : "circle-thin"}
            size={24}
            color={task.completed ? "#4CAF50" : "#333"}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.taskText,
            task.completed && { textDecorationLine: "line-through" },
          ]}
        >
          {task.text}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(task.id)}>
        <FontAwesome name="trash" size={24} color="#FF5252" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#444",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#fff",
  },
});

export default Task;
