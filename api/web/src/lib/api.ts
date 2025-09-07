export const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
export async function fetchHealth(): Promise<{status: string}> {
  const res = await fetch(`${apiBase}/healthz`, { cache: "no-store" });
  if (!res.ok) throw new Error("API health check failed");
  return res.json();
}
