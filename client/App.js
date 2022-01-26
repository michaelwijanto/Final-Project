// // In App.js in a new project
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";

// Apollo Client
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient";

//Components
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import UserProfileStack from "./src/StackScreen/UserProfileStack";
import Activate from "./src/screens/Activate";
import ContentContainer from "./src/appChilds/ContentContainer";
import PaymentWebview from "./src/components/PaymentWebview";
import SubcriptionLandingPage from "./src/screens/SubscriptionLandingPage";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
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
            <Stack.Screen 
              name="PaymentScreen"
              component={PaymentWebview}
              options={{
                headerShown: true
              }}
            />
            <Stack.Screen
              name="SubcribePage"
              component={SubcriptionLandingPage}
              options={{
                headerShown: true,
                title: "Get FIT with Active8!",
                headerStyle: {
                  backgroundColor: "#b9d0df",
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
export default App;
