import { fetchHealth } from "@/lib/api";

export default async function Home() {
  let status = "unknown";
  try {
    const h = await fetchHealth();
    status = h.status;
  } catch {
    status = "unreachable";
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold">Workout → Race Prediction</h1>
      <p className="mt-2 text-sm">API status: {status}</p>
      <p className="mt-6">This UI will collect workouts & PBs and return predictions with confidence intervals.</p>
    </main>
  );
}
