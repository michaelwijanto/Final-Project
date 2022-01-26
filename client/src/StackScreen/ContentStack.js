import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContentScreen from "../screens/Content";
import LevelFilter from "../components/LevelVerticalContents";
import ContentDetail from "../components/ContentDetail";
import CoachDetail from "../components/CoachDetailHome";
import CoachChat from "../components/CoachChat";

const ContentStack = createNativeStackNavigator();

function ContentStackScreen() {
  return (
    <ContentStack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#b9d0df",
        },
      }}
    >
      <ContentStack.Screen
        name="ContentScreen"
        component={ContentScreen}
        options={{
          title: "Contents",
          headerTitleAlign: "center",
        }}
      />
      <ContentStack.Screen
        name="LevelFilter"
        component={LevelFilter}
        options={({ route, navigation }) => ({
          title: `Level ${route.params.levelName}`,
        })}
      />
      <ContentStack.Screen
        name="Content Detail"
        component={ContentDetail}
        options={{
          title: "Detail Exercise",
        }}
      />
      <ContentStack.Screen
        name="CoachDetailContent"
        component={CoachDetail}
        options={({ route, navigation }) => ({
          title: `Coach ${route.params.coachName}`,
        })}
      />
      <ContentStack.Screen
        name="CoachChat"
        component={CoachChat}
        options={({ route, navigation }) => ({
          title: `Chat with ${route.params.coachName}`,
        })}
      />
    </ContentStack.Navigator>
  );
}

export default ContentStackScreen;
