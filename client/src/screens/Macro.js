import React from "react";
import { useMutation } from "@apollo/client";
import { POST_MACRO } from "../../mutations/";
import { useState, useEffect } from "react";
import {
  FormControl,
  Button,
  Input,
  Stack,
  CheckIcon,
  WarningOutlineIcon,
  Box,
  Center,
  NativeBaseProvider,
  Select,
  Text,
} from "native-base";
export const Example = () => {
  const [postSignIn, { data, loading, error }] = useMutation(POST_MACRO);
  const [formMacro, setFormMacro] = useState({
    gender: "",
    age: 0,
    height: 0,
    weight: 0,
    activitylevel: 0,
    goal: 0,
  });
  useEffect(() => {
    console.log({data});
  }, [data])
  useEffect(() => {
    console.log(formMacro);
  }, [formMacro])
  const onSubmitMacro = () => {
    // e.preventDefault();
    console.log("SUBMIT");
    console.log({ formMacro });
    postSignIn({variables: {age: formMacro.age, gender: formMacro.gender, height: formMacro.height, weight: formMacro.weight, activitylevel: formMacro.activitylevel, goal: formMacro.goal}})
    .then((res) => {
      console.log({res});
    })
    .catch((err) => {
      console.log({err});
    })
  };
  if(data) return <Text>{JSON.stringify(data)}</Text>
  return (
    <Box
      w={{
        base: "90%",
        md: "25%",
      }}
    >
      <FormControl isRequired onSadmubmit={onSubmitMacro}>
        <Text style={{textAlign: "center", fontSize: 20, marginBottom: 10}}>
          calculate your daily food needs
        </Text>
        <Stack mx="4">
          <FormControl.Label>Gender</FormControl.Label>
          <Select
            name="gender"
            onValueChange={(itemValue) => setFormMacro({ ...formMacro, gender: itemValue })}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
          >
            <Select.Item label="Male" value="male" key={1} />
            <Select.Item label="Female" value="female" key={2} />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Gender required.
          </FormControl.ErrorMessage>
        </Stack>
        <Stack mx="4">
          <FormControl.Label>Age</FormControl.Label>
          <Input
            name="age"
            onChangeText={val => setFormMacro({ ...formMacro, age: val })}
            type="number"
            placeholder="Input your age..."
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Age required
          </FormControl.ErrorMessage>
        </Stack>
        
        <Stack mx="4">
          <FormControl.Label>Height</FormControl.Label>
          <Input
            name="height"
            onChangeText={val => setFormMacro({ ...formMacro, height: val })}
            type="number"
            placeholder="Input your gender..."
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Height required.
          </FormControl.ErrorMessage>
        </Stack>

        <Stack mx="4">
          <FormControl.Label>Weight</FormControl.Label>
          <Input
            name="weight"
            onChangeText={val => setFormMacro({ ...formMacro, weight: val })}
            type="number"
            placeholder="Input your weight..."
          />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Weight required.
          </FormControl.ErrorMessage>
        </Stack>
        <Stack mx="4">
          <FormControl.Label>Activity Level</FormControl.Label>
          <Select
            name="activitylevel"
            onValueChange={(itemValue) => setFormMacro({ ...formMacro, activitylevel: itemValue })}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
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
            <Select.Item label="Exercise 1-3 times/week" value={3} key={3} />
            <Select.Item label="Exercise 4-5 times/week" value={4} key={4} />
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
          <FormControl.HelperText>
            How much u train a week
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Activity Level required.
          </FormControl.ErrorMessage>
        </Stack>

        <Stack mx="4">
          <FormControl.Label>Goal</FormControl.Label>
          <Select
            name="goal"
            onValueChange={(itemValue) => setFormMacro({ ...formMacro, goal: itemValue })}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />,
            }}
          >
            <Select.Item
              label="maintain weight"
              value={1}
              key="maintain"
            />
            <Select.Item label="Mild weight loss" value="mildlose" key={2} />
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
            <Select.Item
              label="Weight gain"
              value="weightgain"
              key={6}
            />
            <Select.Item
              label="extremegain"
              value="Extreme weight gain"
              key={7}
            />
          </Select>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
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
          onPress={onSubmitMacro}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default function Macro() {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
}
