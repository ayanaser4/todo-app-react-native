import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import Completedtask from "../pages/completedtask";
import StackNavigator from "./stacknavigator";
import { Paths } from "./path";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 65,
            backgroundColor: "#fff",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: "absolute",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 10,
          },
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#999",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginBottom: 5,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={Paths.Home}
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name={Paths.Completed_task}
          component={Completedtask}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="check-circle" size={size} color={color} />
            ),
            tabBarLabel: "Completed",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
