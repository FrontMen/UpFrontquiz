import * as ws from 'ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const GRAPHQL_HOST = '95.211.247.249:3000';
// const GRAPHQL_HOST = '127.0.0.1:8080';

const httpLink = new HttpLink({
  uri: `http://${GRAPHQL_HOST}/graphql`,
});

const wsLink = new WebSocketLink({
  uri: `ws://${GRAPHQL_HOST}/graphql`,
  options: {
    reconnect: true,
  },
  webSocketImpl: typeof window === 'undefined' ? ws : undefined,
});

export const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);
