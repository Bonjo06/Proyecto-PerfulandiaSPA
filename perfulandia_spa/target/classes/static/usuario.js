document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/v1/admin/usuario")
      .then(response => {
        if (!response.ok) throw new Error("Error al obtener datos de los usuarios");
        return response.json();
      })
      .then(data => {
        const tableBody = document.querySelector("#usuario-table tbody");
        data.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nombres}</td>
            <td>${item.apellidos}</td>
            <td>${item.correo}</td>
            <td>${item.userDireccion}</td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error("Error:", error);
        alert("No hay usuarios registrados.");
      });
  });