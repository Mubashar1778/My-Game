let userscore = 0;
let compscore = 0;
let roundsPlayed = 0;
const maxrounds = 10;


let image1 = document.querySelector("#Rock");
let image2 = document.querySelector("#Paper");
let image3 = document.querySelector("#Scissor");
let msg = document.querySelector("#pick-btn");
let msg2 = document.querySelector("#null-btn");
let msg3 = document.querySelector("#full-btn");
let youscore = document.querySelector("#you-num");
let compscore2 = document.querySelector("#comp-num");
let resetbtn = document.querySelector("#reset");



const drawGame = () => {
    msg.innerText = "Huh… It’s a tie!";
    msg.style.backgroundColor = "#f1c40f";
}

const showWinner = (userwin) => {
    if(userwin){
    userscore++;
    youscore.innerText = userscore;
    msg.innerText = "Boom! You smashed it! ";
    msg.style.backgroundColor = "#2ecc71";
    }
    else{
        compscore++;
        compscore2.innerText = compscore;
        msg.innerText = "Oops! Better luck next time!";
        msg.style.backgroundColor = "#e74c3c";
    }
};

// userchoice

let playgame = (userchoice) => {
    console.log("User choice =", userchoice)

    let compchoice = gencomp();
    console.log("Comp choice =", compchoice);
    
    msg2.innerText = `${userchoice}`;
    msg3.innerText = `${compchoice}`;
    
    if(userchoice === compchoice) {
        drawGame();
    }
   else{
     let userwin = true
     if(userchoice === "Rock") {
        userwin = compchoice === "Paper"? false:true;
     }
     else if(userchoice === "Paper") {
        userwin = compchoice === "Scissor"? false:true;
     }
     else{
        userwin = compchoice === "Rock"? false:true;
     }
     showWinner(userwin);
   }

   if(roundsPlayed >= maxrounds) return;
    roundsPlayed++;

      if(roundsPlayed === maxrounds) {
        // Decide overall winner
        let finalMsg = "true";
        if(userscore > compscore) finalMsg = "You Win the Game!";
        else if(compscore > userscore) finalMsg = "😅 You Lose the Game!";
        else finalMsg = "🤝 It's a Tie!";

        // Show final message
        msg.innerText = finalMsg;
        msg.style.backgroundColor = (userscore >= compscore) ? "#2ecc71" : "#e74c3c";

        // Disable further clicks
        image1.style.pointerEvents = "none";
        image2.style.pointerEvents = "none";
        image3.style.pointerEvents = "none";

        // // Reset button now visible / ready
        resetbtn.style.display = "inline-block";

   };
}
//  for Rock

image1.addEventListener("click",() => {
    let userchoice = image1.getAttribute("id");
    playgame(userchoice)
});

// For paper

image2.addEventListener("click",() => {
    let userchoice = image2.getAttribute("id");
    playgame(userchoice)
});

// for scissor

image3.addEventListener("click",() => {
    let userchoice = image3.getAttribute("id");
    playgame(userchoice)
});

// compchoice

let gencomp = () => {
    let arr = ["Rock", "Paper", "Scissor",];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
}

// reset


resetbtn.addEventListener("click", () => {

    window.location.reload();
});






     