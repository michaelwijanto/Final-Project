import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Apollo Client
import { useMutation } from "@apollo/client";
import { SUCCESS_PAYMENT } from "../../mutations";
import { GET_CONTENT_CARD } from "../../queries";

export default function PaymentWebview({ route, navigation }) {
  const { token } = route.params;
  const [accessToken, setAccessToken] = useState("");
  const [successPayment, { loading, data }] = useMutation(SUCCESS_PAYMENT, {
    refetchQueries: [GET_CONTENT_CARD],
  });

  useEffect(async () => {
    setAccessToken(await AsyncStorage.getItem("@access_token"));
  }, []);

  const handleWebViewNavigationStateChange = (newNavState) => {
    const { title } = newNavState;
    const getStatus = title.split("/");
    if (getStatus[6]) {
      const getCode = getStatus[6].split("&");
      if (getCode[1]) {
        const code = getCode[1]?.split("=")[1];
        if (+code === 200) {
          successPayment({
            variables: {
              accessToken,
            },
          })
            .then((res) => {
              navigation.navigate("Profile", {
                screen: "ProfileScreen",
                params: {
                  status: "successPayment",
                },
              });
            })
            .catch((err) => {
              console.error(err);
              navigation.navigate("Profile", {
                status: "failedPayment",
              });
            });
        } else {
          console.log("gagal bayar");
        }
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: `https://app.sandbox.midtrans.com/snap/v2/vtweb/${token}`,
        }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    </View>
  );
}
