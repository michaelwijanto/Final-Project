import { ApolloClient, from, InMemoryCache } from "@apollo/client";

// Andre;
const client = new ApolloClient({
  uri: "http://192.168.1.2:4000",
  cache: new InMemoryCache(),
});

// Tondiki
// const client = new ApolloClient({
//   uri: "http://192.168.1.4:4000",
//   cache: new InMemoryCache(),
// });

// Arie
// const client = new ApolloClient({
//   uri: "http://192.168.1.7:4000",
//   cache: new InMemoryCache(),
// });

// Whisnu
// const client = new ApolloClient({
//   uri: "http://192.168.218.140:4000",
//   cache: new InMemoryCache(),
// });

export default client;
