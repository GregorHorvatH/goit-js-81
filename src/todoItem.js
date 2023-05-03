export const todoItem = ({ id, done, text }) => {
  const checked = done ? 'checked' : '';

  return `<li class="todo-item" data-id=${id}>
    <label class="todo-description">
      <input type="checkbox" ${checked} />
      <span>${text}</span>
    </label>
    <button>x</button>
  </li>`;
};
