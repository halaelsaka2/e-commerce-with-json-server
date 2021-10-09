import * as types from "../types";
import initialState from "../initialState";

export default function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.data,
      };
    case types.SAVE_CATEGORY_ID:
      return {
        ...state,
        currentCategory: action.data,
      };
    case types.GET_CATEGORY_BY_ID:
      return {
        ...state,
        categoryById: action.data,
      };
    default:
      return state;
  }
}
