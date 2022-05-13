const BASE_URL = "https://lab-api-bq.herokuapp.com";

export const createUser = async (name, email, password, role) => {
  return await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
export const loginUser = (email, password) => {
  return fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};
