import { StyleSheet, View, Pressable, FlatList } from "react-native";
import {
  Box,
  Heading,
  useColorMode,
  ChevronRightIcon,
  StatusBar,
  HStack,
  IconButton,
  Text,
} from "native-base";

export default function Home({ navigation }) {
    return (
        <Box style={styles.container}>
            <Heading>HOME</Heading>
        </Box>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});
