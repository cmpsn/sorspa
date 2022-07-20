
import { useState, useEffect } from 'react';

function padLeadingZeros(num, size) {
  num = num + '';
  if (num.length < size) num = "0" + num;
  return num;
}

function calculateTimeLeft(timeLimit) {
  const difference = timeLimit - new Date().getTime();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minute: Math.floor((difference / (1000 * 60)) % 60),
      sec: Math.floor((difference / 1000) % 60)
    }
  }
  return timeLeft;
}

// Time PARAMETERS
// const delayedHours = 12;
// const delayedMins = 40;
// const delayedSecs = 12;
// const timeLimit = new Date().getTime() + new Date().setHours(delayedHours, delayedMins, delayedSecs);
const actualDate = new Date();
const timeLimit =  new Date(actualDate.getFullYear(), actualDate.getMonth(), actualDate.getDate(), 23, 59, 59)

// Timer Component
const CountDownTimer = () => {

  const initialTimeLeft = calculateTimeLeft(timeLimit);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

  useEffect(() => {
    const countInterval = setInterval(() => {
      const currentTimeLeft = calculateTimeLeft(timeLimit);
      setTimeLeft(currentTimeLeft);
    }, 1000);

    // Clear the counting when the component is unmounted.
    return () => clearInterval(countInterval);
  }, []);


  return (
    <div id="timer" className="flex-nowrap d-flex justify-content-center py-2">
      {Object.keys(timeLeft).map((timeLeftKey) => { 
        return (
          <div 
            key={timeLeftKey} 
            className="align-items-center flex-column d-flex justify-content-center lh-sm mx-1 mx-md-3"
          >

            <div className="fs-2 fw-bolder bg-secondary border border-4 border-secondary rounded text-light px-3 py-2">
              {padLeadingZeros(timeLeft[timeLeftKey], 2)}
            </div>

            <div className="fs-6 fw-bolder text-uppercase mt-2">
              {timeLeftKey}
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default CountDownTimer;