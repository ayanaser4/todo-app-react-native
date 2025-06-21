// import React, { useEffect, useState } from 'react';
// import { View, FlatList } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import TodoForm from './TodoForm';
// import TodoItem from './TodoItem';

// const App = () => {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const fetchTodosFromApi = async () => {
//       try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
//         const data = await res.json();
//         setTodos(data);
//         await AsyncStorage.setItem('@todos', JSON.stringify(data));
//       } catch (error) {
//         console.error('API fetch error:', error);
//         const stored = await AsyncStorage.getItem('@todos');
//         if (stored) setTodos(JSON.parse(stored));
//       }
//     };
//     fetchTodosFromApi();
//   }, []);

//   useEffect(() => {
//     saveTodos(todos);
//   }, [todos]);

//   const saveTodos = async (todos) => {
//     try {
//       await AsyncStorage.setItem('@todos', JSON.stringify(todos));
//     } catch (e) {
//       console.error('Saving error:', e);
//     }
//   };

//   return (
//     <View>
//       <TodoForm onSubmit={(todo) => setTodos((prev) => [...prev, todo])} />
//       <FlatList
//         data={todos}
//         keyExtractor={(item) => item.id?.toString()}
//         renderItem={({ item }) => <TodoItem item={item} />}
//       />
//     </View>
//   );
// };

// export default App;
