let temperature = 31;

if (temperature < 0) {
  console.log("ყინავს");
} else if (0 <= temperature <= 10) {
  console.log("ძალიან ცივა");
} else if (11 <= temperature <= 20) {
  console.log("ცივა");
} else if (21 <= temperature <= 30) {
  console.log("თბილა");
} else if (temperature > 30) {
  console.log("ცხელა !");
}
