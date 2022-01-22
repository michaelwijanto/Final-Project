// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box } from "native-base";
import Home from "./src/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Log from "./src/screens/Log";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Log" component={Log} />
        </Tab.Navigator>
        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
