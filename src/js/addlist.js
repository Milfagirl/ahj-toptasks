/* <ul'>
       <li>
        <label for="inputList">
           <div>
            <p></p>
            <input type="checkbox" id="inputList" name="pin">
           </div>
        </label>
        </li>
    </ul> */

export default function addList(task) {
  return `<ul><li class = 'liInTask' data-id = ${task.id}><label for="inputAllTasks"><div><p>${task.value}</p><input type="checkbox" id="inputAllTasks" name="pin" required="required"></div></label></li></ul>`;
}

export function addPinnedList(task) {
  return `<ul><li class = 'liInPinned' data-id = ${task.id}><label for="inputPinned"><div><p>${task.value}</p><input type="checkbox" id="inputPinned" name="pin" checked></div></label></li></ul>`;
}
