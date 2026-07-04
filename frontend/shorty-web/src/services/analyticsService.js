import api from "./api";

export const getAnalytics = async (shortCode) => {
  const { data } = await api.get(`/analytics/${shortCode}`);
  return data;
};