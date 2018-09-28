arrg = [];

function aggUsuarioarrg (nombre, apellido, fecha_nac, telefono, correo){
    var persona = {
        "nombre": nombre,
        "apellido": apellido,
        "fecha_nac": fecha_nac,
        "telefono": telefono,
        "correo": correo
    }
    arrg.push(persona);
    return persona;
}