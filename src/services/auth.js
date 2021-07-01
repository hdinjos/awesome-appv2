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

export const register = async (payload) => {
  if (!payload.username) throw Error("username cannot be empty!");
  if (!payload.password) throw Error("password cannot be empty!");
  if (payload.password.length <= 5)
    throw Error("password minimal 6 character!");
  if (!payload.confirmPassword)
    throw Error("confirm password cannot be empty!");
  if (payload.password !== payload.confirmPassword)
    throw Error("password and confirm password not same!");
  const newPayload = {
    username: payload.username,
    password: payload.password,
  };
  const res = await api.post("auth/register", newPayload);
  return res.data;
};
