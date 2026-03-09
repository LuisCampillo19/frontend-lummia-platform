// src/features/pomodoro/timer.js

let timerInterval = null;
let selectedTime = 25;
let selectedXp = 500;
let secondsLeft = selectedTime * 60;

export function initPomodoro() {
  const display = document.getElementById('pomodoro-display');
  const startBtn = document.getElementById('start-btn');
  const resetBtn = document.getElementById('reset-btn');
  const rewardInput = document.getElementById('reward-input');
  const timeBtns = document.querySelectorAll('.time-btn');
  const rewardXpText = document.getElementById('reward-xp-text');
  
  const modal = document.getElementById('reward-modal');
  const modalContent = document.getElementById('reward-modal-content');
  const modalRewardText = document.getElementById('modal-reward-text');
  const modalXpText = document.getElementById('modal-xp-text');
  const closeModalBtn = document.getElementById('close-modal-btn');

  if (!display || !startBtn || !resetBtn) return;

  clearInterval(timerInterval);
  timerInterval = null;
  selectedTime = 25;
  selectedXp = 500;
  secondsLeft = selectedTime * 60;
  updateDisplay(display);
  startBtn.textContent = 'START FOCUS';

  timeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (timerInterval) return; 

      timeBtns.forEach(b => {
        b.classList.remove('border-lummia-sage', 'text-lummia-sage', 'bg-lummia-sage/10');
        b.classList.add('border-white/10', 'text-gray-400');
      });

      const target = e.currentTarget;
      target.classList.remove('border-white/10', 'text-gray-400');
      target.classList.add('border-lummia-sage', 'text-lummia-sage', 'bg-lummia-sage/10');

      selectedTime = parseInt(target.getAttribute('data-time'));
      selectedXp = parseInt(target.getAttribute('data-xp'));
      
      secondsLeft = selectedTime * 60;
      updateDisplay(display);
      
      if (rewardXpText) {
        rewardXpText.textContent = `+${selectedXp} XP`;
      }
    });
  });

  startBtn.addEventListener('click', () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      startBtn.textContent = 'RESUME';
    } else {
      startBtn.textContent = 'PAUSE';
      timerInterval = setInterval(() => {
        secondsLeft--;
        updateDisplay(display);
        
        if (secondsLeft <= 0) {
          clearInterval(timerInterval);
          timerInterval = null;
          startBtn.textContent = 'START FOCUS';
          secondsLeft = selectedTime * 60; 
          
          showModal(rewardInput, modal, modalContent, modalRewardText, modalXpText, selectedXp);
        }
      }, 1000);
    }
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    secondsLeft = selectedTime * 60;
    updateDisplay(display);
    startBtn.textContent = 'START FOCUS';
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      hideModal(modal, modalContent);
    });
  }
}

function updateDisplay(display) {
  const min = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;
  display.textContent = `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function showModal(rewardInput, modal, modalContent, modalRewardText, modalXpText, xpAmount) {
  if (!modal || !modalRewardText) return;

  const finalReward = rewardInput && rewardInput.value.trim() !== '' 
    ? rewardInput.value 
    : 'A well-deserved break';

  modalRewardText.textContent = finalReward;
  
  if (modalXpText) {
    modalXpText.textContent = `+${xpAmount} EXP Gained`;
  }
  
  modal.classList.remove('hidden');
  
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
    modalContent.classList.add('scale-100');
  }, 10);
}

function hideModal(modal, modalContent) {
  if (!modal) return;
  
  modal.classList.add('opacity-0');
  modalContent.classList.remove('scale-100');
  modalContent.classList.add('scale-95');
  
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}