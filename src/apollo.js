import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({
  uri: "https://viime-app.hasura.app/v1/graphql",
});

const wsLink = new WebSocketLink({
  uri: "wss://viime-app.hasura.app/v1/graphql", // switch to the wss protocol
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "lHDdDL41ni1zsqy3YSUd9c17aO0k74OZAenYFrddXJGBu4ghlIHHCPvtVKlkaLAQ",
      },
    },
  },
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-hasura-admin-secret":
        "lHDdDL41ni1zsqy3YSUd9c17aO0k74OZAenYFrddXJGBu4ghlIHHCPvtVKlkaLAQ",
    },
  };
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;
