import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#b9d0df",
        },
      }}
    >
      <ProfileStack.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          title: "Profile",
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
