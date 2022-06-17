const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const chekWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No one wins.....');
    }
}
chekWinner(scoreDolphins, scoreKoalas);
//    chekWinner(576, 111);