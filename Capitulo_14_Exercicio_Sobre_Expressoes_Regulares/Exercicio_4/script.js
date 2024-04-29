const ip = /\d{3}\.\d{1}\.\d{1}\.\d{1}/;

console.log(ip.test("135.42.5.7"));
console.log(ip.test("135.4.5.7"));
console.log(ip.test("135.42.15.7"));
console.log(ip.test("13.42.5.7"));