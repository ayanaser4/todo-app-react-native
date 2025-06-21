import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles.js";

const TodoItem = ({ todo, onDelete }) => {
  const [isStriked, setIsStriked] = useState(false);

  return (
    <View style={styles.todoItem}>
      <Text
        style={[
          styles.todoTitle,
          isStriked && { textDecorationLine: "underline", color: "#999" },
        ]}
      >
        {todo.title}
      </Text>

      <View style={styles.iconGroup}>
        {/* 🗑️ Delete Task */}
        <TouchableOpacity onPress={() => onDelete(todo.id)}>
          <MaterialIcons
            name="delete"
            size={24}
            color="#f00"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>

        {/* ✅ Checkbox strike-through */}
        <TouchableOpacity onPress={() => setIsStriked(!isStriked)}>
          <Ionicons
            name={isStriked ? "checkbox" : "square-outline"}
            size={24}
            color={isStriked ? "green" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoItem;
