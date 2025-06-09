document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/v1/logistica/envio")
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener datos de los envíos");
        return response.json();
      })
      .then(data => {
        const tableBody = document.querySelector("#envio-table tbody");
        data.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.envioDireccion}</td>
            <td>${item.fechaInicio}</td>
            <td>${item.fechaTermino}</td>
            <td>${item.envioEstado}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error:", error);
        alert("No se encontraron datos de envio.");
      });
  });
  