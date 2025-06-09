document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/v1/gerente/sucursal")
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener datos de las sucursales");
        return response.json();
      })
      .then(data => {
        const tableBody = document.querySelector("#sucursal-table tbody");
        data.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.sucDireccion}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error:", error);
        alert("No se pudo cargar las sucursales.");
      });
  });
  