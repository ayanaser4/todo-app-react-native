import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles.js";


const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
  return (
    <View style={styles.todoItem}>
      <Text
        style={[
          styles.todoTitle,
          todo.completed && { textDecorationLine: "underline", color: "#999" },
        ]}
      >
        {todo.title}
      </Text>

      <View style={styles.iconGroup}>
        {/* Delete */}
        <TouchableOpacity onPress={() => onDelete(todo.id)}>
          <MaterialIcons
            name="delete"
            size={24}
            color="#f00"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>

        {/* Checkbox */}
        <TouchableOpacity onPress={onToggleComplete}>
          <Ionicons
            name={todo.completed ? "checkbox" : "square-outline"}
            size={24}
            color={todo.completed ? "green" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
