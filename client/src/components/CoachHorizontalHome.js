import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Stack,
  ChevronRightIcon,
  Avatar,
} from "native-base";

// import { useQuery } from "@apollo/client";
// import { GET_COACHES } from "../../queries";
// import ErrorPage from "../components/errorPage";
// import LoadingPage from "../components/loadingPage";

export default function CoachHorizontal({ navigation }) {
  const array = [
    {
      id: 1,
      nama: "Tondiki",
      imgUrl:
        "https://factsbio.com/wp-content/uploads/2021/06/0EF77481-3A80-4CF3-AADA-28DC9DF14539.jpg",
    },
    {
      id: 2,
      nama: "Arie",
      imgUrl:
        "https://factsbio.com/wp-content/uploads/2021/06/0EF77481-3A80-4CF3-AADA-28DC9DF14539.jpg",
    },
    {
      id: 3,
      nama: "Wisnu",
      imgUrl:
        "https://factsbio.com/wp-content/uploads/2021/06/0EF77481-3A80-4CF3-AADA-28DC9DF14539.jpg",
    },
    {
      id: 4,
      nama: "Michael",
      imgUrl:
        "https://factsbio.com/wp-content/uploads/2021/06/0EF77481-3A80-4CF3-AADA-28DC9DF14539.jpg",
    },
    {
      id: 5,
      nama: "Andre",
      imgUrl:
        "https://factsbio.com/wp-content/uploads/2021/06/0EF77481-3A80-4CF3-AADA-28DC9DF14539.jpg",
    },
  ];
    // const { loading, error, data } = useQuery(GET_COACHES);

    // console.log(data);
  //   if (loading) return <LoadingPage></LoadingPage>;
  //   if (error) return <ErrorPage></ErrorPage>;
  return (
    <FlatList
      horizontal
      data={array}
      renderItem={({ item }) => {
        return (
          <Pressable
          // onPress={() =>
          //   navigation.navigate("ResultGenre", {
          //     categoryName: item.name,
          //   })
          // }
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
                  bg="purple.600"
                  alignSelf="center"
                  size="2xl"
                  source={{
                    uri: item.imgUrl,
                  }}
                ></Avatar>
              </Box>
              <Box>
                <Heading textAlign="center">{item.nama}</Heading>
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
