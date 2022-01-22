// In App.js in a new project

import * as React from "react";
import {ApolloProvider} from "@apollo/client"
import client from "./config/apolloClient";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NativeBaseProvider, Box } from "native-base";
import Home from "./src/screens/Home";
import Contents from "./src/screens/Content";
import LevelContent from "./src/components/LevelContent";
import Log from "./src/screens/Log"
import Macro from "./src/screens/Macro"

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Home"
            component={Profile}
            options={{
              headerShown: true,
            }}
          /> */}
          {/* <Stack.Screen
            name="Contents"
            component={Contents}
            options={{
              headerShown: true,
            }}
          /> */}
          {/* <Stack.Screen
            name="Level"
            component={LevelContent}
            options={{
              headerShown: true,
            }}
          /> */}
          <Stack.Screen
            name="Log"
            component={Log}
            options={{
              headerShown: true,
            }}
          />
          {/* <Stack.Screen
            name="Macro"
            component={Macro}
            options={{
              headerShown: true,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    </ApolloProvider>
  );
}

export default App;
