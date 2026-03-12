
import { API_BASE_URL } from './config.js';

export const getLeaderboard = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/leaderboard`); // Necesitaremos crear este endpoint en Flask
        if (!response.ok) return [];
        const data = await response.json();
        return data.users; // Retorna la lista de usuarios ordenados por XP
    } catch (error) {
        console.error("Error cargando el clan:", error);
        return [];
    }
};