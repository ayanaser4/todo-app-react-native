import { Text, View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { styles } from "../components/styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import TodoForm from "../components/todoForm.js";
import Todos from "../components/todos.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks } from "./taskSlice";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const STORAGE_KEY = "@todos";

  // Load from AsyncStorage once
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          dispatch(setTasks(JSON.parse(stored)));
        }
      } catch (e) {
        console.error("Load error:", e);
      }
    };
    loadTasks();
  }, []);

  // Save to AsyncStorage on tasks change
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      } catch (e) {
        console.error("Save error:", e);
      }
    };
    saveTasks();
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#000" />
        <Text style={styles.textHeader}>Todo App</Text>
      </View>

      <TodoForm />
      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        {["all", "completed", "inProgress"].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterBtn,
              filter === status && styles.activeFilterBtn,
            ]}
            onPress={() => setFilter(status)}
          >
            <Text
              style={[
                styles.filterText,
                filter === status && styles.activeFilterText,
              ]}
            >
              {status === "inProgress" ? "In Progress" : status[0].toUpperCase() + status.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.dividerLine} />
      <View style={styles.todosContainer}>
        <ScrollView>
          <Todos filter={filter} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
