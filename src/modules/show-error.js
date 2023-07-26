const showError = (type, message) => {
  const errorElements = {
    name: document.getElementById('name-error'),
    score: document.getElementById('score-error'),
  };

  const errorElement = errorElements[type];
  errorElement.textContent = message;
  errorElement.classList.add('show');

  setTimeout(() => {
    errorElements.name.classList.remove('show');
    errorElements.score.classList.remove('show');
  }, 3000);
};

export default showError;