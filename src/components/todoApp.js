import { Text, View, TouchableOpacity, Platform } from "react-native";
import { styles } from "./styles.js";
import Icon from "react-native-vector-icons/MaterialIcons";
import TodoForm from "./todoForm.js";
import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native-web";
import Todos from "./todos.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const STORAGE_KEY = '@todos';

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) setTodos(JSON.parse(stored));
      } catch (e) {
        console.error("Load error:", e);
      }
    };
    loadTodos();
  }, []);

  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      } catch (e) {
        console.error("Save error:", e);
      }
    };
    saveTodos();
  }, [todos]);
  const handleAddtodo = (todo) => {
    setTodos((prevtodos) => [...prevtodos, todo]);
  };
  
  console.log(Platform.OS);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#000" />
        <Text style={styles.textHeader}>Todo App</Text>
      </View>
      {/* onsubmit make as props take data from form*/}
      {/*}
      <TodoForm
        onSubmit={(todo) => setTodos((prevTodos) => [...prevTodos, todo])}
      />*/}
      <TodoForm onSubmit={handleAddtodo} />
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={{ ...styles.filterBtn, backgroundColor: "#000" }}
        >
          <Text
            style={{
              ...styles.filterText,
              color: "#fff",
            }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>In progress</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLine} />
      <View style={styles.todosContainer}>
        <ScrollView>{todos.length > 0 && <Todos todos={todos} setTodos={setTodos} />}</ScrollView>
      </View>
    </SafeAreaView>
  );
}
