import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile";
import { Button } from "native-base";
import { Entypo } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen({ navigation }) {
  const logouthandler = async (key) => {
    try {
      const logout = await AsyncStorage.clear();
      navigation.navigate("SignIn")
      return logout
    } catch (err) {
      return err;
    }
  };
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
          headerRight: () => (
            <Button
              onPress={() => logouthandler()}
              title="Log-Out"
              style={{backgroundColor:"#b9d0df"}}
            >
              <Entypo name="log-out" size={25} color="red" />
            </Button>
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackScreen;
