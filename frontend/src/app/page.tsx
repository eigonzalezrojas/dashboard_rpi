import DashboardLayout from "@/components/layout/DashboardLayout";
import LineChart from "@/components/charts/LineChart";

export default function HomePage() {
  // Ejemplo de datos simulados
  const labels = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"];
  const tempData = [22.5, 23.1, 24.0, 24.3, 23.8, 22.9];

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg font-semibold mb-2">🌡 Temperatura del Agua</p>
          <LineChart labels={labels} data={tempData} label="°C" />
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg font-semibold mb-2">💧 pH del Agua</p>
          <p className="text-4xl font-bold text-center text-blue-500">6.1</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-lg font-semibold mb-2">⚡ EC del Agua</p>
          <p className="text-4xl font-bold text-center text-green-500">1020 µS/cm</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
