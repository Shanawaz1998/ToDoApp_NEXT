import { httpAxios } from "@/helper/httpAxios";

export const addTask = async (task) => {
  const result = await httpAxios
    .post("/api/todos", task)
    .then((response) => response.data);
  return result;
};
