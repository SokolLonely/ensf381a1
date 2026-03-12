let totalSeconds = 600
const timerElement = document.getElementById("timer");
console.log(timerElement);

let txt =  "Order time left: ";

function update_timer()
{
   let minutes = Math.floor(totalSeconds / 60);
   let seconds = totalSeconds % 60;
   time_format = `${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
   timerElement.innerHTML = txt + time_format;
   totalSeconds -=1;
   console.log(totalSeconds);
   if (totalSeconds < 0)
   {
    console.log("time's up");
    window.location.href="order_summary.html";
   }

}
const timerInterval = setInterval(update_timer, 1000);
update_timer();