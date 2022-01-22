import React from "react";

import {
  StyleSheet,
  View,
  Pressable,
  FlatList,
  ScrollView,
} from "react-native";
import {
  Box,
  Heading,
  Image,
  useColorMode,
  ChevronRightIcon,
  StatusBar,
  HStack,
  IconButton,
  Text,
  Icon,
  Center,
} from "native-base";
import SwitchMode from "../components/SwitchMode";
import AppBar from "../components/AppBar";
import TabBar from "../components/TabBar";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import LevelContents from "../components/LevelContents";
import LevelList from "../components/LevelList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function Contents({ navigation }) {
  const [selected, setSelected] = React.useState(1);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LevelContents"
        component={LevelContents}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="LevelList"
        component={LevelList}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  top: {
    flex: 1,
  },
  imageBanner: {
    width: 200,
    height: 2000,
  },
});
