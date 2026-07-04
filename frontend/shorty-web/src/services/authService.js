import api from "./api";

export async function login(loginRequest) {
  const response = await api.post("/auth/login", loginRequest);
  return response.data;
}

export async function register(registerRequest) {
  const response = await api.post("/auth/register", registerRequest);
  return response.data;
}