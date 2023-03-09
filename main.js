// q 3
var x = "A+ B+ C+ D+ F+";
var rep = "",
  slicer = "",
  rev = "";
for (let i = 0; i < x.length; i++) {
  if (x[i] != "+") rep += x[i];
  else rep += "-";
}
slicer = x.slice(3, 8);
rev = x.split("").reverse().join("", ",");
console.log(rep);
console.log(slicer);
console.log(rev);
