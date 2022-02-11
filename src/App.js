import { useState } from "react";
import "./App.css";

function App() {
  const end = new Date("02/11/2022 8:0 PM");

  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;

  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);

  let timer;
  function showRemaining() {
    const now = new Date();
    const distance = end.getTime() - now.getTime();
    if (distance < 0) {
      clearInterval(timer);

      return;
    }
    setDays(Math.floor(distance / _day));
    setHours(Math.floor((distance % _day) / _hour));
    setMinutes(Math.floor((distance % _hour) / _minute));
    setSeconds(Math.floor((distance % _minute) / _second));

    document.getElementById("countdown").innerHTML = days + "days ";
    document.getElementById("countdown").innerHTML += hours + "hrs ";
    document.getElementById("countdown").innerHTML += minutes + "mins ";
    document.getElementById("countdown").innerHTML += seconds + "secs";
  }

  timer = setInterval(showRemaining, 1000);

  return (
    <div className="container">
      <h1>HOW LONG UNTIL FG DADS DRINKS????</h1>
      {days !== null && (
        <h1>
          {days} days, {hours} hours, {minutes} minutes and {seconds} seconds
        </h1>
      )}
    </div>
  );
}

export default App;
