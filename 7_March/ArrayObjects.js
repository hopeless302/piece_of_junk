const arrayone = [
  {
    id: "Mern1",
    name: "indexOne",
    role: "Admin",
    isActive: true,
  },

  {
    id: "Mern2",
    name: "indexTwo",
    role: "user",
    isactive: true,
  },
];

const objectMiddle = {
  id: "Mern",
  name: "IndexThree",
  role: "user",
  isActive: false,
};

const objectone = {
  name: "Javascript",
  isActive: true,
  isDeleted: false,
  version: "Es9",
};

const objectEnd = {
  name: "End",
  isActive: false,
  isDeleted: true,
};

arrayone.unshift(objectone);
arrayone.push(objectEnd);

// const arrayMiddle = Math.slice(floor(arrayone.length / 2));
// arrayone.arrayMiddle;

const middleIndex = Math.floor(arrayone.length / 2); // Calculate the middle index
arrayone.splice(middleIndex, 0, objectMiddle); // Insert objectMiddle at the middle index

for (i = 0; i < arrayone.length; i++) {
  console.log(arrayone[i]);
}

console.log(`The length of arrayone index is ${arrayone.length}`);
