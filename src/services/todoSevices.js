import { httpAxios } from "@/helper/httpAxios";

export const addTask = async (task) => {
  const result = await httpAxios
    .post("/api/todos", task)
    .then((response) => response.data);
  return result;
};

export const getTaskOfUser = async (userId) => {
  const result = await httpAxios
    .get(`/api/user/${userId}/tasks`)
    .then((response) => response.data);
  return result;
};

export const deleteTask = async (taskId) => {
  const result = await httpAxios
    .delete("/api/todos/" + taskId)
    .then((response) => response.data);
  return result;
};
