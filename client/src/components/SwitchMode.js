import React, { useState } from "react";
import { useColorMode, Switch, View } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
        trackColor={{ 
          false: "#3e3e3e", // toggle to dark
          true: "#ffffff" // toggle to light
        }}
        thumbColor={ !isEnabled ? "#FFF" : "#3e3e3e" }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      {
        !isEnabled ? (
          <Ionicons style={styles.logo} name="moon" size={24} color="#3e3e3e" />
        ) : (
          <MaterialCommunityIcons style={styles.logo} name="white-balance-sunny" size={24} color="#EEF9BF" />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  logo: {
    marginTop: 10,
    marginLeft: 0,
    marginRight: 10,
  },
});

export default SwitchMode;
