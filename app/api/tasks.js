import api from "./server";

const endpoint = "/tasks";
const getTasks = async () => {
  const response = await api.get(endpoint);
  return response;
};

const getTask = async (id) => {
  const response = await api.get(endpoint + "/" + id);
  return response;
};

const postTask = async (data) => {
  const newData = new FormData();

  newData.append("name", data.name);
  newData.append("dueDate", data.dueDate);
  const response = await api.post(endpoint, newData);
  return response;
};
const deleteTask = async (id) => {
  const response = await api.delete(endpoint + "/" + id);
  return response;
};

export default {
  getTasks,
  getTask,
  postTask,
  deleteTask,
};
