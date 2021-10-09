import axios from "axios";
let url = " http://localhost:3000/category";

const getAll = () => {
  return axios.get(`${url}`);
};
const getCategoryById = (id) => {
  return axios.get(`${url}/${id}`);
};
const exportedObject = { getAll, getCategoryById };

export default exportedObject;
