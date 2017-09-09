var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var tableMerge = femaleNames.concat(maleNames);

var newName = 'Kacper';

var nameCheck = tableMerge.indexOf(newName);

if (nameCheck === -1) {
  tableMerge.push(newName);
  
} else {
  console.log("This name already exists")
}

console.log(tableMerge);
