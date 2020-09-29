import { create } from "apisauce";

const api = create({
  baseURL: "http://192.168.1.96:3000/api",
});

export default api;
