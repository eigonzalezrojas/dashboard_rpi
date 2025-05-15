async function cargarDatos() {
      const desde = document.getElementById('fecha_inicio').value;
      const hasta = document.getElementById('fecha_fin').value;
      const res = await fetch(`/api/datos?desde=${desde}&hasta=${hasta}`);
      const data = await res.json();

      const labels = data.map(row => row.fecha_hora);

      renderChart('graficoTemperatura', labels, [
        { label: 'Temperatura 1', data: data.map(r => r.temperatura_1), borderColor: 'orange' },
        { label: 'Temperatura 2', data: data.map(r => r.temperatura_2), borderColor: 'red' }
      ]);

      renderChart('graficoAgua', labels, [
        { label: 'Temp Agua 1', data: data.map(r => r.temperatura_agua_1), borderColor: 'blue' },
        { label: 'Temp Agua 2', data: data.map(r => r.temperatura_agua_2), borderColor: 'green' }
      ]);

      renderChart('graficoHumedad', labels, [
        { label: 'Humedad 1', data: data.map(r => r.humedad_1), borderColor: 'purple' },
        { label: 'Humedad 2', data: data.map(r => r.humedad_2), borderColor: 'violet' }
      ]);

      renderChart('graficoPh', labels, [
        { label: 'pH', data: data.map(r => r.ph), borderColor: 'teal' }
      ]);

      renderChart('graficoEc', labels, [
        { label: 'EC', data: data.map(r => r.ec), borderColor: 'brown' }
      ]);

      renderChart('graficoSuelo', labels, [
        { label: 'Sensor Suelo', data: data.map(r => r.sensor_suelo), borderColor: 'gray' }
      ]);
}

function renderChart(id, labels, datasets) {
  const ctx = document.getElementById(id).getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: { labels, datasets },
        options: {
          responsive: true,
          scales: { x: { display: true }, y: { beginAtZero: true } }
        }
   });
}
