import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  Avatar,
} from "native-base";

import { useQuery } from "@apollo/client";
import { GET_COACHES } from "../../queries";
// import ErrorPage from "../components/errorPage";
// import LoadingPage from "../components/loadingPage";

export default function CoachHorizontal({ navigation }) {
  const { loading, error, data } = useQuery(GET_COACHES);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;
  return (
    <FlatList
      horizontal
      data={data.getCoaches}
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate("CoachDetailContent", {
                id: item.id,
                coachName: item.name,
              })
            }
          >
            <Box
              w="150"
              h="180"
              paddingTop="1"
              //   rounded="3xl"
              overflow="hidden"
              marginTop="3"
              _dark={{
                borderColor: "coolGray.900",
                backgroundColor: "gray.900",
              }}
              _web={{
                shadow: 2,
                borderWidth: 0,
              }}
              _light={{ backgroundColor: "transparent" }}
            >
              <Box h="130" w="150">
                <Avatar
                  bg="warmGray.500"
                  alignSelf="center"
                  size="2xl"
                  source={{
                    uri: item.imgCoach,
                  }}
                ></Avatar>
              </Box>
              <Box>
                <Heading textAlign="center">{item.name}</Heading>
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
});
