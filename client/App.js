// In App.js in a new project

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NativeBaseProvider, Box } from "native-base";
// import Home from "./src/screens/Home";
import Contents from "./src/screens/Content";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          /> */}
          <Stack.Screen
            name="Contents"
            component={Contents}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
