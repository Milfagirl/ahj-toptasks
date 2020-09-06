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
  return `<ul><li class = 'liInTask'><label for="inputList"><div><p>${name}</p><input type="checkbox" id="inputList" name="pin"></div></label></li></ul>`;
}