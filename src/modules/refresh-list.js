import renderList from './render-list.js';
import URL from './create-game.js';

const refreshList = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${URL}/scores/`);
  const listData = await response.json();
  renderList(listData.result);
};

export default refreshList;