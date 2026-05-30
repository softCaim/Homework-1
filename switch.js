const age = 15;

switch (true) {
  case age < 13: //false
    console.log("ასაკი არ არის 13 წელზე ნაკლები");
    break;
  case age >= 13 && age < 20: //True
    console.log("ასაკი არის 12-ზე მეტი და 20-ზე ნაკლები");
    break;
  case age > 50:
    console.log("ასაკი 50-ზე მეტია");
    break; // break ვუწერთ იმიტომ რომ კონსოლში შემოწმებული მნიშვნელობის მერე არ გაგრძელდეს switch-ის გაშვება
  default:
    console.log("არასწორი მნიშვნელობა");
}

let day = 1;

switch (day) {
  case 0:
    console.log("ორშაბათი");
    break;
  case 1:
    console.log("სამშაბათი");
    break;
  case 2:
    console.log("ოთხშაბათი");
    break;
  case 3:
    console.log("ხუთშაბათი");
    break;
  case 4:
    console.log("პარასკევი");
    break;
  case 5:
    console.log("შაბათი");
    break;
  case 6:
    console.log("კვირა");
    break;
  default:
    console.log("არასწორი მნიშვნელობა");
}
