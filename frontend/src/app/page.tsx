import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import LineChart from "@/components/charts/LineChart";
import GaugeNeedleCard from "@/components/cards/GaugeNeedleCard";
import ValueCard from "@/components/cards/ValueCard";


interface Dato {
  id: number;
  hora: string;
  fecha: string;
  temperatura_agua_1: number;
  humedad_1: number;
  ph: number;
  ec: number;
}

export default async function HomePage() {
  const res = await fetch("http://localhost:5000/api/datos", { cache: "no-store" });
  const datos: Dato[] = await res.json();

  const labels = datos.map((d) => d.hora.slice(0, 5)).reverse();
  const tempData = datos.map((d) => d.temperatura_agua_1).reverse();

  const last = datos[0] ?? { temperatura_agua_1: 0, ph: 0, ec: 0, humedad_1: 0 };

  return (
    <DashboardLayout>
      {/* 📦 Fila superior con valores y timestamp */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-4">
        <ValueCard label="Water Temp" value={last.temperatura_agua_1} unit="°C" timestamp={`${last.fecha} ${last.hora}`} />
        <ValueCard label="pH" value={last.ph} timestamp={`${last.fecha} ${last.hora}`} />
        <ValueCard label="EC" value={last.ec} unit="µS/cm" timestamp={`${last.fecha} ${last.hora}`} />
        <ValueCard label="Humedad" value={last.humedad_1} unit="%" timestamp={`${last.fecha} ${last.hora}`} />
      </div>

      {/* 🧭 Fila con medidores tipo aguja */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
        <GaugeNeedleCard label="Water Temp" value={last.temperatura_agua_1} unit="°C" max={40} />
        <GaugeNeedleCard label="pH" value={last.ph} max={14} />
        <GaugeNeedleCard label="EC" value={last.ec} unit="µS/cm" max={3000} />
        <GaugeNeedleCard label="Humedad" value={last.humedad_1} unit="%" max={100} />
      </div>

      {/* 📊 Gráfico histórico */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div>
          <p className="text-lg font-semibold mb-2">Histórico Temperatura del Agua</p>
          <LineChart labels={labels} data={tempData} label="°C" />
        </div>
      </div>
    </DashboardLayout>
  );
}

