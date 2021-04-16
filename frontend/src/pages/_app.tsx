import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { splitLink } from './apolloClient'

import '~/styles/globals.css';

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
