const testArray = [
  {
    id: 0,
    name: "Kashif",
    adress: {
      city: "Lahore",
      country: "PK",
    },
    street: {
      homeAddress: "home address 0",
      fillStreetAdress: "full street address 0 ",
  
    },
    job: {
      designation: {
        title: "clerk",
      },
      salary: {
        monthly: 25000,
      }
    }
  },
  {
    id: 1,
    name: "Usman",
    adress: {
      city: "Rawalpindi",
      country: "PK",
    },
    street: {
      homeAddress: "home address 1",
      fillStreetAdress: "full street address 1 ",
  
    },
    job: {
      designation: {
        title: "clerk2",
      },
      salary: {
        monthly: 25000,
      }
    },
  },
  {
    id: 2,
    name: "Asad",
    adress: {
      city: "Karachi",
      country: "PK",
    },
    street: {
      homeAddress: "home address 2",
      fillStreetAdress: "full street address 2 ",
  
    },
    job: {
      designation: {
        title: "clerk3",
      },
      salary: {
        monthly: 45000,
      }
    },
  },
  {
    id: 4,
    name: "Hanan",
    adress: {
      city: "GujarKhan",
      country: "PK",
    },
    street: {
      homeAddress: "home address 4",
      fillStreetAdress: "full street address 4 ",
  
    },
    job: {
      designation: {
        title: "clerk4",
      },
      salary: {
        monthly: 55000,
      }
    },
  },
  {
    id: 5,
    name: "Rehman",
    adress: {
      city: "Peshawar",
      country: "PK",
    },
    street: {
      homeAddress: "home address 5",
      fillStreetAdress: "full street address 5 ",
  
    },
    job: {
      designation: {
        title: "clerk5",
      },
      salary: {
        monthly: 65000,
      }
    },
  }
  ]

  testArray.forEach(element => {
    if (element.job.salary.monthly === 25000) {
      // Your code logic here
      console.log(element); 
    }
  });
  
//   console.log(
//     testArray.find(element => element.job.salary.monthly === 25000)
//   );

// const jojo = ["Bannana", "Mango", "big apple", "nothing"];

// for(let i = 0; i<jojo.length; i++){
//   console.log(i+1, jojo[i])
// }
// const momo = ["Bannana", "Mango", "big apple", "nothing"];

// for(mo of momo){
//   console.log(mo)
// }

// console.log(Math.floor(Math.random()* 5 +1))


// const bro = (nameofthing) => {console.log("my name is Talha");
//                     console.log( `The name of thing is ${nameofthing}`)}

// bro(2);