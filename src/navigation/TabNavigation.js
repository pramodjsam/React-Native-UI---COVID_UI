import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Speak from "../screens/Speak";
import Notification from "../screens/Notification";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          // backgroundColor: "gray",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ccc",
        tabBarInactiveTintColor: "#eee",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <Feather name="cast" size={size} />
            </View>
          ),
          tabBarItemStyle: {
            borderTopRightRadius: 100,
          },
        }}
      />
      <Tab.Screen
        name="Speak"
        component={Speak}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View style={styles.iconCon}>
              <Feather name="mic" size={40} />
            </View>
          ),
          tabBarItemStyle: {
            backgroundColor: "#f2f2f2",
            // backgroundColor: "transparent",
            bottom: 35,
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <View>
              <Feather name="bell" size={size} />
            </View>
          ),
          tabBarItemStyle: {
            borderTopLeftRadius: 100,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconCon: {
    position: "absolute",
    bottom: 15,
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default TabNavigation;
