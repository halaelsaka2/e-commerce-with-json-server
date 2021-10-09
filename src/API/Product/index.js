import axiosInstance from "../axiosInstance";
let url = "/products";
const getAll = () => {
  return axiosInstance.get(`${url}?_page=${1}`, { maxContentLength: 1000000 });
};

const getProductById = (id) => {
  return axiosInstance.get(`${url}/${id}`, { maxContentLength: 1000000 });
};

const getProductsByfilters = async (category, color, priceRange, size, types, currentPage, limit, sort) => {
  let Url = `${url}?_page=${currentPage}&`;
  if (color) {
    Url = Url + `colors_like=${color}&`;
  }
  if (limit) {
    Url = Url + `_limit=${limit}&`;
  }
  if (sort) {
    Url = sort === "new" ? Url + `_sort=status&_order=asc&` : Url + `_sort=status&_order=desc&`;
  }
  if (size) {
    Url = Url + `sizes_like=${size}&`;
  }
  if (types.length > 0) {
    const mappedTypes = types.map((type) => `type=${type}`).join("&");
    Url = Url + `${mappedTypes}&`;
  }

  if (priceRange.length > 0) {
    let startRange = priceRange[0];
    let endRange = priceRange[1];
    Url = Url + `price_gte=${startRange}&price_lte=${endRange}&`;
  }
  if (category) {
    Url = Url + `categoryId=${category}&`;
  }
  console.log(Url);
  return await axiosInstance.get(Url, { maxContentLength: 1000000 });
};
const exportedObject = { getAll, getProductById, getProductsByfilters };

export default exportedObject;
