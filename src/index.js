import './style.css';
import addScore from './modules/add-score.js';
import refreshList from './modules/refresh-list.js';
import showError from './modules/show-error.js';
import { takeFromLocal, setToLocal } from './modules/input-preserve.js';

const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');

// Render list when page is loaded, prefill unsubmitted input
window.addEventListener('load', () => {
  refreshList();
  if (localStorage.getItem('currentInput')) {
    takeFromLocal();
  } else {
    setToLocal();
  }
});

refreshBtn.addEventListener('click', () => {
  refreshList();
});

submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const name = document.getElementById('user-name');
  const score = document.getElementById('user-score');

  if (!/^[0-9]+$/.test(score.value)) {
    showError('score', 'Please, enter a number');
  } else if (name.value === '') {
    showError('name', 'Please, enter your name');
  } else if (score.value === '') {
    showError('score', 'Please, enter your score');
  } else if (name.value && score.value !== '') {
    await addScore(name.value, score.value);
  }
});

// Preserve input in localStorage for user comfort
document.getElementById('user-name').onkeyup = setToLocal;
document.getElementById('user-score').onkeyup = setToLocal;
