import { todoItem } from './todoItem.js';

const todos = [
  { id: '111', done: true, text: 'lorem ipsum 1' },
  { id: '222', done: false, text: 'lorem ipsum 2' },
  { id: '333', done: true, text: 'lorem ipsum 3' },
];

const refs = {
  body: document.body,
  contextMenu: document.querySelector('.context-menu'),
  list: document.querySelector('.todo-list'),
  addTodoButton: document.querySelector('.add-todo'),
  showIdButton: document.querySelector('.show-id'),
};

const render = () => {
  const todoItems = todos.map((todo) => todoItem(todo)).join('');

  refs.list.innerHTML = '';
  refs.list.insertAdjacentHTML('beforeend', todoItems);
};

const showContextMenu = (event) => {
  event.preventDefault();
  refs.contextMenu.classList.add('show');

  refs.contextMenu.style.left = `${event.pageX}px`;
  refs.contextMenu.style.top = `${event.pageY}px`;
};

const hideContextMenu = () => {
  refs.contextMenu.classList.remove('show');
};

const addTodo = () => {
  todos.push({ id: '333', done: false, text: 'new todo' });
};

const handleAddTodo = () => {
  addTodo();
  render();
};

const handleShowId = (event) => {
  const parentWrapper = event.target.closest('.context-menu');
  console.log(parentWrapper.dataset.id);
};

render();

window.addEventListener('contextmenu', showContextMenu);
window.addEventListener('click', hideContextMenu);
refs.addTodoButton.addEventListener('click', handleAddTodo);
refs.showIdButton.addEventListener('click', handleShowId);

// -------- createElement --------
{
  /* <a
href="https://goit.global/textbooks/javascript-yk5evp/v2/uk/docs/lesson-11/dom"
target="_blank"
>
  <h3>Module 6.11</h3>
</a> */
}

const addLink = () => {
  const h3 = document.createElement('h3');
  h3.textContent = 'Module 6.11';

  const a = document.createElement('a');
  a.href =
    'https://goit.global/textbooks/javascript-yk5evp/v2/uk/docs/lesson-11/dom';
  a.target = '_blank';

  a.appendChild(h3);
  refs.body.appendChild(a);
};

addLink();
