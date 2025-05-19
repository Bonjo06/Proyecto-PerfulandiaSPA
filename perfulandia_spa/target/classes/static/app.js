document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/v1/inventario/gerente")
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener datos del inventario");
        return response.json();
      })
      .then(data => {
        const tableBody = document.querySelector("#inventario-table tbody");
        data.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nombreProducto}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error:", error);
        alert("No se pudo cargar el inventario.");
      });
  });
  