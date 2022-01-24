// // In App.js in a new project
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Text } from "native-base";

// Apollo Client
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient";

//Components
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import UserProfileStack from "./src/StackScreen/UserProfileStack";
import Activate from "./src/screens/Activate";
import ContentContainer from "./src/appChilds/ContentContainer";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Activate"
              component={Activate}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="UserProfileStack"
              component={UserProfileStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ContentContainer"
              component={ContentContainer}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
export default App;
