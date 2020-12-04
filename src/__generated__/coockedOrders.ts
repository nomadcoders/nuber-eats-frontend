/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { OrderStatus } from "./globalTypes";

// ====================================================
// GraphQL subscription operation: coockedOrders
// ====================================================

export interface coockedOrders_cookedOrders_driver {
  __typename: "User";
  email: string;
}

export interface coockedOrders_cookedOrders_customer {
  __typename: "User";
  email: string;
}

export interface coockedOrders_cookedOrders_restaurant {
  __typename: "Restaurant";
  name: string;
}

export interface coockedOrders_cookedOrders {
  __typename: "Order";
  id: number;
  status: OrderStatus;
  total: number | null;
  driver: coockedOrders_cookedOrders_driver | null;
  customer: coockedOrders_cookedOrders_customer | null;
  restaurant: coockedOrders_cookedOrders_restaurant | null;
}

export interface coockedOrders {
  cookedOrders: coockedOrders_cookedOrders;
}
