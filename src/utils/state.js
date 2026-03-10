// src/utils/state.js
const state = {
  user: { name: 'MATIASAC110508', level: 14, xp: 2450 },
  isAuthenticated: true,
};

export function getState() {
  return state || { user: { name: 'guest' } };
}

export function setState(newState) {
  Object.assign(state, newState);
}