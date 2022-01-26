import { Spinner, HStack, Heading, Center } from "native-base";
import { StyleSheet } from "react-native";

export default function LoadingPage() {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" color="#1C2F3C" />
      <Heading color="#1C2F3C" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
}
