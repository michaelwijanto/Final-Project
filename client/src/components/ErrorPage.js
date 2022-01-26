import { VStack, HStack, Heading, Text } from "native-base";
import { EvilIcons } from "@expo/vector-icons";

export default function ErrorPage() {
  return (
    <HStack space={2} justifyContent="center" alignItems="center">
      <EvilIcons name="exclamation" size={30} color="red" />
      <VStack>
        <Heading color="red.600" fontSize="md">
          Error
        </Heading>
        <Text color="red.500">Cannot fetch to server</Text>
      </VStack>
    </HStack>
  );
}
