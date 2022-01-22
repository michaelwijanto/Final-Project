import SwitchMode from "../components/SwitchMode";
import { AntDesign } from "@expo/vector-icons";

import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  useColorMode,
  ChevronRightIcon,
  StatusBar,
  HStack,
  IconButton,
  Text,
} from "native-base";

export default function AppBar({ navigation }) {
  return (
    <Box
      safeAreaTop
      backgroundColor="#87A8A4"
      _dark={{
        color: "white",
        // backgroundColor: "gray.900",
      }}
      _light={{
        color: "black",
      }}
      borderBottomWidth="1.5"
      borderColor="white"
    >
      <HStack
        bg="#87A8A4"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="4" alignItems="center">
          <IconButton
            icon={<AntDesign name="home" size={24} color="white" />}
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Active8
          </Text>
        </HStack>
        <HStack space="2">
          <SwitchMode></SwitchMode>
        </HStack>
      </HStack>
    </Box>
  );
}
