function generate(){
    var randomNumber = Math.floor(Math.random() * 500);
    var result = document.getElementById("result");
    if (result) {
        result.textContent = "Random Number: " + randomNumber;
      }
}