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

export default function LevelList({ navigation }) {
  const [selected, setSelected] = React.useState(1);

  return (
    <Box style={styles.container}>
      <AppBar />
      <Pressable onPress={() => navigation.push("Contents")}>
        <Heading>Level List</Heading>
      </Pressable>
      {/* <TabBar navigation={navigation} /> */}
    </Box>
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
