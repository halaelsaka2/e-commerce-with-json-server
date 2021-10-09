import * as types from "../types";
import ProductService from "../../API/Product";

function getAllSuccess(data) {
  return { type: types.GET_ALL_PRODUCTS, data };
}
function getProductByIdSuccess(data) {
  return { type: types.GET_PRODUCT_BY_ID, data };
}
function getProductsByfiltersSuccess(data) {
  return { type: types.FILTER_PRODUCTS, data };
}

export function getAll() {
  return async function (dispatch) {
    const productData = await ProductService.getAll();
    console.log(productData);
    dispatch(getAllSuccess({ products: productData.data, count: productData.headers["x-total-count"] }));
  };
}

export function getProductById(id) {
  return async function (dispatch) {
    const productData = await ProductService.getProductById(id);
    dispatch(getProductByIdSuccess(productData.data));
  };
}

export function getProductsByfilters(category, colors, priceRange, size, types, page) {
  return async function (dispatch) {
    const allProductWithFilter = await ProductService.getProductsByfilters(
      category,
      colors,
      priceRange,
      size,
      types,
      page
    );

    dispatch(
      getProductsByfiltersSuccess({
        products: allProductWithFilter.data,
        count: allProductWithFilter.headers["x-total-count"],
      })
    );
  };
}

export function savePriceRange(priceRange) {
  return { type: types.SAVE_PRICE_RANGE, data: priceRange };
}

export function saveColor(colors) {
  return { type: types.SAVE_COLORS, data: colors };
}

export function saveCurrentPage(id) {
  return { type: types.SAVE_CURRENT_PAGE, data: id };
}

export function saveSize(id) {
  return { type: types.SAVE_SIZE, data: id };
}
export function saveProductType(id) {
  return { type: types.SAVE_PRODUCT_TYPE, data: id };
}
