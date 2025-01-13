const mouse1 = {
  firstName: "Sherry",
  lastName: "Mouse",
};

const mouse2 = {
  firstName: "Jerry",
  lastName: "Mouse",
};

const sayMouseName = {
  sayMyName: function (val1, val2) {
    console.log(val1);
    console.log(val2);
    console.log(this);
    console.log(this.firstName);
  },
};
const arr = [1, 2];
sayMouseName.sayMyName.apply(mouse2, arr);

sayMouseName.sayMyName.apply(mouse1);

function test() {
  //x
  var x = 1;
  let y = 2;
  // y
}
