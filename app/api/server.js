import { create } from "apisauce";

const api = create({
  baseURL: "http://192.168.0.30:3000/api",
});

export default api;
