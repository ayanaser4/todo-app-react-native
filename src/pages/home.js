import { Text, View, TouchableOpacity, Platform } from "react-native";
import { styles } from "../components/styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import TodoForm from "../components/todoForm.js";
import { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Todos from "../components/todos.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Paths } from "../routes/path";
import Details from "./details.js";
export default function Home() {
  const { navigate } = useNavigation();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");


  const handleAddtodo = (todo) => {
    const newTodo = { ...todo, id: Date.now(), completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const STORAGE_KEY = "@todos";

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
          style={[
            styles.filterBtn,
            filter === "all" ? { backgroundColor: "#000" } : {},
          ]}
          onPress={() => setFilter("all")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "all" ? { color: "#fff" } : {},
            ]}
          >
            All
          </Text>
        </TouchableOpacity>{" "}
        {/*onPress={() =>dispatch({...StackActions.replace(Paths.Completed_task)})} */}
        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "completed" && { backgroundColor: "#000" },
          ]}
          onPress={() => setFilter("completed")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "completed" && { color: "#fff" },
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterBtn,
            filter === "inProgress" && { backgroundColor: "#000" },
          ]}
          onPress={() => setFilter("inProgress")}
        >
          <Text
            style={[
              styles.filterText,
              filter === "inProgress" && { color: "#fff" },
            ]}
          >
            In progress
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLine} />
      <View style={styles.todosContainer}>
        <ScrollView>
          <Todos todos={todos} setTodos={setTodos} filter={filter} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
