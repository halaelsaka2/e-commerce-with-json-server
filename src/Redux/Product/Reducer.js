import * as types from "../types";
import initialState from "../initialState";

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProductsWithFilter: action.data.products,
        productsCount: action.data.count,
      };
    case types.GET_PRODUCT_BY_ID:
      return {
        ...state,
        productById: action.data,
      };

    case types.FILTER_PRODUCTS:
      return {
        ...state,
        allProductsWithFilter: action.data.products,
        productsCount: action.data.count,
      };
    case types.SAVE_COLORS:
      return {
        ...state,
        currentColor: action.data,
      };
    case types.SAVE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.data,
      };
    case types.SAVE_PRICE_RANGE:
      return {
        ...state,
        currentPriceRange: action.data,
      };
    case types.SAVE_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.data,
      };
    case types.SAVE_SORT_VALUE:
      return {
        ...state,
        sortValue: action.data,
      };

    case types.REMOVE_PRODUCT:
      return {
        ...state,
        productById: action.data,
      };
    default:
      return state;
  }
}
