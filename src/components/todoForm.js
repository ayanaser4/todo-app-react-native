import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";
import { useDispatch } from "react-redux";
import { addTask } from "../pages/taskSlice"; 

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title) return;
    const todo = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    dispatch(addTask(todo));
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <TextInput
        onChangeText={setTitle}
        placeholder="Enter title"
        style={{ ...styles.input, ...styles.placeholder, ...styles.TextInput }}
        value={title}
      />
      <TextInput
        onChangeText={setDescription}
        placeholder="Enter description"
        style={{ ...styles.input, ...styles.placeholder, ...styles.TextInput }}
        value={description}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
