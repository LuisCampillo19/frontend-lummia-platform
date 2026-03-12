
// Intentamos sacar los datos que guardamos en el login
const getSavedSession = () => {
    const session = localStorage.getItem('user_session');
    return session ? JSON.parse(session) : null;
};

const state = {
    user: getSavedSession(),
    isAuthenticated: !!getSavedSession(),
};

export function getState() {
    // Si no hay sesión, devolvemos un objeto vacío o invitado
    const session = getSavedSession();
    return {
        user: session || { username: 'Invitado', level: 0 },
        isAuthenticated: !!session
    };
}

export function setState(newState) {
    Object.assign(state, newState);
}