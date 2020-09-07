export class Notepad {
  constructor() {
    this.allArrayList = [];
    this.pinnedArrayList = [];
  }

  set getAllArrayList(el) {
    const array = this.allArrayList;
    array.push(el);
    this.allArrayList = array;
  }

  get getAllArrayList() {
    return this.allArrayList;
  }

  set getPinnedArrayList(el) {
    const array = this.pinnedArrayList;
    array.push(el);
    this.PinnedArrayList = array;
  }

  get getPinnedArrayList() {
    return this.pinnedArrayList;
  }

  deleteAllArrayList(el) {
    const array = this.allArrayList;
    console.log(array);
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        if (array[i].id === el.id) {
          array.splice(array.indexOf(array[i]), 1);
          // delete array[i];
        }
      }
    }
    this.allArrayList = array;
  }

  deletePinnedArrayList(el) {
    const array = this.pinnedArrayList;
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        if (array[i].id === el.id) {
          array.splice(array.indexOf(array[i]), 1);
          // delete array[i];
        }
      }
    }
    this.pinnedArrayList = array;
  }
}

const notepad = new Notepad();
export default notepad;
