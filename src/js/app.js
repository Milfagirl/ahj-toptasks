/* eslint-disable prefer-destructuring */
import addList, { addPinnedList } from './addlist.js';

const elementInput = document.querySelector('#inputform');
let elementPinned = document.querySelector('.pinned');
const elementAllTasks = document.querySelector('.alltasks');
// const inputInAlltasks = elementAllTasks.querySelectorAll('input');
// Добавляем элементы в tasklist
elementInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    console.log(elementInput.value);
    console.log(addList(elementInput.value));
    elementAllTasks.insertAdjacentHTML('beforeEnd', addList(elementInput.value));
    elementInput.value = '';
};
});

// Добавляем элементы в PinnedList
document.addEventListener('click', (event) => {
  if ((event.target.id === 'inputList') && (event.target.closest('[class = alltasks]'))) {
    if (event.target.checked) {
      elementPinned = document.querySelector('.pinned');
      console.log(elementPinned.innerText);
      if (elementPinned.innerText === 'No pinned tasks') {
        elementPinned.innerText = '';
      };
      const dataid = (event.target.closest('.liInTask').dataset.id);
      const li = document.querySelector(`li[data-id = '${dataid}']`);
      const value = li.querySelector('p').innerText;
      elementPinned.insertAdjacentHTML('beforeEnd', addPinnedList(value));
    };
  };   
});
