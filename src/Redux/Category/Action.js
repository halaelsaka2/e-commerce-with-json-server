import * as types from "../types";
import CategoryService from "../../API/Category";

function getAllSuccess(data) {
  return { type: types.GET_ALL_CATEGORIES, data };
}

function getCategoryByIdSuccess(data) {
  return { type: types.GET_CATEGORY_BY_ID, data };
}
export function getAll() {
  return async function (dispatch) {
    const categoryData = await CategoryService.getAll();
    dispatch(getAllSuccess(categoryData.data));
  };
}

export function getCategoryById(id) {
  return async function (dispatch) {
    const categoryData = await CategoryService.getCategoryById(id);
    dispatch(getCategoryByIdSuccess(categoryData.data));
  };
}
export function saveCategoryId(id) {
  return { type: types.SAVE_CATEGORY_ID, data: id };
}
