import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Contact from "./components/Contact/Contact";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#0DB6E4",
          labelStyle: {
            fontWeight: "400",
            fontSize: 20,
          },

          style: {
            paddingRight: 15,
            paddingTop: 15,
            backgroundColor: "#B6C1C1",
            height: 100,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Accueil",
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={32} color="blue" />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            title: "Rechercher",
            tabBarIcon: () => (
              <Ionicons name="search-outline" size={32} color="blue" />
            ),
          }}
        />

        <Tab.Screen
          name="contact"
          component={Contact}
          options={{
            title: "Contact",
            tabBarIcon: () => (
              <Ionicons name="mail-open-outline" size={32} color="blue" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
