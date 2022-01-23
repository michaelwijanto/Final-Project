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
import AppBar from "./NavBar/NavBarCoach";

import { useQuery } from "@apollo/client";
import { GET_COACH_DETAIL } from "../../queries";
// import ErrorPage from "../components/errorPage";
// import LoadingPage from "../components/loadingPage";

export default function CoachDetail({ navigation, route }) {
  const { id } = route.params;
  const { coachName } = route.params;
  const { loading, error, data } = useQuery(GET_COACH_DETAIL, {
    variables: {
      getCoachDetailId: id,
    },
  });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error...</Text>;
  return (
    <Box style={styles.container}>
      <AppBar navigation={navigation} coachName={coachName} />
      <Box style={styles.top}>
        <Image
          style={styles.imageBanner}
          source={{
            uri: data.getCoachDetail.imgCoach,
          }}
          alt="Alternate Text"
          // size="xl"
        />
        <Box style={styles.nameCoach}>
          <Heading>{data.getCoachDetail.name}</Heading>
          <Heading> Age : {data.getCoachDetail.age}</Heading>
        </Box>
        <Box style={styles.bioCoach}>
          <Text style={styles.textCoach}>{data.getCoachDetail.bio}</Text>
        </Box>
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
  top: {
    flex: 1,
  },
  imageBanner: {
    width: "100%",
    height: 250,
  },
  nameCoach: {
    marginTop: 15,
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 30,
  },
  bioCoach: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  textCoach: {
    textAlign: "justify",
    fontSize: 16,
  },
});
