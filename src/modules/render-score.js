const renderScore = (record) => {
  const li = document.createElement('li');
  const name = document.createElement('span');
  const score = document.createElement('span');

  name.textContent = record.user;
  name.classList.add('player');
  score.textContent = record.score;
  score.classList.add('player-score');

  li.appendChild(name);
  li.appendChild(score);

  return li;
};

export default renderScore;