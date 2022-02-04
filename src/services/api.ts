import axios from "axios";


const api = axios.create({
    baseURL: "https://ontime.sinclog.com.br/",
  });
  
export default api;