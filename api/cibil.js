import { API_BASE_URL } from "./config";

/**
 * Fetch CIBIL report data from the backend CIBIL endpoint.
 */
export const fetchCibilReport = async ({
  mobile,
  pan,
  name,
  gender,
  consent = "Y",
}) => {
  const response = await fetch(`${API_BASE_URL}/cibil`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "data",
      payload: {
        mobile,
        pan,
        name,
        gender,
        consent,
      },
    }),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    const errMsg =
      data && data.message
        ? data.message
        : `CIBIL API request failed (${response.status})`;
    throw new Error(errMsg);
  }

  return data;
};
