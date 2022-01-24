import React, { Fragment } from "react";
import { useMutation } from "@apollo/client";
import { POST_USER_PROFILE } from "../../mutations";
import { useState, useEffect } from "react";
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
  Input,
  useToast,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "native-base";
import DatePicker from "react-native-datepicker";
export const Example = ({ navigation }) => {
  const toast = useToast();
  const [postUserProfile, { }] = useMutation(POST_USER_PROFILE);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState("phoneNumber");
  const [formUserProfile, setFormUserProfile] = useState({
    gender: "",
    height: 130,
    weight: 40,
    activitylevel: 1,
    goals: "",
    phoneNumber: "",
    dateBirth: new Date(),
  });

  const onSubmitUserProfile = async (e) => {
    try {
      e.preventDefault();
      console.log("SUBMIT");
      setLoading(true)
      console.log({ formUserProfile });
      const {
        activitylevel,
        dateBirth,
        gender,
        goals,
        height,
        phoneNumber,
        weight,
      } = formUserProfile;
      if (
        !activitylevel ||
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
          accessToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ0b25kaWtpQG1haWwuY29tIiwiZnVsbE5hbWUiOiJUb25kaWtpIiwicm9sZSI6ImFkbWluIiwiaXNSZWdpc3RlciI6ImZhbHNlIiwiaWF0IjoxNjQyOTk2NzIxfQ.P-US8REMzaHv0ueRhPgpMBQACIjkZi31BPwmyxyt3tc",
          phoneNumber: formUserProfile.phoneNumber,
          dateBirth: formUserProfile.dateBirth,
          gender: formUserProfile.gender,
          height: formUserProfile.height,
          weight: formUserProfile.weight,
          activityLevel: formUserProfile.activitylevel,
          goals: formUserProfile.goals,
        },
      });
      console.log("DI SINI");
      console.log({ sendUserProfile });
      toast.show({
        title: "Health Status",
        status: "success",
        description: sendUserProfile.data.postUserProfile.message,
        placement: "top",
      });
      setTimeout(() => {
        navigation.navigate("ContentContainer")
      }, 2000);
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
        setError("Error Post User Profile")
      }
    } finally {
      setLoading(false)
    }
  };
  if(loading) return <Text>Loading...</Text>
  if(error) return <Text>{error}</Text>
  return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
      <FormControl>
        {page === "phoneNumber" && (
          <Fragment>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              Input your phone number!
            </Text>
            <Stack mx="4">
              <Input
                defaultValue={formUserProfile.phoneNumber}
                type="text"
                keyboardType="numeric"
                name="phoneNumber"
                placeholder="input phone number..."
                onChangeText={(value) =>
                  setFormUserProfile({ ...formUserProfile, phoneNumber: value })
                }
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Phone Number required.
              </FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10 }}
              px="3"
              onPress={() => setPage("gender")}
            >
              Submit
            </Button>
          </Fragment>
        )}

        {page === "gender" && (
          <Fragment>
            <Text
              onPress={() => setPage("phoneNumber")}
              style={{ color: "red" }}
            >
              Back
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              What's your gender?
            </Text>
            <Stack mx="4">
              <Select
                defaultValue={formUserProfile.gender}
                isRequired={true}
                onValueChange={(itemValue) =>
                  setFormUserProfile({ ...formUserProfile, gender: itemValue })
                }
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose Gender"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
              >
                <Select.Item label="Male" value="male" key={1} />
                <Select.Item label="Female" value="female" key={2} />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Gender required.
              </FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10 }}
              px="3"
              onPress={() => setPage("dateBirth")}
            >
              Submit
            </Button>
          </Fragment>
        )}

        {page === "dateBirth" && (
          <Fragment>
            <Text onPress={() => setPage("gender")} style={{ color: "red" }}>
              Back
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              When's your birthday?
            </Text>
            <Stack mx="4">
              <DatePicker
                style={{ width: 300 }}
                date={formUserProfile.dateBirth}
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="1942-01-01"
                maxDate={new Date()}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => {
                  setFormUserProfile({ ...formUserProfile, dateBirth: date });
                }}
              />
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                dateBirth required
              </FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10 }}
              px="3"
              onPress={() => setPage("height")}
            >
              Submit
            </Button>
          </Fragment>
        )}

        {page === "height" && (
          <Fragment>
            <Text onPress={() => setPage("dateBirth")} style={{ color: "red" }}>
              Back
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              How tall are you?
            </Text>
            <Stack mx="4">
              <NumberInput
                defaultValue={formUserProfile.height}
                min={130}
                max={230}
                step={5}
                onChange={(val) =>
                  setFormUserProfile({ ...formUserProfile, height: val })
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormControl.HelperText>
                It cannot be smaller than 130 or bigger than 230 (cm).
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Height required.
              </FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10 }}
              px="3"
              onPress={() => setPage("weight")}
            >
              Submit
            </Button>
          </Fragment>
        )}

        {page === "weight" && (
          <Fragment>
            <Text onPress={() => setPage("height")} style={{ color: "red" }}>
              Back
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              How much do you weight?
            </Text>
            <Stack mx="4">
              <NumberInput
                defaultValue={formUserProfile.weight}
                min={40}
                max={160}
                onChange={(val) =>
                  setFormUserProfile({ ...formUserProfile, weight: val })
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormControl.HelperText>
                It cannot be smaller than 40 or bigger than 160 (kg).
              </FormControl.HelperText>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Weight required.
              </FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10 }}
              px="3"
              onPress={() => setPage("activitylevel")}
            >
              Submit
            </Button>
          </Fragment>
        )}

        {page === "activitylevel" && (
          <Fragment>
            <Text onPress={() => setPage("weight")} style={{ color: "red" }}>
              Back
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              How often do you exercise?
            </Text>
            <Stack mx="4">
              <Select
                onValueChange={(itemValue) =>
                  setFormUserProfile({
                    ...formUserProfile,
                    activitylevel: itemValue,
                  })
                }
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose activity level"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
              >
                <Select.Item label="BMR" value={1} key={1} />
                <Select.Item
                  label="Sedentary: little or no exercise"
                  value={2}
                  key={2}
                />
                <Select.Item
                  label="Exercise 1-3 times/week"
                  value={3}
                  key={3}
                />
                <Select.Item
                  label="Exercise 4-5 times/week"
                  value={4}
                  key={4}
                />
                <Select.Item
                  label="Daily exercise or intense exercise 3-4 times/week"
                  value={5}
                  key={5}
                />
                <Select.Item
                  label="Intense exercise 6-7 times/week"
                  value={6}
                  key={6}
                />
                <Select.Item
                  label="Very intense exercise daily, or physical job"
                  value={7}
                  key={7}
                />
              </Select>
              <FormControl.ErrorMessage
                leftIcon={<WarningOutlineIcon size="xs" />}
              >
                Activity Level required.
              </FormControl.ErrorMessage>
            </Stack>
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10 }}
              px="3"
              onPress={() => setPage("goals")}
            >
              Submit
            </Button>
          </Fragment>
        )}

        {page === "goals" && (
          <Fragment>
            <Text
              onPress={() => setPage("activitylevel")}
              style={{ color: "red" }}
            >
              Back
            </Text>
            <Text
              style={{ textAlign: "center", fontSize: 20, marginBottom: 10 }}
            >
              What's your goal?
            </Text>
            <Stack mx="4">
              <Select
                onValueChange={(itemValue) =>
                  setFormUserProfile({ ...formUserProfile, goals: itemValue })
                }
                minWidth="200"
                accessibilityLabel="Choose Service"
                placeholder="Choose goal"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size={5} />,
                }}
              >
                <Select.Item label="maintain weight" value={1} key="maintain" />
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
            <Button
              size="sm"
              variant={"solid"}
              _text={{
                color: "#1F2937",
              }}
              style={{ marginTop: 10 }}
              px="3"
              onPress={onSubmitUserProfile}
            >
              Submit
            </Button>
          </Fragment>
        )}
      </FormControl>
    </Box>
  );
};

export default function Macro({ navigation }) {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  );
}
