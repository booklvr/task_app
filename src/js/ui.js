class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.task = document.querySelector('#task');
    this.description = document.querySelector('#description');
    this.idInput = document.querySelector('#id');
    this.taskSubmit = document.querySelector('.submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card">
          <div class="card__body">
            <h4 class="card__title">${post.task}</h4>
            <p class="card__text">${post.description}</p>
            <a href="#" class="card__link">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="card__link">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;

    });
    this.post.innerHTML = output;
  }
}


const ui = new UI();

export default ui;
