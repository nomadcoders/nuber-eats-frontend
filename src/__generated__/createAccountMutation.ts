/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateAccountInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createAccountMutation
// ====================================================

export interface createAccountMutation_createAccount {
  __typename: "CreateAccountOutput";
  ok: boolean;
  error: string | null;
}

export interface createAccountMutation {
  createAccount: createAccountMutation_createAccount;
}

export interface createAccountMutationVariables {
  createAccountInput: CreateAccountInput;
}
