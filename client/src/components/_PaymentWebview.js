import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PaymentWebview({
  route
}) {
  const { token } = route.params
  
  const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- @TODO: replace SET_YOUR_CLIENT_KEY_HERE with your client key -->
      <script type="text/javascript"
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key="SB-Mid-client-GEuExpLBwDT34fdI"></script>
      <!-- Note: replace with src="https://app.midtrans.com/snap/snap.js" for Production environment -->
    </head>
    <style>
    </style>
    <body>
    
      <button id="pay-button">Pay!</button>
  
      <script type="text/javascript">
        // For example trigger on button clicked, or any time you need
        var payButton = document.getElementById('pay-button');
        payButton.addEventListener('click', function () {
          // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
          window.snap.pay('${token}');
          // customer will be redirected after completing payment pop-up
        });
      </script>
    </body>
  </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ html }}
        onMessage={(event) => {
          alert(event.nativeEvent.data);
        }}
      />
    </View>
  )
}
