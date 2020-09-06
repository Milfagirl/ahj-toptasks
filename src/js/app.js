import addList from './addlist.js';

// document.querySelector('form').addEventListener('keydown', (event) => {
//     if(event.keyCode === 13) {
//         event.preventDefault();
//      }
// });

const elementInput = document.querySelector('#inputform');
const elementPinned = document.querySelector('.pinned');
const elementAllTasks = document.querySelector('.alltasks');
elementInput.addEventListener('keydown', (event) => {
    if(event.keyCode === 13) {
        event.preventDefault();
        console.log(elementInput.value);
        console.log(addList(elementInput.value));
        elementAllTasks.insertAdjacentHTML('beforeEnd', addList(elementInput.value));
        elementInput.value = '';
     }
//   event.preventDefault();
// console.log(elementInput.value);
// console.log(addList(elementInput.value));
});