export async function authHandler(action, user) {
  const url = `https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/${action}`;
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await resp.json();
  if (resp.ok) {
    return data;
  }
  throw new Error(data.msg);
}
