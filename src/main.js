// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        nombre: document.getElementById('nombre').value,
        empresa: document.getElementById('empresa').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        servicio: document.getElementById('servicio').value,
        presupuesto: document.getElementById('presupuesto').value,
        mensaje: document.getElementById('mensaje').value
    };

    const servicioTexto = {
        'marketing-integral': 'Marketing Digital Integral',
        'generacion-leads': 'Generación de Leads',
        'consultoria': 'Consultoría Estratégica',
        'auditoria': 'Auditoría de Presencia Digital',
        'otro': 'Otro'
    };

    const resultadoHTML = `
        <div class="bg-white p-8 rounded-2xl shadow-lg">
            <h3 class="text-2xl font-bold text-purple-600 text-center mb-4">
                ✓ Solicitud Recibida Exitosamente
            </h3>
            <p class="text-center text-gray-600 mb-8">
                Gracias <strong>${formData.nombre}</strong>, hemos registrado tu solicitud. Te contactaremos en menos de 24 horas.
            </p>
            
            <div class="space-y-4">
                <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                    <div class="font-semibold text-purple-600 mb-1">Empresa:</div>
                    <div class="text-gray-700">${formData.empresa}</div>
                </div>
                
                <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                    <div class="font-semibold text-purple-600 mb-1">Email de Contacto:</div>
                    <div class="text-gray-700">${formData.email}</div>
                </div>
                
                <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                    <div class="font-semibold text-purple-600 mb-1">Teléfono:</div>
                    <div class="text-gray-700">${formData.telefono}</div>
                </div>
                
                <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                    <div class="font-semibold text-purple-600 mb-1">Servicio de Interés:</div>
                    <div class="text-gray-700">${servicioTexto[formData.servicio]}</div>
                </div>
                
                <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                    <div class="font-semibold text-purple-600 mb-1">Presupuesto Mensual:</div>
                    <div class="text-gray-700">$${formData.presupuesto}</div>
                </div>
                
                <div class="p-4 bg-gray-50 rounded-lg border-l-4 border-purple-600">
                    <div class="font-semibold text-purple-600 mb-1">Tu Desafío:</div>
                    <div class="text-gray-700">${formData.mensaje}</div>
                </div>
            </div>

            <div class="mt-8 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl text-center">
                <p class="text-purple-600 font-bold mb-2">📞 Próximos Pasos</p>
                <p class="text-gray-700 text-sm">
                    Un especialista de Nexus revisará tu solicitud y te contactará para agendar tu consultoría gratuita.
                    <br><span class="font-semibold">Tiempo estimado de respuesta: 12-24 horas</span>
                </p>
            </div>
        </div>
    `;

    document.getElementById('resultadoContainer').innerHTML = resultadoHTML;
    document.getElementById('resultados').scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.reset();
    alert('✓ ¡Gracias! Tu solicitud ha sido enviada exitosamente. Revisa el resumen abajo y te contactaremos pronto.');
});