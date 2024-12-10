
   let delay = 3; // Delay in seconds
   let timeRemaining = delay;

   // Countdown function
   const countdown = setInterval(() => {
       document.getElementById("countdown").innerText = `Time remaining: ${timeRemaining} seconds`;
       timeRemaining--;

       if (timeRemaining < 0) {
           clearInterval(countdown);
       }
   }, 1000);

   setTimeout(() => {
       const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
       document.getElementById("countdown").innerText = "Random number generated!";
       document.getElementById("result").innerText = `Generated Number: ${randomNumber}`;
   }, delay * 1000);