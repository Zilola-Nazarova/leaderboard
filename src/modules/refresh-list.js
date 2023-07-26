import renderList from './render-list.js';

const refreshList = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Fr7cdUD5YH6Hsb2LQV7n/scores/');
  const listData = await response.json();
  renderList(listData.result);
};

export default refreshList;