import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  join?: Maybe<User>;
  startQuiz?: Maybe<Scalars['Boolean']>;
  answerQuestion?: Maybe<Scalars['Boolean']>;
  reset?: Maybe<Scalars['Boolean']>;
};


export type MutationJoinArgs = {
  name: Scalars['String'];
};


export type MutationAnswerQuestionArgs = {
  userId?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  users: Array<Maybe<User>>;
};

export type Question = {
  __typename?: 'Question';
  question: Scalars['String'];
};

export type Quiz = {
  __typename?: 'Quiz';
  id: Scalars['String'];
  active: Scalars['Boolean'];
  currentQuestion?: Maybe<Scalars['Int']>;
  questions: Array<Maybe<Question>>;
};

export type Results = {
  __typename?: 'Results';
  quizId: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  timer?: Maybe<Scalars['Int']>;
  quiz?: Maybe<Quiz>;
  users?: Maybe<UserState>;
};


export type SubscriptionUsersArgs = {
  userId?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  timeLeft: Scalars['Int'];
  active: Scalars['Boolean'];
};

export type UserState = {
  __typename?: 'UserState';
  player1?: Maybe<User>;
  player2?: Maybe<User>;
};

export type JoinMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type JoinMutation = (
  { __typename?: 'Mutation' }
  & { join?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export type AnswerQuestionMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type AnswerQuestionMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'answerQuestion'>
);

export type TestTimerSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type TestTimerSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Subscription, 'timer'>
);

export type GetUsersSubscriptionVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUsersSubscription = (
  { __typename?: 'Subscription' }
  & { users?: Maybe<(
    { __typename?: 'UserState' }
    & { player1?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'timeLeft' | 'active'>
    )>, player2?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'timeLeft' | 'active'>
    )> }
  )> }
);

export type GetQuizSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type GetQuizSubscription = (
  { __typename?: 'Subscription' }
  & { quiz?: Maybe<(
    { __typename?: 'Quiz' }
    & Pick<Quiz, 'id' | 'active' | 'currentQuestion'>
    & { questions: Array<Maybe<(
      { __typename?: 'Question' }
      & Pick<Question, 'question'>
    )>> }
  )> }
);


export const JoinDocument = gql`
    mutation Join($name: String!) {
  join(name: $name) {
    id
    name
  }
}
    `;
export type JoinMutationFn = Apollo.MutationFunction<JoinMutation, JoinMutationVariables>;

/**
 * __useJoinMutation__
 *
 * To run a mutation, you first call `useJoinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinMutation, { data, loading, error }] = useJoinMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useJoinMutation(baseOptions?: Apollo.MutationHookOptions<JoinMutation, JoinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinMutation, JoinMutationVariables>(JoinDocument, options);
      }
export type JoinMutationHookResult = ReturnType<typeof useJoinMutation>;
export type JoinMutationResult = Apollo.MutationResult<JoinMutation>;
export type JoinMutationOptions = Apollo.BaseMutationOptions<JoinMutation, JoinMutationVariables>;
export const AnswerQuestionDocument = gql`
    mutation answerQuestion($userId: String!) {
  answerQuestion(userId: $userId)
}
    `;
export type AnswerQuestionMutationFn = Apollo.MutationFunction<AnswerQuestionMutation, AnswerQuestionMutationVariables>;

/**
 * __useAnswerQuestionMutation__
 *
 * To run a mutation, you first call `useAnswerQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnswerQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [answerQuestionMutation, { data, loading, error }] = useAnswerQuestionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAnswerQuestionMutation(baseOptions?: Apollo.MutationHookOptions<AnswerQuestionMutation, AnswerQuestionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnswerQuestionMutation, AnswerQuestionMutationVariables>(AnswerQuestionDocument, options);
      }
export type AnswerQuestionMutationHookResult = ReturnType<typeof useAnswerQuestionMutation>;
export type AnswerQuestionMutationResult = Apollo.MutationResult<AnswerQuestionMutation>;
export type AnswerQuestionMutationOptions = Apollo.BaseMutationOptions<AnswerQuestionMutation, AnswerQuestionMutationVariables>;
export const TestTimerDocument = gql`
    subscription testTimer {
  timer
}
    `;

/**
 * __useTestTimerSubscription__
 *
 * To run a query within a React component, call `useTestTimerSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTestTimerSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestTimerSubscription({
 *   variables: {
 *   },
 * });
 */
export function useTestTimerSubscription(baseOptions?: Apollo.SubscriptionHookOptions<TestTimerSubscription, TestTimerSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TestTimerSubscription, TestTimerSubscriptionVariables>(TestTimerDocument, options);
      }
export type TestTimerSubscriptionHookResult = ReturnType<typeof useTestTimerSubscription>;
export type TestTimerSubscriptionResult = Apollo.SubscriptionResult<TestTimerSubscription>;
export const GetUsersDocument = gql`
    subscription getUsers($userId: String!) {
  users(userId: $userId) {
    player1 {
      id
      name
      timeLeft
      active
    }
    player2 {
      id
      name
      timeLeft
      active
    }
  }
}
    `;

/**
 * __useGetUsersSubscription__
 *
 * To run a query within a React component, call `useGetUsersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersSubscription({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUsersSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetUsersSubscription, GetUsersSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetUsersSubscription, GetUsersSubscriptionVariables>(GetUsersDocument, options);
      }
export type GetUsersSubscriptionHookResult = ReturnType<typeof useGetUsersSubscription>;
export type GetUsersSubscriptionResult = Apollo.SubscriptionResult<GetUsersSubscription>;
export const GetQuizDocument = gql`
    subscription getQuiz {
  quiz {
    id
    active
    currentQuestion
    questions {
      question
    }
  }
}
    `;

/**
 * __useGetQuizSubscription__
 *
 * To run a query within a React component, call `useGetQuizSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetQuizSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuizSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetQuizSubscription(baseOptions?: Apollo.SubscriptionHookOptions<GetQuizSubscription, GetQuizSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetQuizSubscription, GetQuizSubscriptionVariables>(GetQuizDocument, options);
      }
export type GetQuizSubscriptionHookResult = ReturnType<typeof useGetQuizSubscription>;
export type GetQuizSubscriptionResult = Apollo.SubscriptionResult<GetQuizSubscription>;