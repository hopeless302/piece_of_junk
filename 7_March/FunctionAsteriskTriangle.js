function Triangle(n){
    for(let i = 1; i<=n; i++){
        let row = "";
    for(let j = 1; j<=i; j++){
        row += "*";
    }
    console.log(row);
    }
}

Triangle(7);

//Know we need to collect the Grades of the giving array

// const mark = [55, 98, 96, 48, 55, 81]
// let sum = 0; 
// for (let i = 0; i<mark.length; i++){
//     sum += mark[i];
// };

// console.log(sum);

// let grade = (sum/mark.length)*100;

let sum = 0;
const marks = [55, 98, 96, 48, 55,81];
for(let i = 0; i<marks.length; i++){
  sum += marks[i];
};

console.log(`The Total sum of the array is = ${sum}`);

let grade = (sum/(marks.length*100))*100;

grade = Math.round(grade)
console.log(`Your grade percentage is = ${grade}  `);

if(grade >90){
    console.log("You Got A+ grade");
} else if(grade >80 && grade <90){
    console.log("You Got A grade");
}
else if(grade >70 && grade <80){
    console.log("You Got B grade");
}
else if(grade >60 && grade <70){
    console.log("You Got C grade");
}
else if(grade >50 && grade <60){
    console.log("You Got D grade");
}
else{
    console.log("You Got F grade");
}

