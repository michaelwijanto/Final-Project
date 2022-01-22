import React from "react";

import { StyleSheet, View, Pressable, FlatList } from "react-native";
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

export default function Home({ navigation }) {
  const [selected, setSelected] = React.useState(1);

  return (
    <Box
      style={styles.container}
      _dark={{
        borderColor: "coolGray.900",
        backgroundColor: "#1C2F3C",
      }}
      _light={{ backgroundColor: "#F5F8FA" }}
    >
      <View style={styles.containerBox}>
        <AppBar />
        <Box>
        </Box>
      </View>
      <TabBar />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBox: {
    width: '100%',
    height: '91%',
  },
});
