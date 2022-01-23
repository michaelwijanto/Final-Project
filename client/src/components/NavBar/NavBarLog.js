import SwitchMode from "../SwitchMode";
import { MaterialIcons } from "@expo/vector-icons";

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
      backgroundColor="#b9d0df"
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
        bg="#b9d0df"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack space="4" alignItems="center">
          <IconButton
            icon={
              <MaterialIcons
                name="history-toggle-off"
                size={24}
                color="#003049"
              />
            }
          />
          <Text color="#003049" fontSize="20" fontWeight="bold">
            Log
          </Text>
        </HStack>
        <HStack space="2">{/* <SwitchMode></SwitchMode> */}</HStack>
      </HStack>
    </Box>
  );
}
