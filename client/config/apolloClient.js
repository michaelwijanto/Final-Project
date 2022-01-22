import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://192.168.43.228:4000/",
  cache: new InMemoryCache()
})

export default client;