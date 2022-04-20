export const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha);
    const options = {
        year: 'numeric',
        month: 'long',
        day:'2-digit'
    }
    return nuevaFecha.toLocaleDateString('es-ES', options);
}