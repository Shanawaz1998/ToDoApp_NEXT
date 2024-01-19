import { httpAxios } from "@/helper/httpAxios";
import { httpAgentOptions } from "../../next.config";

export const addUsers = async (user) => {
  const result = await httpAxios
    .post("/api/user", user)
    .then((response) => response.data);
  return result;
};

export const loginUser = async (loginData) => {
  const result = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return result;
};

export const currentUser = async () => {
  const result = await httpAxios
    .get("/api/current")
    .then((response) => response.data);
  return result;
};

export const logout = async () => {
  const result = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return result;
};
