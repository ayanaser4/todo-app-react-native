import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import TodoItem from "../components/todoitem";
import { styles } from "../components/styles";

const Completedtask = () => {
  const tasks = useSelector((state) => state.tasks);
  const completed = tasks.filter((t) => t.completed);

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={styles.textHeader}>Completed Tasks</Text>
      {completed.length > 0 ? (
        completed.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20, color: "#999" }}>
          No completed tasks found.
        </Text>
      )}
    </ScrollView>
  );
};

export default Completedtask;
