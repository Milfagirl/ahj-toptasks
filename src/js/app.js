/* eslint-disable prefer-destructuring */
import Task from './task.js';
import notepad from './notepad.js';
import addList, { addPinnedList } from './addlist.js';

const elementInput = document.querySelector('#inputform');
let elementPinned = document.querySelector('.pinned');
const elementAllTasks = document.querySelector('.alltasks');

// Добавляем элементы в tasklist
elementInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    const task = new Task(elementInput.value);
    task.getId = notepad.getAllArrayList.length;

    notepad.getAllArrayList = task;
    console.log(notepad.getAllArrayList);

    elementAllTasks.insertAdjacentHTML('beforeEnd', addList(task));
    elementInput.value = '';
  }
});

document.addEventListener('click', (event) => {
// Добавляем элементы в PinnedList
  if ((event.target.id === 'inputAllTasks') && (event.target.closest('[class = alltasks]'))) {
    if (event.target.checked) {
      elementPinned = document.querySelector('.pinned');
      if (elementPinned.innerText === 'No pinned tasks') {
        elementPinned.innerText = '';
      }
      const dataid = (event.target.closest('.liInTask').dataset.id);
      let task = {};
      notepad.getAllArrayList.forEach((element) => {
        if (element.id === Number(dataid)) {
          task = element;
        }
      });
      notepad.getPinnedArrayList = task;
      elementPinned.insertAdjacentHTML('beforeEnd', addPinnedList(task));
      notepad.deleteAllArrayList(task);
      console.log('all', notepad.getAllArrayList, 'pinned', notepad.getPinnedArrayList);
      // перерисовываем alltasks после pinned задания
      elementAllTasks.innerHTML = '';
      notepad.getAllArrayList.forEach((element) => {
        if (element) {
          elementAllTasks.insertAdjacentHTML('beforeEnd', addList(element));
        }
      });
    }
  }

  // Удаляем элементы из pinnedlist
  if ((event.target.id === 'inputPinned') && (event.target.closest('[class = pinned]'))) {
    if (!event.target.checked) {
    // elementPinned = document.querySelector('.pinned');
    // if (elementPinned.innerText === 'No pinned tasks') {
    //   elementPinned.innerText = '';
    // };
      const dataid = (event.target.closest('.liInPinned').dataset.id);
      let task = {};
      notepad.getPinnedArrayList.forEach((element) => {
        if (element.id === Number(dataid)) {
          task = element;
        }
      });
      notepad.getAllArrayList = task;
      elementAllTasks.insertAdjacentHTML('beforeEnd', addList(task));
      // elementPinned.insertAdjacentHTML('beforeEnd', addPinnedList(task));
      notepad.deletePinnedArrayList(task);
      console.log('all', notepad.getAllArrayList, 'pinned', notepad.getPinnedArrayList);

      elementPinned.innerHTML = '';
      if (notepad.getPinnedArrayList.length === 0) {
        elementPinned.innerText = 'No pinned tasks';
      }
      notepad.getPinnedArrayList.forEach((element) => {
        if (element) {
          elementPinned.insertAdjacentHTML('beforeEnd', addPinnedList(element));
        }
      });
    }
  }
});
