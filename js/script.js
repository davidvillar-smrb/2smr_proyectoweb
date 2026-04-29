function enviarFormulario(event) { /*Evitamos que la página se recargue.*/
       event.preventDefault();

    const contenedor = document.getElementById('contenedor-formulario');    /*Verificamos que el contenedor existe para que el código no dé error.*/
    if (contenedor) {
        
        /*Sustituimos el formulario por un mensaje de éxito usando innerHTML.*/
        contenedor.innerHTML = `
            <div class="animado" style="text-align: center; padding: 40px; background: white; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
                <h2 style="color: #0f172a; margin-bottom: 10px;">¡Enviado con éxito!</h2>
                <p style="margin-bottom: 25px; color: #475569;">
                    Gracias. Hemos recibido tus datos correctamente.<br> 
                    Nos pondremos en contacto contigo muy pronto para informarte sobre los cursos.
                </p>
                
                <button onclick="location.reload()" class="btn-link" style="border:none; cursor:pointer;">
                    Volver a enviar
                </button>
            </div>
        `;
        
        /*Desplazamos la pantalla hacia arriba con un efecto (smooth).*/
        window.scrollTo({ 
            top: 100, 
            behavior: 'smooth' 
        });
    }
}