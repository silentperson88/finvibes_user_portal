import { API_BASE_URL } from "./config";

export const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error(`Failed to fetch users (${response.status})`);
  }
  return response.json();
};
