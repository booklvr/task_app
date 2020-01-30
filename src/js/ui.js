class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.task = document.querySelector('#task');
    this.description = document.querySelector('#description');
    this.idInput = document.querySelector('#id');
    this.taskSubmit = document.querySelector('.submit');
    this.forState = 'add';
  }

  showPosts() {

  }
}


export const ui = new UI();
