import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PaymentWebview({
  route
}) {
  const { token } = route.params

  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState
    console.log(url);
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: `https://app.sandbox.midtrans.com/snap/v2/vtweb/${token}`,
        }}
        onNavigationStateChange={handleWebViewNavigationStateChange}
      />
    </View>
  )
}
