function prn(msg) {
    document.write(msg + '<br>');
}

// function isPrime(num) {
//     for (var i = 2; i < num; i++) {
//         if ((num % i) === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (var i = 100; i > 0; i--) {
//     if (isPrime(i)) {
//         prn(i);
//     }
// }

// var i = 100;
// while (i > 0) {
//     if (isPrime(i)) {
//         prn(i);
//     }
//     i--;
// }

// var cars = ['BMW X5', 'Ferari F430', 'ZAZ Sens'];
// prn(cars.length);

// cars[30] = 'Toyota LC200';
// prn(cars.length);
// prn(cars[0]);
// cars.push('Audi Q5');
// prn(cars.length);

// prn('Unexisting index');
// prn(cars[10]);

// // for (var i = 0; i < cars.length; i++) {
// //     prn(cars[i]);
// // }
// prn('!!!Iterating!!!');

// cars.forEach(function (el) {
//     prn(el);
// });

// var carYears = {
//     'Ferrari F430' : 2010,
//     'ZAZ Sens' : 1999,
//     'Toyota LC200' : 2011
// };

// carYears['BMW X5'] = 2015;
// var counter = 0;
// for (var key in carYears) {
//   prn(key + ': ' + carYears[key]);
// }

function sayName() {
    return 'I am ' + this.name + 'from' + this.year;
}

var ferrari = {};
ferrari.name = 'Ferrari F430';
ferrari.year = 2010;
ferrari.say = sayName;

var toyota = {
    name: 'Toyota LC200',
    year: 2011,
    say: sayName
}

prn(ferrari.name);
prn(toyota.name);
prn(ferrari.say());
prn(toyota.say());

function Car (name, year) {
    this.name = name;
    this.year = year;
    this.say = sayName;
    return this;
}

var sens = new Car('ZAZ Sens', 1999);
prn(sens.say());

var jeep = new Car('Jeep Grand', 2017);
prn(jeep.say());