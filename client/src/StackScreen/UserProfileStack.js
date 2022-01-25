import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingPage from "../screens/LandingPage"
import PhoneNumber from "../screens/PhoneNumber";
import Gender from "../screens/Gender"
import DateBirth from "../screens/DateBirth"
import Height from "../screens/Height"
import Weight from "../screens/Weight"
import ActivityLevel from "../screens/ActivityLevel"
import Goals from "../screens/Goals"

const Stack = createNativeStackNavigator();

function UserProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#b9d0df",
        },
      }}
    >
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{
          title: "LandingPage",
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PhoneNumber"
        component={PhoneNumber}
        options={{
          title: "Step 1 of 7",
        }}
      />
      <Stack.Screen
        name="Gender"
        component={Gender}
        options={{
          title: "Step 2 of 7",
        }}
      />
      <Stack.Screen
        name="DateBirth"
        component={DateBirth}
        options={{
          title: "Step 3 of 7",
        }}
      />
      <Stack.Screen
        name="Height"
        component={Height}
        options={{
          title: "Step 4 of 7",
        }}
      />
      <Stack.Screen
        name="Weight"
        component={Weight}
        options={{
          title: "Step 5 of 7",
        }}
      />
      <Stack.Screen
        name="ActivityLevel"
        component={ActivityLevel}
        options={{
          title: "Step 6 of 7",
        }}
      />
      <Stack.Screen
        name="Goals"
        component={Goals}
        options={{
          title: "Step 7 of 7",
        }}
      />
    </Stack.Navigator>
  );
}

export default UserProfileStack;

