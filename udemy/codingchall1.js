const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / (johnHeight * johnHeight);
const higherBmi = markBmi > johnBmi;
console.log(markBmi, johnBmi, higherBmi); 
