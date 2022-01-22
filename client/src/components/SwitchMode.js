import React, { useState } from "react";
import { useColorMode, Switch, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

function SwitchMode() {
  const { toggleColorMode } = useColorMode();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    toggleColorMode();
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#fca5a5", true: "#F7DAD9" }}
        thumbColor={isEnabled ? "#87A8A4" : "#F6E6E4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Ionicons style={styles.logo} name="moon" size={24} color="#7B6079" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  logo: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
  },
});

export default SwitchMode;
