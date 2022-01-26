import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { Box, Heading, AspectRatio, Image, Text, Stack, Badge } from "native-base";

import { useQuery } from "@apollo/client";
import { GET_LEVEL } from "../../queries";
import LoadingPage from "./LoadingPage";
// import ErrorPage from "../components/errorPage";
export default function LevelHorizontal({ navigation }) {
  const { loading, error, data } = useQuery(GET_LEVEL);

  if (loading) return <LoadingPage />;
  if (error) return <Text>Error...</Text>;
  return (
    <FlatList
      horizontal
      data={data.getLevel}
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate("Contents", {
                screen: "LevelFilter",
                params: {
                  id: item.id,
                  levelName: item.name,
                },
                initial: false,
              })
            }
          >
            <Box
              w="380"
              h="220"
              rounded="lg"
              overflow="hidden"
              marginTop="3"
              _dark={{
                borderColor: "gray.800",
                backgroundColor: "gray.800",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{
                backgroundColor: "primary.50",
              }}
              marginRight="5"
              borderColor="gray.300"
              borderWidth="1"
            >
              <Badge colorScheme="info">{item.name}</Badge>
              <Box h="150" w="500">
                <AspectRatio>
                  <Image
                    h="150"
                    w="400"
                    // maxW="100%"
                    // borderColor="white"
                    borderWidth="1"
                    rounded="2xl"
                    source={{
                      uri: item.thumbnail,
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>

              <Stack p="1">
                <Stack>
                  <Heading size="sm" ml="-1" paddingLeft="5" justifyContent="center" padding="3">
                    {item.description}
                  </Heading>
                </Stack>
              </Stack>
            </Box>
          </Pressable>
        );
      }}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  button: {
    marginBottom: "10px",
  },
  top: {
    flex: 1,
    margin: 15,
  },
  bottom: {
    flex: 1,
    margin: 15,
  },
  middle: {
    flex: 1,
  },
  titleCollections: {
    color: "#010203",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
