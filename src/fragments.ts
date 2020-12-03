import { gql } from "@apollo/client";

export const RESTAURANT_FRAGMENT = gql`
  fragment RestaurantParts on Restaurant {
    id
    name
    coverImg
    category {
      name
    }
    address
    isPromoted
  }
`;

export const CATEGORY_FRAGMENT = gql`
  fragment CategoryParts on Category {
    id
    name
    coverImg
    slug
    restaurantCount
  }
`;

export const DISH_FRAGMENT = gql`
  fragment DishParts on Dish {
    id
    name
    price
    photo
    description
    options {
      name
      extra
      choices {
        name
        extra
      }
    }
  }
`;

export const ORDERS_FRAGMENT = gql`
  fragment OrderParts on Order {
    id
    createdAt
    total
  }
`;
