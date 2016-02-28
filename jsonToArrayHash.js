// Author: Juan Ponce


// Data will be the data structure we need to manipulate
var data = {
  "Production": {
    "host1": "host1.com",
    "host2": "host2.com",
    "host3": "host3.com",
    "host4": "host4.com",
    "host5": "host5.com"
  },
  "other": {
    "host1": "host1.com",
    "host2": "host2.com",
    "host3": "host3.com",
    "host4": "host4.com",
    "host5": "host5.com"
  }
};



// Print to console.
console.log("Data : ");

function tf(data){
  var hold;
  var value = "";

  var a = new Array(); //for array

  for (d in data) {
    hold = data[d];
    console.log(d + " : ");
    for (e in hold) {
      console.log(e + " : " + hold[e]);

      value = {
        "label": hold[e],
        "catgory": d
      };
      a.push(value);
    };
  };
  return a
};

console.log("Final Output : ");
console.log(tf(data));
