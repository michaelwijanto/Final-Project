import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  ChevronRightIcon,
  IconButton,
  Icon,
} from "native-base";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { GET_CONTENT_CARD } from "../../queries";
// import ErrorPage from "../components/errorPage";
// import LoadingPage from "../components/loadingPage";

export default function LevelFilter({ navigation, route }) {
  const { id } = route.params;
  const { levelName } = route.params;

  const { loading, error, data } = useQuery(GET_CONTENT_CARD, {
    variables: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmllc2FzdHJhQG1haWwuY29tIiwiZnVsbE5hbWUiOiJBcmllIFNhc3RyYSIsInJvbGUiOiJhZG1pbiIsImlzUmVnaXN0ZXIiOiJmYWxzZSIsImlhdCI6MTY0MjkyMzU0NH0.7SQe4pqsA5JqGjbxfyF0y7Rf9t6dgx_VrxNbh76igxQ",
    },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

  let newData = [];

  data.getContents.map((el) => {
    if (el.LevelId == id) {
      newData.push(el);
    }
  });

  const subscription = "false";

  return (
    <FlatList
      data={newData}
      renderItem={({ item }) => {
        return (
          <Pressable
          // onPress={() =>
          //   navigation.navigate("Detail", {
          //     id: item.id,
          //   })
          // }
          >
            <Box
              w="380"
              h="230"
              rounded="lg"
              overflow="hidden"
              marginTop="3"
              marginBottom="1"
              marginLeft="3"
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
              // borderColor="black"
              borderWidth="2"
            >
              <Box h="150" w="500">
                <AspectRatio>
                  <Image
                    h="150"
                    w="400"
                    // maxW="100%"
                    // borderColor="white"
                    borderWidth="1"
                    source={{
                      uri: item.imgThumbnail,
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="1">
                <Stack>
                  <Heading
                    size="sm"
                    ml="-1"
                    paddingLeft="5"
                    justifyContent="center"
                  >
                    {levelName}
                  </Heading>
                </Stack>
              </Stack>
              <Box style={styles.titleContent}>
                <Text style={styles.textTitle}>{item.title}</Text>
              </Box>
              <Box style={styles.iconContent}>
                {(() => {
                  if (subscription == "false") {
                    return (
                      <IconButton
                        paddingTop="-5"
                        icon={<Icon as={AntDesign} name="playcircleo" />}
                        borderRadius="full"
                        _icon={{
                          color: "orange.500",
                          size: "md",
                        }}
                        _hover={{
                          bg: "orange.600:alpha.20",
                        }}
                        _pressed={{
                          bg: "orange.600:alpha.20",
                          _icon: {
                            name: "playcircleo",
                          },
                          _ios: {
                            _icon: {
                              size: "lg",
                            },
                          },
                        }}
                        _ios={{
                          _icon: {
                            size: "lg",
                          },
                        }}
                        // onPress={() =>
                        //   navigation.navigate("Detail", {
                        //     id: item.id,
                        //   })
                        // }
                      />
                    );
                  } else {
                    return (
                      <IconButton
                        paddingTop="-5"
                        icon={<Icon as={MaterialIcons} name="lock" />}
                        borderRadius="full"
                        _icon={{
                          color: "orange.500",
                          size: "md",
                        }}
                        _hover={{
                          bg: "orange.600:alpha.20",
                        }}
                        _pressed={{
                          bg: "orange.600:alpha.20",
                          _icon: {
                            name: "lock",
                          },
                          _ios: {
                            _icon: {
                              size: "lg",
                            },
                          },
                        }}
                        _ios={{
                          _icon: {
                            size: "lg",
                          },
                        }}
                        // onPress={() =>
                        //   navigation.navigate("Detail", {
                        //     id: item.id,
                        //   })
                        // }
                      />
                    );
                  }
                })()}
              </Box>
            </Box>
          </Pressable>
        );
      }}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  titleContent: {
    paddingLeft: 19,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
    // marginTop: -10,
  },
  textTitle: {
    paddingRight: 30,
    fontSize: 16,
  },
  iconContent: {
    bottom: 5,
    right: 5,
    position: "absolute",
    alignItems: "flex-end",
  },
});
