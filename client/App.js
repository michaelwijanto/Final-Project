// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Box } from "native-base";
import {ApolloProvider} from "@apollo/client"
import client from "./config/apolloClient";

// Component
import Home from "./src/screens/Home";
import Log from "./src/screens/Log";
import Macro from "./src/screens/Macro";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: true,
            }}
          /> */}
          {/* <Stack.Screen
            name="Log"
            component={Log}
            options={{
              headerShown: true,
            }}
          /> */}

          <Stack.Screen
            name="Macro"
            component={Macro}
            options={{
              headerShown: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
    </ApolloProvider>
  );
}

export default App;
