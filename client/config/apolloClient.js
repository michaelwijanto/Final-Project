import { ApolloClient, from, InMemoryCache } from "@apollo/client";

// Tondiki
const client = new ApolloClient({
  uri: "http://192.168.8.104:4000/",
  cache: new InMemoryCache(),
});

//Andre
// const client = new ApolloClient({
//   uri: "http://192.168.1.1:4000/",
//   cache: new InMemoryCache(),
// });

// Arie
// const client = new ApolloClient({
//   uri: "http://192.168.1.7:4000/",
//   cache: new InMemoryCache(),
// });

// Whisnu
// const client = new ApolloClient({
//   uri: "http://192.168.218.140:4000",
//   cache: new InMemoryCache(),
// });
// Michael
// const client = new ApolloClient({
//   uri: "http://192.168.1.4:4000",
//   cache: new InMemoryCache(),
// });

// const client = new ApolloClient({
//   uri: "https://rome-service-orchestrator.herokuapp.com",
//   cache: new InMemoryCache(),
// });

//

export default client;
