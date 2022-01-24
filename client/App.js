// // In App.js in a new project
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider } from "native-base";
import { StripeProvider } from "@stripe/stripe-react-native";

// Apollo Client
import { ApolloProvider } from "@apollo/client";
import client from "./config/apolloClient";

// Components
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStackScreen from "./src/StackScreen/HomeStack";
import ContentStackScreen from "./src/StackScreen/ContentStack";
import LogStackScreen from "./src/StackScreen/LogStack";
import MacroStackScreen from "./src/StackScreen/MacroStack";
import ProfileStackScreen from "./src/StackScreen/ProfileStack";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Activate from "./src/screens/Activate";
import Payment from "./src/screens/Payment";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "#b9d0df",
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Contents") {
                  iconName = focused ? "barbell" : "barbell-outline";
                } else if (route.name === "Log") {
                  iconName = focused ? "calendar" : "calendar-outline";
                } else if (route.name === "Macro") {
                  iconName = focused ? "fast-food" : "fast-food-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            {/* <Stack.Screen
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
            /> */}
            {/* <Stack.Screen
              name="Activate"
              component={Activate}
              options={{
                headerShown: false,
              }}
            /> */}
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Contents" component={ContentStackScreen} />
            <Tab.Screen name="Log" component={LogStackScreen} />
            <Tab.Screen name="Macro" component={MacroStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
export default App;
