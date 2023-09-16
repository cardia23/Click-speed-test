const click = document.getElementById("click");
const reset = document.getElementById("reset");
let accountant = document.getElementById("accountant");
let accountant1 = 0;

let countdownInterval;

const clicked = function (){
    accountant.innerText = accountant1++;
    stopwatch2();
}

click.addEventListener("click", clicked)

reset.addEventListener("click", function () {
    secondsDisplay.textContent = "";
  accountant1 = 0;
  accountant.innerText = "";
  clearInterval(countdownInterval);
  countdownInterval = null;
  count = 5;
  click.innerText = "Clique-me para iniciar a contagem";
  click.addEventListener("click", clicked)
  reset.style.visibility = "hidden"
});

const stopwatch = document.querySelector(".stopwatch");
const secondsDisplay = stopwatch.querySelector("#seconds");

function stopwatch2() {
    if (countdownInterval) {
      return;
    }
  
    count = 0;
    secondsDisplay.textContent = count.toFixed(2);
  
    countdownInterval = setInterval(() => {
      if (count >= 5) {
        clearInterval(countdownInterval);
        click.removeEventListener("click", clicked);
        countdownInterval = null;
        secondsDisplay.textContent = "5 segundos";
        let resultClick = accountant.textContent;
        let resulFinal = resultClick / 5;
        accountant.textContent = "Resultado: " + resulFinal + " CPS";
        reset.style.visibility = "visible";
        click.innerText = "Reinicie para tentar de novo.";
      } else {
        count = count + 0.01;
        secondsDisplay.textContent = count.toFixed(2);
      }
    }, 10);
  }
  