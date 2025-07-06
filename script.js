const guessnum = Math .trunc(Math .random()*20)+1
let score=20;
document .querySelector('.number').textContent = guessnum;
document .querySelector('.check').addEventListener('click',function(){
    console.log('.check', 'send the valau');
    const guess =Number (document .querySelector('.guess').value)
    console.log (guess);
    if (!guess){
        document .querySelector(".message").textContent = 'no number entered'
    }
    else if (guess === guessnum){
        document .querySelector(".message").textContent = "congrate"
        document .querySelector("body").style.background = "green"
        document .querySelector(".number").style.width= "30rem"
        document .querySelector(".number").textContent = guess

    }
    else if (guess > guessnum){
        document .querySelector(".message").textContent = "the Number is high"
        score <= 0 ? document.querySelector(".message").textContent = 'you lose':score--
        document .querySelector('.score').textContent =score;

    }
    else if( guess<guessnum){
        document .querySelector(".message").textContent = "the Number is low"
        score <= 0 ? document.querySelector(".message").textContent = 'you lose':score--
        document .querySelector('.score').textContent =score;


    }

});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width = '15rem';
});