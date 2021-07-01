import api from "./config";

export const listUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "x-access-token": token,
    };
    const res = await api.get("user/list", { headers });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const assignToAdmin = async (username) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      "x-access-token": token,
    };
    await api.post(`user/assign-admin/${username}`, {}, { headers });
  } catch (err) {
    console.log(err);
  }
};
