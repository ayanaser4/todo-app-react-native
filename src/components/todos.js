import React from "react";
import { ScrollView, View, Text } from "react-native";
import TodoItem from "./todoitem";

const Todos = ({ todos, setTodos, filter }) => {
  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  const filtered = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "inProgress") return !todo.completed;
    return true;
  });

  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      {filtered.length > 0 ? (
        filtered.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggleComplete={() => handleToggleComplete(todo.id)}
          />
        ))
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
