import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { styles } from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { Paths } from "../routes/path.js";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskComplete } from "../pages/taskSlice.js";

const TodoItem = ({ todo }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(Paths.Details, {
          title: todo.title,
          description: todo.description,
        })
      }
    >
      <View style={styles.todoItem}>
        <Text
          style={[
            styles.todoTitle,
            todo.completed && {
              textDecorationLine: "underline",
              color: "#999",
            },
          ]}
        >
          {todo.title}
        </Text>

        <View style={styles.iconGroup}>
          <TouchableOpacity onPress={() => dispatch(deleteTask(todo.id))}>
            <MaterialIcons
              name="delete"
              size={24}
              color="#f00"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => dispatch(toggleTaskComplete(todo.id))}>
            <Ionicons
              name={todo.completed ? "checkbox" : "square-outline"}
              size={24}
              color={todo.completed ? "green" : "gray"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
