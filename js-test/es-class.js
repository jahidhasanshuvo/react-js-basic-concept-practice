class FirstClass {
  // this is only accessable inside constructor
  constructor(param) {
    this.a = param;
    /// this function will be included directly on firstclass instance
    this.greet = () => {
      return this.a + this.abc;
    };
  }
  abc = "hello";
  /// this funciton will e included into firstclass instance's [[Prototype]]
  greet() {
    return this.abc;
  }
  /// this funciton will e included into firstclass instance's [[Prototype]]
  outerfunction() {
    return this.a + this.abc;
  }

  // as it is arrow function but it assign to a variable. So it will work like abc value. It will
  // be included into the instance of this class directly
  hello = () => {
    return this.abc;
  };

  //a = param; [not possible] param is accessible only on constructor
  //   this.b="sd"   [not possible]
}
let instance = new FirstClass("one");
var globInstance = new FirstClass("one");

instance.abc = "gello"; //only change instanse gello value
console.log(instance.hello()); //prints gello
console.log(instance.outerfunction());
// Inheritance test
class childClass extends FirstClass {
  constructor(props) {
    // we need to call super() for calling the parent class constructor
    // otherwise childclass instance will have the value of undefined for those properties which are
    // initiated by paretn class constructor
    // For this example childinstance will have a = undefined
    super(props);
  }
  abc = "hello from childclass";
  greet() {
    return abc;
  }
}
let childInstance = new childClass("child");
console.log(childInstance.outerfunction()); // it will call parent outerfunction
