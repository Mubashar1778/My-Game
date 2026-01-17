let num = 15;
let usernum = prompt("Enter correct Number");
let heading = document.querySelector(".game-heading");


   while (Number(usernum) !== num) {
       usernum = prompt("Try again! ❌ ");
   }
   heading.innerText = "🎉 Thank you! You entered my birthday date 🎂";

