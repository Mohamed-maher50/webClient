// second question
var x = "In 2023 Goodness Comes After Suffering 7P";
var con = "",
  lword = "",
  mid = "",
  sec = "";
con = x[0] + x[x.length - 1];
// or con = x[0] + x.at(-1);
for (let i = 0; i < x.length; i++) if (x[i] == " ") lword += x[i + 1];
mid = x.split(" ");
mid = mid[Math.floor(mid.length / 2)];
sec = x.split(" ")[1];
console.log(con);
console.log(lword);
console.log(mid);
console.log(sec);
