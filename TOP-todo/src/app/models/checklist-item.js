class ChecklistItem {
  constructor(name) {
    this.name = name;
    this.finished = false;
  }


}

var a = new ChecklistItem("hey");
console.log(JSON.stringify(a));

// export default ChecklistItem;