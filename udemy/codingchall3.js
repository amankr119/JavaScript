//const scoreDolphins=(96+108+89)/3;
//const scoreKoalas=(88+91+110)/3;
//console.log(scoreDolphins,scoreKoalas);
//console.log(typeof scoreDolphins);
//if(scoreDolphins>scoreKoalas){
//    console.log("dolphins win the trophy ");
//}else if(scoreDolphins<scoreKoalas){
//    console.log('koalas win the trophy');
//}else if(scoreDolphins===scoreKoalas){
//    console.log('both win the trophy');
//}

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("dolphins win the trophy ");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('koalas win the trophy');
} else if (scoreDolphins === scoreKoalas && scoreDolphins>=100 && scoreKoalas>=100) {
    console.log('both win the trophy');
}else{
    console.log('no one wins the trophy');
}