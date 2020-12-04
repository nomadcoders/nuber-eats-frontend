/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EditOrderInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: editOrder
// ====================================================

export interface editOrder_editOrder {
  __typename: "EditOrderOutput";
  ok: boolean;
  error: string | null;
}

export interface editOrder {
  editOrder: editOrder_editOrder;
}

export interface editOrderVariables {
  input: EditOrderInput;
}
