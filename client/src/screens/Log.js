import React from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const Example = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      height: "168 cm",
      createdAt: "02-01-2022",
      weight: "77 kg",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      height: "168 cm",
      createdAt: "06-01-2022",
      weight: "76 kg",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      height: "169 cm",
      createdAt: "12-01-2022",
      weight: "74 kg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      height: "169 cm",
      createdAt: "17-01-2022",
      weight: "73 kg",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      height: "170 cm",
      createdAt: "22-01-2022",
      weight: "71 kg",
    },
  ];
  return (
    <Box
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <Heading fontSize="xl" p="4" pb="3">
        Logs
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Box style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="human-male-height"
                    size={24}
                    color="black"
                  />
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.height}
                  </Text>
                </Box>
                <Box style={{ flexDirection: "row" }}>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                  >
                    {item.weight}
                  </Text>
                </Box>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.createdAt}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default function Log(){
  return (
    <NativeBaseProvider>
      <Center px="3">
        <Example flex={1} />
      </Center>
    </NativeBaseProvider>
  );
};
