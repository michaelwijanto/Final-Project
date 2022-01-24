import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Macro from "../screens/Macro";

const MacroStack = createNativeStackNavigator();

function MacroStackScreen() {
  return (
    <MacroStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#b9d0df",
        },
      }}
    >
      <MacroStack.Screen
        name="MacroScreen"
        component={Macro}
        options={{
          title: "Macro",
        }}
      />
    </MacroStack.Navigator>
  );
}

export default MacroStackScreen;
