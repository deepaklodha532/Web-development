var x = document.getElementById("mytxt");
var currsize = 16;
x.onkeydown = (e) => {
  var data = e.key;
  var mypara = document.getElementById("p1");
  if (data == "+") {
    currsize += 5;
    mypara.style.fontSize = currsize + "px";
  } else if (data == "-") {
    currsize -= 5;
    mypara.style.fontSize = currsize + "px";
  }
};
// x.onkeypress = (e) => {
//   var data = String.fromCharCode(e.charCode);
//   var mypara = document.getElementById("p1");
//   if (data == "+") {
//     currsize += 5;
//     mypara.style.fontSize = currsize + "px";
//   } else if (data == "-") {
//     currsize -= 5;
//     mypara.style.fontSize = currsize + "px";
//   }
// };
