import renderScore from './render-score.js';

const renderList = (listData) => {
  const scoreList = document.getElementById('score-list');
  scoreList.innerHTML = '';
  listData = listData.sort((x, y) => x.score - y.score);
  listData.forEach((record) => {
    const newScore = renderScore(record);
    scoreList.prepend(newScore);
  });
};

export default renderList;