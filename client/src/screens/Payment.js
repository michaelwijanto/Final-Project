import React, { useEffect, useState } from "react";
import { CardField } from "@stripe/stripe-react-native";
import { View } from "react-native";
import { Text, Input, FormControl } from "native-base";

export default function Payment({ navigation }) {
  const [formCard, setFormCard] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
  });
  return (
    <View>
      <Text>using stripe</Text>
      <Input></Input>
      <FormControl>
        <FormControl.Label>Enter your Full Name</FormControl.Label>
        <Input
          name="fullName"
          placeholder="your full name"
          onChange={(e) => setFormCard({ ...formCard, fullname: e })}
        />
        <FormControl.Label>Enter your Address</FormControl.Label>
        <Input
          name="address"
          placeholder="your address"
          onChange={(e) => setFormCard({ ...formCard, address: e })}
        />
        <FormControl.Label>Enter your Phone Number</FormControl.Label>
        <Input
          name="phoneNumber"
          placeholder="your phone number"
          onChange={(e) => setFormCard({ ...formCard, phoneNumber: e })}
        />
      </FormControl>
      <CardField></CardField>
    </View>
  );
}
