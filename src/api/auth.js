
import { API_BASE_URL } from './config.js';

/**
 * Función Maestra: Autenticación Inteligente.
 * Maneja Login y Registro automático con soporte para Roles (Student/TL).
 * * @param {string} email - Correo del usuario.
 * @param {string} password - Contraseña del usuario.
 * @param {string} role - Rol elegido ('student' o 'tl').
 */
export const loginOrRegister = async (email, password, role = 'student') => {
    try {
        console.log(` Intentando acceso para: ${email} (Rol deseado: ${role})`);

        // PASO 1: Intento de Login
        const response = await fetch(`${API_BASE_URL}/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        // CASO A: Login exitoso (El usuario ya existía en la base de datos)
        if (response.status === 200) {
            console.log(" Acceso concedido: Usuario existente.");
            return {
                status: 'success',
                user: data.user, // Contiene id, username, email, role, level, xp
                message: "Bienvenido de nuevo al Clan"
            };
        }

        // CASO B: Usuario no encontrado (Iniciamos Registro Automático)
        if (data.message === "Credenciales invalidas") {
            console.log("⚠️ Identidad no encontrada. Creando nuevo perfil en la nube...");
            
            const regResponse = await fetch(`${API_BASE_URL}/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username: email.split('@')[0], 
                    email: email, 
                    password: password,
                    role: role // Mandamos el rol seleccionado en el formulario
                })
            });

            const regData = await regResponse.json();

            if (regResponse.status === 201) {
                console.log(` Registro exitoso. Rango asignado: ${role}`);
                return {
                    status: 'success',
                    user: regData.user, // El backend debe devolver el objeto completo
                    message: "Cuenta creada y acceso concedido"
                };
            } else {
                return {
                    status: 'error',
                    message: regData.message || "No se pudo crear el perfil"
                };
            }
        }

        // CASO C: Error de validación (Contraseña incorrecta, etc.)
        return {
            status: 'error',
            message: data.message || "Error de autenticación"
        };

    } catch (error) {
        console.error("Error de red/servidor:", error);
        return {
            status: 'error',
            message: "Error de conexión: Verifica que el servidor Flask esté activo."
        };
    }
};

/**
 * Cierre de Sesión Seguro.
 * Limpia el rastro de la sesión y reinicia la aplicación.
 */
export const logout = () => {
    console.log(" Cerrando sesión y limpiando rastro...");
    localStorage.removeItem('user_session');
    // Forzamos recarga para que el Router bloquee el acceso de inmediato
    window.location.reload();
};