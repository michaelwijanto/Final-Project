import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { 
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";

export default function TabBar() {
  const [selected, setSelected] = React.useState(0);
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
        <Center flex={1}></Center>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            // cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialCommunityIcons name="yoga" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Content
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 2 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialIcons 
                    name={selected === 2 ? "history" : "history-toggle-off"} 
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" font="12">
                History Log
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name="food-variant"
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" font="12">
                Macro
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 4 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(4)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 4 ? "account" : "account-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
