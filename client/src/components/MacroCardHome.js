import { StyleSheet } from "react-native";
import { Box, AspectRatio, Image } from "native-base";

export default function MacroCard({ navigation }) {
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
            h="210"
            w="400"
            marginLeft="-2"
            // maxW="100%"
            // borderColor="white"
            borderWidth="1"
            rounded="2xl"
            source={{
              uri: "https://ik.imagekit.io/ebq3r9zrvle/H8/20944767_RhbrcTRbpSN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1643142686515",
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
