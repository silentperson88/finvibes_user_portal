/**
 * Central API configuration.
 */
export const API_BASE_URL = process.env.API_BASE_URL;

/**
 * Shared fetch wrapper for API endpoints.
 */
export const apiFetch = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`API error (${response.status}): ${response.statusText}`);
  }

  return response.json();
};
