import ui from './ui';

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  fetch('http://localhost:3000/task')
    .then((response) => {
      return response.json()
    })
    .then((myJson) => {
      ui.showPosts(data);
    })
    .catch(err => console.log('fuck' + err));
}
