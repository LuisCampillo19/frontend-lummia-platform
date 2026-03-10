import { getState } from '../../../utils/state.js';

let timerInterval = null;
let isRunning = false;
let isWorkPhase = true;
let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let currentXP = 50;
let timeLeft = workDuration;

export function initPomodoroLogic() {
    if (timerInterval) {
        clearInterval(timerInterval);
        isRunning = false;
    }

    const currentState = getState() || {}; 
    const currentUser = currentState.user || { name: 'guest' };
    const userKey = `pomodoro_tasks_${currentUser.name}`;

    const timeDisplay = document.getElementById('time-display');
    const startBtn = document.getElementById('start-timer-btn');
    const resetBtn = document.getElementById('reset-timer-btn');
    const rewardDisplay = document.getElementById('reward-display');
    
    const addTaskBtn = document.getElementById('add-task-btn');
    const clearAllBtn = document.getElementById('clear-all-tasks');
    const deleteAllBtn = document.getElementById('delete-all-tasks');
    const taskTableBody = document.getElementById('task-table-body');
    const modeBtns = document.querySelectorAll('.mode-btn');

    if (!timeDisplay || !taskTableBody) return;

    // --- Timer Modes ---
    if (modeBtns.length > 0) {
        const modeContainer = modeBtns[0].parentElement;
        const newModeContainer = modeContainer.cloneNode(true);
        modeContainer.replaceWith(newModeContainer);

        newModeContainer.addEventListener('click', (e) => {
            const target = e.target.closest('.mode-btn');
            if (!target || isRunning) return; 

            newModeContainer.querySelectorAll('.mode-btn').forEach(btn => {
                btn.className = "mode-btn px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all";
            });

            target.className = "mode-btn active px-4 py-2 rounded-xl bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-400 text-[10px] font-bold uppercase tracking-widest transition-all";

            workDuration = parseInt(target.getAttribute('data-work')) * 60;
            breakDuration = parseInt(target.getAttribute('data-break')) * 60;
            currentXP = parseInt(target.getAttribute('data-xp'));

            if (rewardDisplay) rewardDisplay.textContent = `+${currentXP} XP`;
            
            isWorkPhase = true;
            timeLeft = workDuration;
            updateDisplay();
            updateBtnUI();
        });
    }

    // --- Row Utilities ---
    const getBtnClass = (state) => {
        if (state === 'done') return 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400';
        if (state === 'missed') return 'bg-red-500/10 border border-red-500/30 text-red-400';
        return 'text-zinc-600 hover:bg-white/5';
    };

    const getIcon = (state) => {
        if (state === 'done') return 'fa-check';
        if (state === 'missed') return 'fa-xmark';
        return 'fa-minus';
    };

    const createRowHTML = (text = '', states = Array(7).fill('empty')) => {
        return `
        <tr class="border-b border-white/5 hover:bg-white/[0.02] transition-colors group animate-fade-in">
           <td class="p-0 border-r border-white/5 relative">
              <div class="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-focus-within:bg-fuchsia-500 transition-colors"></div>
              <input type="text" value="${text}" placeholder="Type an objective..." class="w-full h-12 bg-transparent text-white font-medium px-4 focus:outline-none focus:bg-white/5 placeholder-zinc-600 transition-colors">
           </td>
           ${states.map(state => `
           <td class="p-0 border-r border-white/5">
              <button class="status-toggle w-full h-12 flex items-center justify-center text-lg transition-all ${getBtnClass(state)}" data-state="${state}">
                 <i class="fa-solid ${getIcon(state)} pointer-events-none"></i>
              </button>
           </td>`).join('')}
           <td class="p-0 text-center">
              <button class="delete-row-btn w-full h-12 flex items-center justify-center text-zinc-600 hover:text-red-400 hover:bg-red-500/10 transition-all">
                 <i class="fa-solid fa-trash-can pointer-events-none text-xs"></i>
              </button>
           </td>
        </tr>`;
    };

    const clearRowContent = (row) => {
        row.querySelector('input').value = '';
        row.querySelectorAll('.status-toggle').forEach(btn => {
            btn.dataset.state = 'empty';
            btn.className = `status-toggle w-full h-12 flex items-center justify-center text-lg transition-all ${getBtnClass('empty')}`;
            btn.innerHTML = `<i class="fa-solid ${getIcon('empty')} pointer-events-none"></i>`;
        });
    };

    // --- Persistence ---
    const saveTasks = () => {
        const rows = Array.from(document.getElementById('task-table-body').querySelectorAll('tr'));
        const data = rows.map(row => ({
            text: row.querySelector('input')?.value || '',
            states: Array.from(row.querySelectorAll('.status-toggle')).map(btn => btn.dataset.state)
        }));
        localStorage.setItem(userKey, JSON.stringify(data));
    };

    const loadTasks = () => {
        const savedData = localStorage.getItem(userKey);
        taskTableBody.innerHTML = '';
        
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            if (parsedData.length > 0) {
                parsedData.forEach(item => {
                    taskTableBody.insertAdjacentHTML('beforeend', createRowHTML(item.text, item.states));
                });
                return;
            }
        }
        
        // Default to 1 empty row
        taskTableBody.insertAdjacentHTML('beforeend', createRowHTML());
    };

    // --- Table Events ---
    const newTaskTableBody = taskTableBody.cloneNode(true);
    taskTableBody.replaceWith(newTaskTableBody);
    
    const newAddTaskBtn = addTaskBtn.cloneNode(true);
    addTaskBtn.replaceWith(newAddTaskBtn);

    const newClearAllBtn = clearAllBtn.cloneNode(true);
    clearAllBtn.replaceWith(newClearAllBtn);

    const newDeleteAllBtn = deleteAllBtn.cloneNode(true);
    deleteAllBtn.replaceWith(newDeleteAllBtn);

    newTaskTableBody.addEventListener('input', saveTasks);

    newAddTaskBtn.addEventListener('click', () => {
        newTaskTableBody.insertAdjacentHTML('beforeend', createRowHTML());
        saveTasks();
    });

    // Clear All: Keeps rows, clears data
    newClearAllBtn.addEventListener('click', () => {
        if (confirm("Clear all data in the current rows?")) {
            const rows = newTaskTableBody.querySelectorAll('tr');
            rows.forEach(row => clearRowContent(row));
            saveTasks();
        }
    });

    // Delete All: Removes all rows, leaves 1 empty
    newDeleteAllBtn.addEventListener('click', () => {
        if (confirm("Delete all rows?")) {
            newTaskTableBody.innerHTML = createRowHTML();
            saveTasks();
        }
    });

    newTaskTableBody.addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;

        // Toggle Status
        if (btn.classList.contains('status-toggle')) {
            const currentState = btn.dataset.state;
            const nextState = currentState === 'empty' ? 'done' : (currentState === 'done' ? 'missed' : 'empty');
            
            btn.dataset.state = nextState;
            btn.className = `status-toggle w-full h-12 flex items-center justify-center text-lg transition-all ${getBtnClass(nextState)}`;
            btn.innerHTML = `<i class="fa-solid ${getIcon(nextState)} pointer-events-none"></i>`;
            saveTasks();
        }

        // Delete Row
        if (btn.classList.contains('delete-row-btn')) {
            const row = btn.closest('tr');
            if (newTaskTableBody.children.length > 1) {
                row.remove();
            } else {
                clearRowContent(row);
            }
            saveTasks();
        }
    });

    // --- Timer UI Updates ---
    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        const displayEl = document.getElementById('time-display');
        if (displayEl) displayEl.textContent = `${minutes}:${seconds}`;

        const ring = document.getElementById('pomodoro-ring');
        const statusText = document.getElementById('pomodoro-status');
        const statusDot = document.getElementById('status-dot');

        if (ring && statusText && statusDot) {
            if (isWorkPhase) {
                statusText.textContent = "Focus Phase";
                statusText.className = "text-[10px] font-black text-fuchsia-400 uppercase tracking-widest";
                statusDot.className = "w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse";
                ring.classList.add('before:border-t-fuchsia-500');
                ring.classList.remove('before:border-t-emerald-500');
            } else {
                statusText.textContent = "Break Phase";
                statusText.className = "text-[10px] font-black text-emerald-400 uppercase tracking-widest";
                statusDot.className = "w-2 h-2 rounded-full bg-emerald-400 animate-pulse";
                ring.classList.remove('before:border-t-fuchsia-500');
                ring.classList.add('before:border-t-emerald-500');
            }
        }
    }

    function updateBtnUI() {
        const startE = document.getElementById('start-timer-btn');
        if (!startE) return;
        startE.innerHTML = isRunning ? "Pause" : "Start";
        startE.className = `flex-1 py-3.5 rounded-2xl text-white font-black uppercase tracking-widest text-xs transition-all ${isRunning ? 'bg-cyan-600 shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-fuchsia-600 shadow-[0_0_20px_rgba(217,70,239,0.4)]'}`;
    }

    const newStartBtn = startBtn.cloneNode(true);
    startBtn.replaceWith(newStartBtn);
    const newResetBtn = resetBtn.cloneNode(true);
    resetBtn.replaceWith(newResetBtn);

    newStartBtn.addEventListener('click', () => {
        if (isRunning) { 
            clearInterval(timerInterval); 
            isRunning = false; 
        } else {
            isRunning = true;
            timerInterval = setInterval(() => {
                if (timeLeft > 0) { 
                    timeLeft--; 
                    updateDisplay(); 
                } else {
                    clearInterval(timerInterval); 
                    isRunning = false;
                    alert(isWorkPhase ? `Focus complete! +${currentXP} XP` : "Break over!");
                    isWorkPhase = !isWorkPhase;
                    timeLeft = isWorkPhase ? workDuration : breakDuration;
                    updateDisplay(); 
                    updateBtnUI();
                }
            }, 1000);
        }
        updateBtnUI();
    });

    newResetBtn.addEventListener('click', () => {
        clearInterval(timerInterval); 
        isRunning = false; 
        isWorkPhase = true;
        timeLeft = workDuration; 
        updateDisplay(); 
        updateBtnUI();
    });

    // Boot Up
    loadTasks();
    updateDisplay();
    updateBtnUI();
}