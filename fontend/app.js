document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("recuperarForm");
  const container = document.getElementById("formulario-container");

  if (!form) {
    console.error("No se encontró el formulario #recuperarForm");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    container.innerHTML = `
      <h2>Se ha enviado un correo de recuperación a tu email.</h2>
      <p style="color:white; font-size:16px; margin-top:20px; text-align: center;">
        No recibí el correo
      </p>
       <a href="./password-user.html">
        <button id="reenviarForm" 
              style="padding:10px 20px; border:none; border-radius:20px; background:#ff5722; color:white; font-weight:bold; cursor:pointer;">
        Reenviar
      </button> </a>
    `;
  });
});
