import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/halaelsaka2/json-server/",
});

export default axiosInstance;
