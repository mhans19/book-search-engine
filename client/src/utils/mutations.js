// DEPENDENCIES
import gql from 'graphql-tag';
// LOGIN_USER MUTATION
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
// ADD_USER MUTATION
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;
// SAVE_BOOK MUTATION
export const SAVE_BOOK = gql`

`;
// REMOVE_BOOK MUTATION
export const REMOVE_BOOK = gql`

`;




