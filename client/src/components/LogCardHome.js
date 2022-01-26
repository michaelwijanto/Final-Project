import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { Box, Heading, AspectRatio, Image, Text, Stack, Badge } from "native-base";

import { useQuery } from "@apollo/client";
import { GET_LEVEL } from "../../queries";
// import ErrorPage from "../components/errorPage";
import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

export default function LogCard({ navigation }) {
  const { loading, error, data } = useQuery(GET_LEVEL);

  if (loading) return <LoadingPage></LoadingPage>;
  if (error) return <ErrorPage />;
  return (
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
      <Box h="100%" w="500">
        <AspectRatio>
          <Image
            h="240"
            w="400"
            marginLeft="-1"
            // maxW="100%"
            // borderColor="white"
            borderWidth="1"
            rounded="2xl"
            source={{
              uri: "https://ik.imagekit.io/ebq3r9zrvle/H8/Log_KLoBgTwtg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643142288583",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
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
