import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "/api/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
