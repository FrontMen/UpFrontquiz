import { gql } from '@apollo/client';

export const join =  gql`
    mutation Join($name: String!) {
        join(name: $name) {
            id
            name
        }
    }
`;