var playerPoints = 0;
var playerChoice = "";
var compChooses = "";

var choices = ['rock', 'paper', 'scissors'];

  $('#rock').click( function(playerChoice, compChooses){
    var playerChoice = "rock";
    var compChooses = choices[Math.floor(Math.random() * choices.length)];
    $('.computerChose h2').text("Computer chose " + compChooses);
    
    if (playerChoice == "rock" && compChooses == 'paper') {
      $('.winner h2').text("Computer Wins");
      }

      else if (playerChoice == "rock" && compChooses == 'scissors') {
        $('.winner h2').text("You Won!");
        playerPoints++;
      $('.scoreCount h2').text("Score: " + playerPoints);
      }

      else if (playerChoice == "rock" && compChooses == 'rock') {
        $('.winner h2').text("It's a Draw");
      }

    
   });

  $('#paper').click( function(playerChoice, compChooses){
    var playerChoice = "paper";
    var compChooses = choices[Math.floor(Math.random() * choices.length)];
    $('.computerChose h2').text("Computer chose " + compChooses);
    
    if (playerChoice == "paper" && compChooses == 'scissors') {
      console.log("cpu wins");
      $('.winner h2').text("Computer Wins");
      }

      else if (playerChoice == "paper" && compChooses == 'rock') {
        $('.winner h2').text("You Won!");
        playerPoints++;
      $('.scoreCount h2').text("Score: " + playerPoints);
      }

      else if (playerChoice == "paper" && compChooses == 'paper') {
        $('.winner h2').text("It's a Draw");
      }
    
    
   });

  $('#scissors').click( function(playerChoice, compChooses){
    var playerChoice = "scissors";
    var compChooses = choices[Math.floor(Math.random() * choices.length)];
    $('.computerChose h2').text("Computer chose " + compChooses);
    
    if (playerChoice == "scissors" && compChooses == 'rock') {
      $('.winner h2').text("Computer Wins");
      }

      else if (playerChoice == "scissors" && compChooses == 'paper') {
        $('.winner h2').text("You Won!");
        playerPoints++;
      $('.scoreCount h2').text("Score: " + playerPoints);
      }

      else if (playerChoice == "scissors" && compChooses == 'scissors') {
        $('.winner h2').text("It's a Draw");
      }
   });

  $('.resetBtn h1').click( function(playerChoice, compChooses){
    playerPoints = 0;
    $('.scoreCount h2').text("Score: 0");
    
    $('.computerChose h2').text("");
    $('.winner h2').text("");
  });