const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBmi = markMass / markHeight ** 2;
const johnBmi = johnMass / (johnHeight * johnHeight);
console.log(markBmi, johnBmi);
if (markBmi > johnBmi) {
    console.log(`Mark's (${markBmi}) bmi is higher then john's (${johnBmi}) !`);
}
else {
    console.log(`John's (${johnBmi}) bmi is higher then Marks's ! (${markBmi})`);
}