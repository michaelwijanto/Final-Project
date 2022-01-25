import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogScreen from "../screens/Log";

const LogStack = createNativeStackNavigator();

function LogStackScreen() {
  return (
    <LogStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#b9d0df",
        },
      }}
    >
      <LogStack.Screen
        name="LogScreen"
        component={LogScreen}
        options={{
          title: "Log",
          headerTitleAlign: "center",
        }}
      />
    </LogStack.Navigator>
  );
}

export default LogStackScreen;
