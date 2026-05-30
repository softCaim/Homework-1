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
    break;
  default:
    console.log("არასწორი მნიშვნელობა");
}
