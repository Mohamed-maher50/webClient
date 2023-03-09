var x = "The Price of 1 egg is 7 EGP";
var res = 0,
  cas,
  up = 0,
  down = 0,
  collect = "";
for (let i = 0; i < x.length; i++) if (!isNaN(x[i])) res += +x[i];
cas = res + x.length;

for (let i = 0; i < x.length; i++)
  if (x[i] == x[i].toUpperCase() && x[i] != " " && isNaN(x[i])) up++;
// author answer
// check ascii table
// for (let i = 0; i < x.length; i++) {
//   var c = x[i].charCodeAt();
//   if (c > 59 && c < 91) up++;
// }
for (let i = 0; i < x.length; i++)
  if (x[i] == x[i].toLowerCase() && x[i] != " " && isNaN(x[i])) down++;
for (let i = 0; i < x.length; i++)
  if (!isNaN(x[i]) && x[i] != " ") collect += x[i];
console.log(res);
console.log(cas);
console.log(up);
console.log(down);
console.log(collect);
