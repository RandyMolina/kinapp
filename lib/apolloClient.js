import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://fresh-slug-93.hasura.app/v1/graphql", // e.g. https://www.myapi.com/api/v2
      headers: {
        "X-hasura-admin-secret": "09590959", // or any other values for the http request
        lang: "en",
      },
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
