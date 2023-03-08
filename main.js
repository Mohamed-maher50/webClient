// ( 0 )
var obj = {
  name: "Palestine",
  cities: ["Nablus", "Ramallah", "Gaza"],
  population: 4923178,
  message: function () {
    console.log("Arab country till the end");
  },
  has_arabs: false,
};

// (1)
console.log(obj);
// (2)
console.log(obj.cities);

// (3)
console.log(obj.cities[1]);
// ( 4 )
console.log(obj.cities[obj.cities.length - 1]);
//or console.log(obj.cities.at(-1))

// (5)
obj.cities.push("Jerusalem"); // push method ( function ) will add Jerusalem in the end of array
console.log(obj);

//( 6 )
obj.population += 150; // or obj.population = obj.population + 150;
console.log(obj);
// (7)
obj.message();
// (8)
obj.name = obj.name.toUpperCase();
// ( 9 )
// if you have one statement(ممكن تقول سطر) // you can remove {} // note don't use it with function
if (obj.has_arabs) console.log(obj.name + " has arabs");
else console.log(obj.name + " has no arabs");
// ( 10 )
obj.longitude = "35° 13' 37.79 \" E"; // you can't use ( " ) between "" to use it put ( \ ) before it
obj.latitude = "“31° 56' 50.46 \" N";
// ( 11 )
console.log(obj);
// ( 13 )
obj.has_arabs = !obj.has_arabs; // ! operator if value true will make it false if false will be false
console.log([...obj]);
