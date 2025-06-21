import React from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";
import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  //create two state for title and description to get data from input
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //handle submit to create object from id and title and description
  const handleSubmit = () => {
    if(!title) return;
    const todo = {
      id: Math.floor(Math.random() * 1000),
      title,
      description,
      completed: false,
    };
    //create object and pass to onSubmit
    onSubmit(todo);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <TextInput
        onChangeText={(val) => setTitle(val)}
        placeholder="Enter title"
        style={{ ...styles.input, ...styles.placeholder, ...styles.TextInput }}
        value={title}
      />
      <TextInput
        onChangeText={(val) => setDescription(val)}
        placeholder="Enter description"
        style={{ ...styles.input, ...styles.placeholder, ...styles.TextInput }}
        value={description}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit} >
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
