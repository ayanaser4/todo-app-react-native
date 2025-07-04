import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
  placeholder: {
    color: "#aeaeae",
  },
  TextInput: {
    color: "#000",
  },

  submitBtn: {
    width: "50%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row", // ⬅️ Horizontal layout
    alignItems: "center", // ⬅️ Vertical alignment
    padding: 16,
  },
  textHeader: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 10,
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
    width: "90%",
  },

  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "100%",
  },

  iconGroup: {
    flexDirection: "row",
    alignItems: "center",
  },

  todoTitle: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },

  detailsContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
    alignItems: "center", // ⬅️ centers horizontally
    justifyContent: "center", // ⬅️ centers vertically
  },

  detailsCard: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },

  detailsHeading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 20,
    textAlign: "center",
  },

  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  detailsLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    width: "40%",
  },

  detailsValue: {
    fontSize: 16,
    color: "#000",
    width: "60%",
    textAlign: "right",
  },

  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12,
    width: "100%",
  },
});
