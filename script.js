let messege1 = document.getElementById("messege1")
let messege2 = document.getElementById("messege2")
let messege3 = document.getElementById("messege3")
let messege4 = document.getElementById("messege4")


var answer = Math.floor(Math.random() * 100) + 1;


var num_of_guess =  0;
var guess_nums = []


function play(){
  var user_guess = document.getElementById("guess").value;
  
  if(user_guess < 1 || user_guess > 100 ){
    messege4.textContent = "please enter a number between 1 to 100"
  }

  else {
    guess_nums.push(user_guess);
    num_of_guess+= 1;
  }

  if(user_guess < answer){
     messege1.textContent = "your guess is too low";
     messege2.textContent = "number of guess" + num_of_guess;
     messege3.textContent = "number of guess are" + guess_nums;
  }

  else if(user_guess > answer){
    messege1.textContent = "your guess is too high";
    messege2.textContent = "number of guess" + num_of_guess;
    messege3.textContent = "number of guess are" + guess_nums;
  }

  else if(user_guess == answer){
    messege1.textContent = "Congratulation! you won!"
    messege2.textContent = "the number was " + answer;
    messege3.textContent = "you guessed it in " + num_of_guess + " guess"
  }

}

