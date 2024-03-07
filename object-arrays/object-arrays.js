const testArray = [
  {
    id: 0,
    name: "Fatima",
    address: {
      city: "rwp",
      country: "PK",
      street: {
        homeAddress: "home address",
        fullStreetAddress: "full street address",
      },
    },
    job: {
      designation: {
        title: "clerk",
      },
      salary: {
        monthly: 25000,
        bonus: 2000,
      },
    },
  },
  {
    id: 1,
    name: "Talha",
    address: {
      city: "Lahore",
      country: "us",
      street: {
        homeAddress: "home address",
        fullStreetAddress: "full street address",
      },
    },
    job: {
      designation: {
        title: "clerk",
      },
      salary: {
        monthly: 30000,
        bonus: 2000,
      },
    },
  },
  {
    id: 3,
    name: "Ali",
    address: {
      city: "kpk",
      country: "PK",
      street: {
        homeAddress: "home address",
        fullStreetAddress: "full street address",
      },
    },
    job: {
      designation: {
        title: "clerk",
      },
      salary: {
        monthly: 40000,
        bonus: 2000,
      },
    },
  },
];

console.log("This is the ids of all the objects \n");
// prints all the ids
testArray.forEach((ele) => {
  console.log(ele.id, "\n");
});

console.log("This is the salary of all the objects greater than 20,000 \n");
//prints all the monthly salary greater than 20000
testArray.forEach((element) => {
  console.log(element.job.salary.monthly > 20000, "\n");
});

// console.log(
//   "This is the salary of all the objects greater than 20,000 but using filter method \n"
// );
// //prints all the monthly salary greater than 20000
// let filt = testArray.filter((filtr) => {
//   return filtr.job.salary > 25000;
// });
// console.log(filt);

//To find the salary with the total of bonus

testArray.forEach((el) => {
  console.log(el.job.salary.monthly + el.job.salary.bonus);
  console.log(
    `The amount of Salary adding with bonus = ${
      el.job.salary.monthly + el.job.salary.bonus
    }`
  );
});

console.log(
  "This is the salary after 17% tax deduction from the total of salary and bonus\n"
);
let taxs = testArray.map((tax) => {
  const total = tax.job.salary.monthly + tax.job.salary.bonus;
  const taxAmount = total * 0.17;
  return total - taxAmount;
});

console.log(taxs);
