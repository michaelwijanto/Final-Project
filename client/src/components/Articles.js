import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Alert,
  Pressable,
  Linking,
  ScrollView,
} from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  ChevronRightIcon,
} from "native-base";
import axios from "axios";

export default function Articles({ navigation }) {
  const [data, setData] = useState();

  const options = {
    method: "GET",
    url: "https://newsdata2.p.rapidapi.com/news",
    params: { category: "health", language: "en" },
    headers: {
      "x-rapidapi-host": "newsdata2.p.rapidapi.com",
      "x-rapidapi-key": "fc6ce6795fmsh6181380377953b1p106e09jsna2904c46d6d2",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setData(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });

  // useEffect(() => {}, [data]);
  if (!data) return <Text>Loading...</Text>;

  // const supportedURL = data.link;
  // const unsupportedURL = "slack://open?team=123456";
  // const handlePress = () => {
  //   const supported = Linking.canOpenURL(supportedURL);

  //   if (supported) {
  //     Linking.openURL(supportedURL);
  //   } else {
  //     Alert.alert(`Don't know how to open this URL: ${unsupportedURL}`);
  //   }
  // };

  return (
    <Box>
      {data.map((item, index) => {
        if (index < 5) {
          return (
            <Pressable
              // onPress={() => handlePress()}
              key={index}
            >
              <Box
                w="380"
                h="230"
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
                <Box h="150" w="500">
                  <AspectRatio>
                    <Image
                      h="150"
                      w="400"
                      // maxW="100%"
                      // borderColor="white"
                      borderWidth="1"
                      source={{
                        uri: item.image_url,
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
                      marginTop="4"
                    >
                      {item.title}
                    </Heading>
                  </Stack>
                </Stack>
              </Box>
            </Pressable>
          );
        }
      })}
    </Box>
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
