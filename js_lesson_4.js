let first, second, third;

first = 1; //not 'let first = 1;'
second = 2;
third = 3;

let x = 10;
let y = 5;

let z = x + y;
console.log(z);
console.log(z * 5);
console.log(z - 1);
console.log(z / 3);
console.log(z % 2); //ნაშთი

let e = 5;
e += 5; //e = e + 5
console.log(e);

e -= 3; //e = e - 3
console.log(e);

e *= 2; //e = e * 2
console.log(e);

e /= 4; //e = e / 4
console.log(e);

e %= 3; //e = e % 3
console.log(e);

let num = 10;
let str = "20";

console.log(typeof num); // ვიგებთ სტრინგის ტიპს
console.log(typeof str);

console.log(num + str);
console.log(typeof (num + str)); // რიცხვს + სტრინგი = სტრინგი(რიცხვი იქცედვა სტრინგად და მერე ხდება კონკატენაცია)
console.log(typeof (num - str)); // რიცხვს - სტრინგი = რიცხვი(სტრინგი იქცევა რიცვად და ისე აკლდება)
let str_2 = "hello";
console.log(typeof (num + str_2)); // რიცხვს + სტრინგი = სტრინგი(კონკატენაიით)
console.log(num - str_2); // შეცდომა, რადგან ანბანური სიმბოლოების სტრინგი ვერ გადაიქცევა რიცხვად და კონსოლში დაწერს NaN(Not a Number), იგივეა გამრავლებაზე

let a = "Hello";
let b = "world!";

console.log(a + " " + b);

let k = 20;

c = 30;
d = 40;

let v = 5;
let u = 2;
console.log(k, c, d);
console.log(v % u);
