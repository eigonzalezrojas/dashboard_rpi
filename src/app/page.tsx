import DashboardLayout from "@/components/layout/DashboardLayout";

export default function HomePage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">🌡 Temperatura del Agua</div>
        <div className="bg-white p-4 rounded shadow">💧 pH del Agua</div>
        <div className="bg-white p-4 rounded shadow">⚡ EC del Agua</div>
        {/* Aquí se irán añadiendo más widgets */}
      </div>
    </DashboardLayout>
  );
}
