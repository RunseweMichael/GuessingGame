const form = document.getElementById('form');
const userGuess = document.getElementById('guess');
const check = document.getElementById('btn');
const attempt = document.getElementById('count');
const hint = document.getElementById('hint');
const messageBox = document.getElementById('message');
const life = document.getElementById('life');
const body = document.getElementById('body');
const h1 =document.getElementById('h1');
const text = document.getElementById('text');
const reset = document.getElementById('reset');
const play= document.getElementById('startBtn');
const level = document.getElementById('level');
const frontPage = document.getElementById('frontPage');
const container = document.getElementById('container');



play.addEventListener('click', () => {
    frontPage.style.display = 'none';
    container.style.display = 'flex';
})



let compChoice;

level.addEventListener('change', (event) => {
    event.preventDefault();

    let choice = (event.target.value)

    if (choice == 'easy'){
        compChoice = Math.floor(Math.random() * 5) +1;
    }
    else if(choice =='intermediate'){
        compChoice = Math.floor(Math.random() * 10) +1;
    }

    else{
        compChoice = Math.floor(Math.random() * 100) +1;
    }
})



let userAttempt = 0;
let lifeline = 3;



check.addEventListener('click', (event) => {
    event.preventDefault();
    
    const userChoice = userGuess.value.trim();

    if (userChoice == compChoice){
        messageBox.style.display = 'block';
        messageBox.innerText = `YOU WIN WITH ${lifeline} LIFELINE(S) LEFT! \n YOU ARE SUCH A PRO!!!`;
        userAttempt+=1;
        attempt.innerText = `Attempt Counter: ${userAttempt}`;
        // lifeline -=1;
        life.innerText = `Life: ${lifeline}`;
        check.disabled = true;
        h1.style.display = 'none';
        text.style.display = 'none';
        form.style.display = 'none';
        hint.style.display = 'none';
        container.style.backgroundImage = "url('winning img2.jpg')";
    }

    else if (userChoice !=compChoice && lifeline == 1){
        messageBox.innerText = "This is your last chance. Choose wisely!!"
        lifeline -=1;
        life.innerText = `Life: ${lifeline}`;
        userAttempt+=1;
        attempt.innerText = `Attempt Counter: ${userAttempt}`;
        messageBox.style.display = 'block';
        hint.style.display = 'none';
    }

    else if(userChoice != compChoice && lifeline == 0) {
        check.disabled = true;
        attempt.innerText = `Attempt Counter: ${userAttempt}`;
        hint.style.display = 'none';
        life.innerText = "Life: 0";
        messageBox.innerText= "You Lose!!!"
        container.style.backgroundImage = "url('lose.jpg')";
        h1.style.display = 'none';
        text.style.display = 'none';
        form.style.display = 'none';
        // body.style.backgroundSize = "cover";
        // body.style.backgroundRepeat = "no-repeat";
        // body.style.backgroundPosition = "center";
    }

    else if (userChoice > compChoice){
        hint.style.display = 'block';
        messageBox.style.display = 'block';
        messageBox.innerText = "Too high! Try again.";
        hint.innerText = `Hint: The number is less than ${userChoice}`;
        userAttempt+=1;
        attempt.innerText = `Attempt Counter: ${userAttempt}`;
        lifeline -=1;
        life.innerText = `Life: ${lifeline}`;
    }

    else if (userChoice < compChoice){
        hint.style.display = 'block';
        messageBox.style.display = 'block';
        messageBox.innerText = "Too low! Try again";
        hint.innerText = `Hint: The number is more than ${userChoice}`;
        userAttempt+=1;
        attempt.innerText = `Attempt Counter: ${userAttempt}`;
        lifeline -=1;
        life.innerText = `Life: ${lifeline}`;
    } 
})



reset.addEventListener('click', () => {
    location.reload();
})
