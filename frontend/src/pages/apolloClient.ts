import * as ws from 'ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
  uri: 'http://95.211.247.249:3000/graphql',
});

const wsLink = new WebSocketLink({
  uri: 'ws://95.211.247.249:3000/subscriptions',
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
