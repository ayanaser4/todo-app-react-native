import React from "react";
import { FlatList } from "react-native";
import TodoItem from "./todoitem";

const Todos = ({ todos, setTodos }) => {
  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem todo={item} onDelete={handleDeleteTodo} />
      )}
    />
  );
};

export default Todos;
