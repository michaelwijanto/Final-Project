import React from "react";
import { useMutation } from "@apollo/client";
import { POST_USER_PROFILE } from "../../mutations";
import { useState } from "react";
import LoadingPage from "../components/LoadingPage";

import {
  FormControl,
  Button,
  Stack,
  CheckIcon,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Select,
  Text,
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";

export default function Goals({ navigation, route }) {
  const [postUserProfile, {}] = useMutation(POST_USER_PROFILE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { activityLevel, phoneNumber, gender, dateBirth, height, weight } =
    route.params.form;
  const [goals, setGoals] = useState("");

  const onSubmitUserProfile = async (e) => {
    try {
      e.preventDefault();
      console.log("SUBMIT");
      setLoading(true);
      console.log({
        GOALS: {
          accessToken: await AsyncStorage.getItem("@access_token"),
          phoneNumber,
          dateBirth,
          gender,
          height,
          weight,
          activityLevel,
          goals,
        },
      });
      if (
        !activityLevel ||
        !dateBirth ||
        !gender ||
        !goals ||
        !height ||
        !phoneNumber ||
        !weight
      )
        throw { name: "Bad request" };
      console.log("LOLOS");
      const sendUserProfile = await postUserProfile({
        variables: {
          accessToken: await AsyncStorage.getItem("@access_token"),
          phoneNumber,
          dateBirth,
          gender,
          height,
          weight,
          activityLevel,
          goals,
        },
      });
      console.log("DI SINI");
      console.log({ sendUserProfile });
      navigation.navigate("ContentContainer");
    } catch (err) {
      console.log({ err });
      if (err.name === "Bad request") {
        toast.show({
          title: "Failed",
          status: "error",
          description: "Please fill all the blank!",
          placement: "top",
        });
      } else {
        setError("Error Post User Profile");
      }
    } finally {
      setLoading(false);
    }
  };
  if (loading)
    return (
      <Center flex={1} px="3">
        <LoadingPage />
      </Center>
    );
  if (error) return <Text>{error}</Text>;
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box
          w={{
            base: "90%",
            md: "25%",
          }}
        >
          <FormControl>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              What's your goal?
            </Text>
            <Stack mx="4">
              <Select
                onValueChange={(itemValue) => setGoals(itemValue)}
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose goal"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
              >
                <Select.Item label="maintain weight" value="main" key={1} />
                <Select.Item
                  label="Mild weight loss"
                  value="mildlose"
                  key={2}
                />
                <Select.Item label="Weight loss" value="weightlose" key={3} />
                <Select.Item
                  label="Extreme weight loss"
                  value="extremelose"
                  key={4}
                />
                <Select.Item
                  label="Mild weight gain"
                  value="mildgain"
                  key={5}
                />
                <Select.Item label="Weight gain" value="weightgain" key={6} />
                <Select.Item
                  label="extremegain"
                  value="Extreme weight gain"
                  key={7}
                />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Goals required.
              </FormControl.ErrorMessage>
            </Stack>
            {goals ? (
              <Button
                size="sm"
                variant={"solid"}
                _text={{
                  color: "#1F2937",
                }}
                style={{ marginTop: 10, height: 50 }}
                px="3"
                onPress={onSubmitUserProfile}
              >
                Submit
              </Button>
            ) : (
              <Button
                size="sm"
                variant={"solid"}
                _text={{
                  color: "#1F2937",
                }}
                style={{ marginTop: 10, height: 50 }}
                colorScheme="gray"
                px="3"
              >
                <Entypo name="block" size={16} color="black" />
              </Button>
            )}
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
