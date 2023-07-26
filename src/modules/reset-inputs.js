import { setToLocal } from './input-preserve.js';

const resetInputs = () => {
  document.getElementById('user-name').value = '';
  document.getElementById('user-score').value = '';
  setToLocal();
};

export default resetInputs;