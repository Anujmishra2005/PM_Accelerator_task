// simple client API wrapper using fetch
const SERVER = import.meta.env.VITE_API_BASE || "http://localhost:8080";

async function request(path, opts = {}) {
  const res = await fetch(`${SERVER}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...opts
  });
  if (!res.ok) {
    const text = await res.text();
    let body;
    try { body = JSON.parse(text); } catch { body = text; }
    const err = new Error("Request failed");
    err.response = { status: res.status, data: body };
    throw err;
  }
  return res.json();
}

export default {
  createQuery: (payload) => request("/api/queries", { method: "POST", body: JSON.stringify(payload) }),
  getQueries: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/api/queries?${qs}`);
  },
  getQuery: (id) => request(`/api/queries/${id}`),
  updateQuery: (id, payload) => request(`/api/queries/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteQuery: (id) => request(`/api/queries/${id}`, { method: "DELETE" }),
  health: () => request("/api/health")
};
