// I run this code in console when I want to reset the board by creating a new
// game ID, it's not needed index.js since we want to have one Leaderboard
// for multiple sessions instead of creating a new game

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'minimalism',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));