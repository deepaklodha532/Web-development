let myText = document.getElementById("mytext");
myText.onkeydown = (e) => {
  if (e.key < "0" || e.key > "9") {
    alert("Please type digits only");
    return false;
  }
};
