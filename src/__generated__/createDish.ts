/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateDishInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createDish
// ====================================================

export interface createDish_createDish {
  __typename: "CreateDishOutput";
  ok: boolean;
  error: string | null;
}

export interface createDish {
  createDish: createDish_createDish;
}

export interface createDishVariables {
  input: CreateDishInput;
}
