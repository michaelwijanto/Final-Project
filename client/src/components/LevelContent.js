import React from "react";

import { StyleSheet, Pressable, FlatList, ScrollView } from "react-native";
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

export default function LevelContent({ navigation }) {
  const [selected, setSelected] = React.useState(1);

  return (
    <Box style={styles.container}>
      <ScrollView>
        <Box style={styles.top}>
          <Heading>TEXT</Heading>
          {/* <TabBar navigation={navigation} /> */}
        </Box>
        <Box style={styles.mid}>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
          <Heading>MID</Heading>
        </Box>
      </ScrollView>
      <TabBar navigation={navigation} />
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
    alignContent: "center",
  },
  imageBanner: {
    width: 200,
    height: 2000,
  },
  mid: {
    flex: 1,
  },
});
