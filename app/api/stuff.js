import api from "./server";

const endpoint = "/stuff";
const getStuff = async () => {
  const response = await api.get(endpoint);
  return response;
};

export default {
  getStuff,
};
