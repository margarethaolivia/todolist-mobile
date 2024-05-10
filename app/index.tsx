import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import Task from "./../components/Task";
import TaskForm from "./../components/TaskForm";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleToggle = (taskId: number) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      return sortTasks(updatedTasks);
    });
  };

  const handleDelete = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleSubmit = (newTask: string) => {
    setTasks((prevTasks) => [
      { id: Date.now(), text: newTask, completed: false },
      ...prevTasks,
    ]);
  };

  const sortTasks = (tasksArray: Task[]) => {
    const incompleteTasks = tasksArray.filter((task) => !task.completed);
    const completedTasks = tasksArray.filter((task) => task.completed);
    return [...incompleteTasks, ...completedTasks];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Todo List</Text>
      <TaskForm handleSubmit={handleSubmit} />
      <ScrollView>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#333",
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
});

export default App;
