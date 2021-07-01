import api from "./config";

export const login = async (payload) => {
  if (!payload.username) throw Error("username cannot be empty!");
  if (!payload.password) throw Error("password cannot be empty!");
  const res = await api.post("auth/login", payload);
  return res.data;
};

export const getUserInfo = async (token) => {
  const headers = {
    "x-access-token": token,
  };
  const res = await api.get("auth/check", { headers });
  return res.data;
};
