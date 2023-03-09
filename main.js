var x = "The NEW ERA of Sinai University";
var ahalf = "",
  bhalf = "",
  res = "",
  count_e = "";
ahalf = x.slice(0, x.length / 2 + 1);
bhalf = x.slice(x.length / 2);
for (let i = 0; i < x.length; i++)
  if (x[i].toLocaleLowerCase() == "e") count_e++;

res += x.slice(15, 16);
res += x.slice(21, 22);
console.log(ahalf);
console.log(bhalf);
console.log(res);
console.log(count_e);
