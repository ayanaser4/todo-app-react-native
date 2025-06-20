import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles.js";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
  },
];
export default function TodoApp() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="menu" size={30} color="#000" />
        <Text style={styles.textHeader}>Todo App</Text>
      </View>

      <TextInput placeholder="Enter title" style={styles.input} />
      <TextInput placeholder="Enter description" style={styles.input} />
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.text}>Save</Text>
      </TouchableOpacity>
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
        <FlatList
          data={Tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text style={styles.todoTitle}>{item.title}</Text>
              <Icon name="delete" size={24} color="#f00" />
            </View>
          )}
        />
      </View>
    </View>
  );
}
