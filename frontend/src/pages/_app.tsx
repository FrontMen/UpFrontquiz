import '~/styles/globals.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client/react';

const client = new ApolloClient({ uri: 'http://95.211.247.249:3000/graphql', cache: new InMemoryCache() });

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
