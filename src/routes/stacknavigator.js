import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import Home from "../pages/home";
import Details from "../pages/details";
import { Paths } from "./path";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Paths.Home}
        component={Home}
        options={{
          headerShown: false,
          headerTitleAlign: "left",
          headerTitle: "TODO APP",
          headerTintColor: "#000",
          headerRight: () => (
            <TouchableOpacity onPress={() => console.log("Pressed")}>
              <MaterialIcons
                name="add"
                size={24}
                color="#000"
                style={{ marginRight: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name={Paths.Details} component={Details} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
