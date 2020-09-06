{/* <ul'>
       <li>
        <label for="inputList">
           <div>
            <p></p>
            <input type="checkbox" id="inputList" name="pin">
           </div>
        </label>
        </li>
    </ul> */}

export default function addList(name) {
  const div = document.querySelector('.alltasks');
  const node = div.querySelectorAll('.liInTask');
  console.log(node);
  const count = node.length;
  console.log('count', count);
  return `<ul><li class = 'liInTask' data-id = ${count}><label for="inputList"><div><p>${name}</p><input type="checkbox" id="inputList" name="pin"></div></label></li></ul>`;
}

export function addPinnedList(name) {
  return `<ul><li class = 'liInPinned'><label for="inputList"><div><p>${name}</p><input type="checkbox" id="inputList" name="pin" checked></div></label></li></ul>`;
}