// varFunc();
(function varFunc() {
  let a = 45;
  console.log(a);
  function childFunc(params) {
    let a = 56;
    console.log(a);
  }
  childFunc();
  console.log(a);
})();
console.log(a);
