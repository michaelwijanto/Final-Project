import SwitchMode from "../SwitchMode";
import { AntDesign } from "@expo/vector-icons";

import { View, Pressable, FlatList } from "react-native";
import { Box, HStack, IconButton, Text } from "native-base";

export default function AppBar({ navigation, coachName }) {
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
            onPress={() => navigation.push("Contents")}
            icon={<AntDesign name="back" size={24} color="#003049" />}
          />
          <Text color="#003049" fontSize="20" fontWeight="bold">
            Coach {coachName}
          </Text>
        </HStack>
        <HStack space="2">{/* <SwitchMode></SwitchMode> */}</HStack>
      </HStack>
    </Box>
  );
}
