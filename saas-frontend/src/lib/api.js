const API = process.env.NEXT_PUBLIC_API_URL;
const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_API === "true";

// Mock responses for login/register
const mockResponses = {
  login: { access_token: "mock-access-token" },
  register: { access_token: "mock-access-token" },
};

// POST helper
async function postRequest(endpoint, data) {
  if (USE_MOCK) {
    console.log(`Mock API called: ${endpoint}`, data);
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (endpoint.includes("login")) return mockResponses.login;
    if (endpoint.includes("register")) return mockResponses.register;
    return {};
  }

  if (!API) throw new Error("NEXT_PUBLIC_API_URL is not defined");

  const url = `${API}${endpoint}`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let resData = null;
    try {
      resData = await res.json();
    } catch {}

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error(`API route not found: ${endpoint}`);
      }
      const message =
        resData?.detail || resData?.message || `Request failed: ${res.status}`;
      throw new Error(message);
    }

    return resData;
  } catch (err) {
    if (err instanceof TypeError && err.message === "Failed to fetch") {
      throw new Error("Cannot connect to backend. Make sure server is running.");
    }
    throw new Error(err.message || "Unexpected error");
  }
}

// Login/Register
export async function loginUser(data) {
  return postRequest("/auth/login", data);
}

export async function registerUser(data) {
  return postRequest("/auth/register", data);
}

// Fetch dashboard data
export async function fetchDashboardData() {
  const mockChartData = [
    { day: "Mon", sales: 120 },
    { day: "Tue", sales: 200 },
    { day: "Wed", sales: 150 },
    { day: "Thu", sales: 170 },
    { day: "Fri", sales: 90 },
    { day: "Sat", sales: 230 },
    { day: "Sun", sales: 180 },
  ];

  const mockTableData = [
    { id: 1, name: "Product A", price: "$20", stock: 12 },
    { id: 2, name: "Product B", price: "$35", stock: 8 },
    { id: 3, name: "Product C", price: "$50", stock: 20 },
    { id: 4, name: "Product D", price: "$15", stock: 5 },
  ];

  if (USE_MOCK) {
    return { chart: mockChartData, table: mockTableData };
  }

  if (!API) throw new Error("NEXT_PUBLIC_API_URL is not defined");

  try {
    const [chartRes, tableRes] = await Promise.all([
      fetch(`${API}/dashboard/chart`, { headers: { "Content-Type": "application/json" } }),
      fetch(`${API}/dashboard/products`, { headers: { "Content-Type": "application/json" } }),
    ]);

    if (!chartRes.ok || !tableRes.ok) {
      throw new Error(`Failed to fetch dashboard data: ${chartRes.status}, ${tableRes.status}`);
    }

    const chart = await chartRes.json();
    const table = await tableRes.json();
    return { chart, table };
  } catch (err) {
    console.error("Error fetching dashboard data:", err);
    throw err;
  }
}
