import { ApolloClient, from, InMemoryCache } from "@apollo/client";

// Andre;
const client = new ApolloClient({
  uri: "http://192.168.1.4:4000",
  cache: new InMemoryCache(),
});

// Tondiki
// const client = new ApolloClient({
//   uri: "http://192.168.8.104:4000/",
//   cache: new InMemoryCache(),
// });

// Arie
// const client = new ApolloClient({
//   uri: "http://192.168.1.7:4000/",//indihome
//   // uri: "http://192.168.47.124:4000/",//telkomsel
//   cache: new InMemoryCache(),
// });

// Arie
// const client = new ApolloClient({
//   uri: "http://192.168.1.7:4000/",//indihome
//   // uri: "http://192.168.47.124:4000/",//telkomsel
//   cache: new InMemoryCache(),
// });

// Whisnu
// const client = new ApolloClient({
//   uri: "http://10.237.124.193:4000",
//   cache: new InMemoryCache(),
// })

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
