function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["luckySevens"].elements.length; 
        loopCounter++) {
        if (document.forms["luckySevens"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["luckySevens"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["luckySevens"]["num1"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["luckySevens"]["num1"].focus();
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["luckySevens"]["num1"].value;
    if (num1 == "0.00" || isNaN(num1) || num1 < 0) {
        alert("You must place a positive bet.");
        document.forms["luckySevens"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["num1"].focus();
        return false;
    }

    var start = num1;
    var total = 0;
    var highest = num1;
    var highestRoll = 0;
    var n1;
    var n2;
    var n3;

    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
      }

    while(start>0){
        total++;
        n1 = rollDice();
        n2 = rollDice();
        n3 = n2 + n1;
        if(n3 == 7){
            start = parseInt(start) + 4;
        } else{
            start--;
        }
        if(highest < start){
            highest = start;
            highestRoll = total;
        }
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("result").innerText = "Results"
    document.getElementById("startBet").innerText = num1;
    document.getElementById("totalRolls").innerText = total;
    document.getElementById("highest").innerText = highest;
    document.getElementById("rollAtHighest").innerText = highestRoll;
   return false;
}