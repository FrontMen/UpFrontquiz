import { gql } from '@apollo/client';

export const testTimer = gql`
    subscription testTimer {
        timer
    }
`;