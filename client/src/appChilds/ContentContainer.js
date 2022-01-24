import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStackScreen from "../StackScreen/HomeStack";
import ContentStackScreen from "../StackScreen/ContentStack";
import LogStackScreen from "../StackScreen/LogStack";
import MacroStackScreen from "../StackScreen/MacroStack";
import ProfileStackScreen from "../StackScreen/ProfileStack";

const Tab = createBottomTabNavigator();

function ContentContainer() {
  return (
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
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Contents" component={ContentStackScreen} />
      <Tab.Screen name="Log" component={LogStackScreen} />
      <Tab.Screen name="Macro" component={MacroStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}

export default ContentContainer;
