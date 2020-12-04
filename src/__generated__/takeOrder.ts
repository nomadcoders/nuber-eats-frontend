/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TakeOrderInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: takeOrder
// ====================================================

export interface takeOrder_takeOrder {
  __typename: "TakeOrderOutput";
  ok: boolean;
  error: string | null;
}

export interface takeOrder {
  takeOrder: takeOrder_takeOrder;
}

export interface takeOrderVariables {
  input: TakeOrderInput;
}
