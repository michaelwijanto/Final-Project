import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  ChevronRightIcon,
  Button,
} from "native-base";

import { useQuery } from "@apollo/client";
import { GET_CONTENT_CARD } from "../../queries";
// import ErrorPage from "../components/errorPage";
// import LoadingPage from "../components/loadingPage";

export default function LevelFilter({ navigation, route }) {
  const { id } = route.params;
  const { levelName } = route.params;

  console.log(id, levelName, "<<<<<<<<<<");
  const array = [
    {
      id: 1,
      nama: "Easy",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
    {
      id: 2,
      nama: "Medium",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
    {
      id: 3,
      nama: "Hard",
      imgUrl:
        "https://previews.123rf.com/images/teddy2007b/teddy2007b1809/teddy2007b180900005/107915546-fitness-banner-for-design.jpg",
    },
  ];
  const { loading, error, data } = useQuery(GET_CONTENT_CARD, {
    variables: {
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhcmllc2FzdHJhQG1haWwuY29tIiwiZnVsbE5hbWUiOiJBcmllIFNhc3RyYSIsInJvbGUiOiJhZG1pbiIsImlzUmVnaXN0ZXIiOiJmYWxzZSIsImlhdCI6MTY0MjkyMzU0NH0.7SQe4pqsA5JqGjbxfyF0y7Rf9t6dgx_VrxNbh76igxQ",
    },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;

  console.log(data.getContents);

  let newData = [];

  data.getContents.map((el) => {
    if (el.LevelId == id) {
      newData.push(el);
    }
  });

  // console.log(newData);

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
                <Heading>{item.title}</Heading>
              </Box>
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
  titleContent: {
    paddingLeft: 30,
    // marginTop: -10,
  },
});
