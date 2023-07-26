const setToLocal = () => {
  const currentInput = {
    name: document.getElementById('user-name').value,
    score: document.getElementById('user-score').value,
  };
  localStorage.setItem('currentInput', JSON.stringify(currentInput));
};

const takeFromLocal = () => {
  document.getElementById('user-name').value = JSON.parse(localStorage.getItem('currentInput')).name || '';
  document.getElementById('user-score').value = JSON.parse(localStorage.getItem('currentInput')).score || '';
};

export { setToLocal, takeFromLocal };