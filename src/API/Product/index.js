import axios from "axios";

const getAll = () => {
  return axios.get(`http://localhost:3000/products?_page=${1}`, { maxContentLength: 1000000 });
};

const getProductById = (id) => {
  return axios.get(`http://localhost:3000/products/${id}`, { maxContentLength: 1000000 });
};

const getProductsByfilters = async (category, color, priceRange, size, types, currentPage) => {
  let Url = `http://localhost:3000/products?_page=${currentPage}&`;
  if (color) {
    Url = Url + `colors_like=${color}&`;
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
  return await axios.get(Url, { maxContentLength: 1000000 });
};
const exportedObject = { getAll, getProductById, getProductsByfilters };

export default exportedObject;
