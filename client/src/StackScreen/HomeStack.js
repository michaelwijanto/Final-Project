import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import CoachDetail from "../components/CoachDetailHome";
import CoachChat from '../components/CoachChat'

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#b9d0df",
        },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Active8",
          headerTitleAlign: "center",
        }}
      />
      <HomeStack.Screen
        name="CoachDetail"
        component={CoachDetail}
        options={({ route, navigation }) => ({
          title: `Coach ${route.params.coachName}`,
        })}
      />
      <HomeStack.Screen
        name="CoachChat"
        component={CoachChat}
        options={({ route, navigation }) => ({
          title: `Chat with ${route.params.coachName}`,
        })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
