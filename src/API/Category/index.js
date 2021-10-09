import axiosInstance from "../axiosInstance";
let url = "/category";
const getAll = () => {
  return axiosInstance.get(`${url}`);
};
const getCategoryById = (id) => {
  return axiosInstance.get(`${url}/${id}`, { maxContentLength: 1000000 });
};
const exportedObject = { getAll, getCategoryById };

export default exportedObject;
