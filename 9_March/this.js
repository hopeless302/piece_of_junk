const obj = {
  Name: "Talha",
  eng: 24,
  math: 26,
  isl: 89,
  //we can't not use this in arrow functions  Arrow functions do not have their own this binding
  getval: () => {
    const avg = (obj.eng + obj.math + obj.isl) / 3;
    console.log(avg);
  },
};

// using same object with access of this keyword in the object but the simple function
obj.getval();

const objec = {
  Name: "Talha",
  eng: 24,
  math: 26,
  isl: 89,
  getvalue() {
    const avger = (this.eng + this.math + this.isl) / 3;
    console.log(avger);
  },
};

objec.getvalue();
