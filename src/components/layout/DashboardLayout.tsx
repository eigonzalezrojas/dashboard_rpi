import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h1 className="text-xl font-bold mb-6"> My Dashboard</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Dashboard</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Sensores</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Alertas</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Configuración</a>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Panel de Control</h2>
          <div>Usuario</div>
        </header>

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
