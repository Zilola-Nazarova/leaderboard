import resetInputs from './reset-inputs.js';
import refreshList from './refresh-list.js';

const addScore = async (user, score) => {
  const myScore = { user, score };

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Fr7cdUD5YH6Hsb2LQV7n/scores/', {
    method: 'POST',
    body: JSON.stringify(myScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  await refreshList();

  resetInputs();
};

export default addScore;