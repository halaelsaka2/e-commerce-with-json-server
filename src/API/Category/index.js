import axios from "axios";
let url = " http://localhost:3000/category";

const getAll = () => {
  return axios.get(`${url}`);
};
const getCategoryById = (id) => {
  return axios.get(`${url}/${id}`, { maxContentLength: 1000000 });
};
const exportedObject = { getAll, getCategoryById };

export default exportedObject;
