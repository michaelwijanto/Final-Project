import { StyleSheet } from "react-native";
import { Box, Heading, Image, Text, Badge, HStack } from "native-base";

import { useQuery } from "@apollo/client";
import { GET_COACH_DETAIL } from "../../queries";
// import ErrorPage from "../components/errorPage";
import LoadingPage from "./LoadingPage";

export default function CoachDetail({ navigation, route }) {
  const { id } = route.params;
  const { coachName } = route.params;
  const { loading, error, data } = useQuery(GET_COACH_DETAIL, {
    variables: {
      getCoachDetailId: id,
    },
  });

  if (loading) return <LoadingPage />;
  if (error) return <Text>Error...</Text>;

  console.log(coachName);
  return (
    <Box style={styles.container}>
      <Box style={styles.top}>
        <Box>
          <Image
            style={styles.imageBanner}
            source={{
              uri: data.getCoachDetail.imgCoach,
            }}
            alt="Alternate Text"
            // size="xl"
          />
        </Box>
        <Box style={styles.nameCoach}>
          <Heading>{data.getCoachDetail.name}</Heading>
          <Heading size="md"> Age : {data.getCoachDetail.age}</Heading>
        </Box>
        ;
        <Box style={styles.bioCoach}>
          <HStack
            marginTop="-5"
            space={4}
            mx={{
              // base: "auto",
              md: 0,
            }}
          >
            <Badge
              colorScheme="success"
              _text={{
                fontSize: 14,
              }}
            >
              {data.getCoachDetail.bio}
            </Badge>
          </HStack>
          <Text style={styles.textCoach}>
            {data.getCoachDetail.description}
          </Text>

          {/* <Button
            w="100%"
            size="lg"
            colorScheme="gray"
            mt={10}
            onPress={() =>
              navigation.navigate("CoachChat", {
                coachName: coachName,
                coachImage: data.getCoachDetail.imgCoach,
                id: data.getCoachDetail.id,
              })
            }
          >
            Start Chat Now
          </Button> */}
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
    alignItems: "center",
  },
  bioCoach: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  titleBadge: {},
  textCoach: {
    textAlign: "justify",
    fontSize: 14,
    marginTop: 15,
    color: "gray",
  },
  chatButton: {
    position: "absolute",
    bottom: 100,
  },
});
