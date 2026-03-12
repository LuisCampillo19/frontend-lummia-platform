// src/views/login.js
import { loginOrRegister } from '../api/auth.js';

export const renderLogin = () => {
    // 1. Limpieza total de la interfaz previa
    const app = document.getElementById('app');
    app.innerHTML = ''; 

    // 2. Construcción del HTML con Selector de Rol
    app.innerHTML = /* html */`
        <div class="flex items-center justify-center min-h-screen bg-slate-950 text-white font-sans p-4">
            <div class="p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl w-full max-w-md transform transition-all hover:scale-[1.01] relative overflow-hidden">
                
                <div class="absolute -right-20 -top-20 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px]"></div>
                
                <div class="text-center mb-8 relative z-10">
                    <h1 class="text-4xl font-black tracking-tighter text-violet-500 italic uppercase">LUMMIA</h1>
                    <p class="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Acceso exclusivo Clan Thomson</p>
                </div>

                <form id="auth-form" class="space-y-5 relative z-10">
                    
                    <div class="space-y-1.5">
                        <label class="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Email del Clan</label>
                        <input type="email" id="email" placeholder="estudiante@riwi.com" required 
                               class="w-full p-4 rounded-2xl bg-slate-800/50 border border-slate-700 outline-none focus:ring-2 focus:ring-violet-500 transition-all placeholder:text-slate-600 text-sm">
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Contraseña</label>
                        <input type="password" id="password" placeholder="••••••••" required 
                               class="w-full p-4 rounded-2xl bg-slate-800/50 border border-slate-700 outline-none focus:ring-2 focus:ring-violet-500 transition-all placeholder:text-slate-600 text-sm">
                    </div>

                    <div class="space-y-1.5">
                        <label class="text-[10px] font-black text-slate-500 uppercase ml-1 tracking-widest">Selecciona tu Rango</label>
                        <div class="flex gap-2 p-1.5 bg-black/40 rounded-2xl border border-white/5">
                            <label class="flex-1 cursor-pointer">
                                <input type="radio" name="role" value="student" checked class="hidden peer">
                                <div class="py-2.5 text-center rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 peer-checked:bg-violet-600 peer-checked:text-white transition-all duration-300">
                                    Estudiante
                                </div>
                            </label>
                            <label class="flex-1 cursor-pointer">
                                <input type="radio" name="role" value="tl" class="hidden peer">
                                <div class="py-2.5 text-center rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 peer-checked:bg-amber-500 peer-checked:text-white transition-all duration-300 border border-transparent peer-checked:border-amber-400/30">
                                    TL (Profesor)
                                </div>
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" id="auth-btn" class="w-full py-4 bg-violet-600 hover:bg-violet-500 font-black rounded-2xl shadow-lg shadow-violet-500/20 transition-all active:scale-95 text-xs uppercase tracking-[0.2em]">
                        ENTRAR AL CLAN
                    </button>
                </form>

                <p id="error-msg" class="text-red-400 text-[10px] font-bold mt-6 text-center bg-red-400/10 py-3 rounded-xl hidden border border-red-400/20 animate-in fade-in slide-in-from-top-2"></p>
                
                <div class="mt-8 pt-6 border-t border-slate-800 text-center">
                    <p class="text-[9px] text-slate-500 uppercase tracking-widest leading-relaxed">
                        ¿No tienes cuenta? Ingresa tus datos y el rango deseado para el registro automático.
                    </p>
                </div>
            </div>
        </div>
    `;

    // 3. Lógica de Envío y Conexión con la API
    const form = document.getElementById('auth-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = document.getElementById('auth-btn');
        const errorMsg = document.getElementById('error-msg');
        
        // Efecto visual de carga
        const originalText = btn.innerHTML;
        btn.innerHTML = `<i class="fa-solid fa-circle-notch animate-spin mr-2"></i> VERIFICANDO...`;
        btn.disabled = true;
        errorMsg.classList.add('hidden');

        // Captura de datos
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const role = document.querySelector('input[name="role"]:checked').value;
        
        try {
            // Llamamos a la API enviando el ROL seleccionado
            const result = await loginOrRegister(email, password, role);
            
            if (result.status === 'success') {
                // Guardamos la sesión completa (incluyendo el rol que viene del servidor)
                localStorage.setItem('user_session', JSON.stringify(result.user));
                
                // Animación de éxito antes de recargar
                btn.classList.replace('bg-violet-600', 'bg-emerald-500');
                btn.innerHTML = `<i class="fa-solid fa-check mr-2"></i> BIENVENIDO`;
                
                setTimeout(() => {
                    window.location.reload(); 
                }, 800);
            } else {
                btn.innerHTML = originalText;
                btn.disabled = false;
                errorMsg.innerText = result.message || "ERROR DE IDENTIDAD";
                errorMsg.classList.remove('hidden');
            }
        } catch (error) {
            btn.innerHTML = originalText;
            btn.disabled = false;
            errorMsg.innerText = "SERVIDOR FUERA DE LÍNEA";
            errorMsg.classList.remove('hidden');
        }
    });
};