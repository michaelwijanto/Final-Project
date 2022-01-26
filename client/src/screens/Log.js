import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Button,
  Modal,
  FormControl,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "native-base";
import { GET_USER_LOGS } from "../../queries";
import { useQuery, useMutation } from "@apollo/client";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { POST_USER_LOG } from "../../mutations";
export default function Log({ navigation }) {
  const toast = useToast();
  const [customNotif, setCustomNotif] = useState({
    customLoading: false,
    customError: null,
  });
  const [showModal, setShowModal] = useState(false);
  const [formLog, setFormLog] = useState({
    height: 0,
    weight: 0,
  });
  const [accessToken, setAccessToken] = useState(null);
  useEffect(async () => {
    setAccessToken(await AsyncStorage.getItem("@access_token"));
  }, []);
  console.log({ accessToken });
  const { loading, data, error } = useQuery(GET_USER_LOGS, {
    variables: {
      accessToken: accessToken,
    },
  });
  console.log({ loading, data, error });
  const [postUserLog, {}] = useMutation(POST_USER_LOG, {
    refetchQueries: [GET_USER_LOGS],
  });
  const onSubmitLog = async (e) => {
    try {
      e.preventDefault();
      setCustomNotif({ ...customNotif, customLoading: true });
      console.log({ formLog });
      const createLog = await postUserLog({
        variables: {
          accessToken,
          height: formLog.height,
          weight: formLog.weight,
        },
      });
      console.log({ createLog });
      toast.show({
        title: "Success update body Log",
        status: "success",
        description: createLog.data.postUserLog.message[0],
      });
    } catch (err) {
      console.log({ err });
      setCustomNotif({ ...customNotif, customError: err });
    } finally {
      setCustomNotif({ ...customNotif, customLoading: false });
      setShowModal(false);
    }
  };

  if (loading || customNotif.customLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error Fetching Logs</Text>;
  if (customNotif.customError) return <Text>Error Add Log</Text>;
  return (
    <Box
      flex={1}
      w={{
        base: "100%",
        md: "25%",
      }}
    >
      <FlatList
        data={data.getUserLogs}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
            style={{ marginLeft: 10 }}
          >
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Box style={{ flexDirection: "row" }}>
                <FontAwesome5 name="heartbeat" size={24} color="#DA1212" />
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                    style={{ marginLeft: 5, color: "grey", fontSize: 16 }}
                  >
                    {item.health}
                  </Text>
                </Box>
                <Box style={{ flexDirection: "row", marginTop: 5 }}>
                <FontAwesome name="dashboard" size={24} color="blue" />
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                    style={{ marginLeft: 5, color: "grey", fontSize: 16 }}
                  >
                    {item.bmi}
                  </Text>
                </Box>
              </VStack>
              <VStack>
                <Box style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                    style={{ marginRight: 2, color: "grey", fontSize: 16 }}
                  >
                    {item.height}
                  </Text>
                  <MaterialCommunityIcons
                    name="human-male-height"
                    size={24}
                    color="blue"
                  />
                </Box>
                <Box style={{ flexDirection: "row", marginTop: 5 }}>
                  <Text
                    _dark={{
                      color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    bold
                    style={{ marginRight: 2, color: "grey", fontSize: 16 }}
                  >
                    {item.weight}
                  </Text>
                  <MaterialCommunityIcons
                    name="weight-kilogram"
                    size={24}
                    color="blue"
                  />
                </Box>
              </VStack>
            </HStack>
            <Spacer />
            <Text
              fontSize="xs"
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              alignSelf="center"
            >
              {item.createdAt.split("").slice(0, 10).join("")}
            </Text>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      <Box style={{ position: "absolute", bottom: 15, alignSelf: "center" }}>
        <Button colorScheme="lightBlue" onPress={() => setShowModal(true)}>
          <MaterialIcons name="add" size={24} color="white" />
        </Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Update your body development!</Modal.Header>
            <Modal.Body>
              <FormControl.Label>Height</FormControl.Label>
              <NumberInput
                min={130}
                max={230}
                onChange={(val) => setFormLog({ ...formLog, height: val })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormControl.Label>Weight</FormControl.Label>
              <NumberInput
                min={40}
                max={160}
                onChange={(val) => setFormLog({ ...formLog, weight: val })}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button onPress={onSubmitLog}>Save</Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Box>
    </Box>
  );
}

// export default function Log() {
//   return (
//     <NativeBaseProvider>
//       <Center px="3">
//         <Example flex={1} />
//       </Center>
//     </NativeBaseProvider>
//   );
// }
