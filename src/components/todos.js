import React from "react";
import { ScrollView, View, Text } from "react-native";
import TodoItem from "./todoitem";
import { useSelector } from "react-redux";

const Todos = ({ filter }) => {
  const todos = useSelector((state) => state.tasks); 

  const filtered = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "inProgress") return !todo.completed;
    return true;
  });

  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      {filtered.length > 0 ? (
        filtered.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <View>
          <Text style={{ textAlign: "center", color: "#999", marginTop: 20 }}>
            No tasks found.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Todos;
