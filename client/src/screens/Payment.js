import React, { useEffect } from "react";
import { initStripe } from "@stripe/stripe-react-native";
import { Text, View } from "react-native";
import { Box } from "native-base";

export default function Payment({ navigation }) {
  return (
    <View>
      <Text>using stripe</Text>
    </View>
  );
}
