let isTrue = true;
let isFalse = false;

console.log(isTrue, isFalse);

let p = 10;
let w = 20;
let s = "10";

console.log(p > w);
console.log(p < w);
console.log(p == w); ///ერთი ტოლობა არის მინიჭების ოპერატორი,ანუ ვეუბნებით ცვლადს რომ ის ამას უდრის, შესადარებლად უნდა გამოვიყენოთ ორი ან სამი ტოლობა
console.log(p == s); /// ორი ტოლობა აიგნორებს დეით ტიპებს რათა შევადაროთ ცვლადები იმ შემთხვევაში თუ მათგან თუნდაც ერთში არის რიცხვითი სიმბოლოები
console.log(p === s); /// სამი ტოლობა ადარებს რიცხვით სიმბოლებს დეითა ტიპების მიხედვით
console.log(p >= w); /// მეტი ან ტოლი
console.log(p <= w); /// ნაკლები ან ტოლი

console.log(p != w); /// არ არის ტოლი

console.log(!isTrue); /// არსებული ბულიანის შებრუნებული
console.log(!isFalse); /// არსებული ბულიანის შებრუნებული

console.log(isFalse && isTrue); /// აბრუნებს True ს თუ ორივე მნიშვნელობა ჭეშმარიტია, ერთი მაინც თუ false არის მაშინ აბრუნებს False
console.log(isFalse || isTrue); /// აბრუნებს True ს თუ ერთი მნიშვნელობა ჭეშმარიტია, ორივე თუ false არის მაშინ აბრუნებს False

let shuqnishani = "green";

console.log(shuqnishani === "green");

if (shuqnishani === "green") {
  console.log("თქვენ შეგიძლია წახვიდეთ წინ");
} else if (shuqnishani === "red") {
  console.log("თქვენ არ შეგიძლიათ წახვიდეთ წინ");
} else if (shuqnishani === "yellow") {
  console.log("მოემზადეთ");
} else {
  console.log("დარეკეთ სერვისში");
}
